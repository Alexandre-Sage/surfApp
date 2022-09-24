import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { Camera, CameraCapturedPicture } from "expo-camera";
import { PopUp } from "../../../components/popUp/PopUp";

export const takePicture = createAsyncThunk("camera/takePicture", async (camera: Camera): Promise<CameraCapturedPicture> => {
    try {
        const pic = await camera.takePictureAsync(/*{ onPictureSaved: async (p) => console.log(p) }*/)
        return pic
    } catch (error: any) {
        console.error("camera slice takePicture", error)
        return {} as CameraCapturedPicture;
    }
});

export const getRatios = createAsyncThunk("camera/getRatios", async (camera: Camera): Promise<string[]> => {
    const ratios = await camera.getSupportedRatiosAsync()
    return ratios;
});

const cameraSlice = createSlice({
    name: "camera",
    initialState: {
        newPicture: [] as Array<CameraCapturedPicture>,
        imageRatiosList: [] as Array<string>,
        selectedRatio: "",
        flashActived: 0,
        error: false,
    },
    reducers: {
        setRatio(state, action: PayloadAction<string>): void {
            state.selectedRatio = action.payload;
        },
        setFlash(state, action: PayloadAction<number>): void {
            state.flashActived = action.payload;
        },
        removePicture(state, action: PayloadAction<string>): void {
            state.newPicture = state.newPicture.filter(picture => picture.uri !== action.payload)
        },
    },
    extraReducers: builder => {
        //TAKE PICTURE BUILDER
        builder.addCase(takePicture.fulfilled, (state, action): void => {
            state.newPicture = [...state.newPicture, action.payload];
        });
        builder.addCase(takePicture.rejected, (state): void => {
            state.error = true
        });
        //GET RATIO BUILDER
        builder.addCase(getRatios.fulfilled, (state, action): void => {
            state.imageRatiosList = action.payload;
        });
        builder.addCase(getRatios.rejected, (state): void => { state.error = true });
    },
});
export const { setRatio, setFlash, removePicture } = cameraSlice.actions
export default cameraSlice.reducer;