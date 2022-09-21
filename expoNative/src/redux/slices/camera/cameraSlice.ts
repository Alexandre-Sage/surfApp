import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { Camera, CameraCapturedPicture } from "expo-camera";
import { PopUp } from "../../../components/popUp/PopUp";

export const takePicture = createAsyncThunk("camera/takePicture", async (camera: Camera): Promise<CameraCapturedPicture> => {
    try {
        const pic = await camera.takePictureAsync(/*{ onPictureSaved: async (p) => console.log(p) }*/)
        return pic
    } catch (error: any) {
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
        newPicture: {} as CameraCapturedPicture,
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
        }
    },
    extraReducers: builder => {
        builder.addCase(takePicture.fulfilled, (state, action): void => {
            state.newPicture = action.payload;
        });
        builder.addCase(takePicture.rejected, (state): void => {
            state.error = true
        });
        builder.addCase(getRatios.fulfilled, (state, action): void => {
            state.imageRatiosList = action.payload;
        });
        builder.addCase(getRatios.rejected, (state): void => { state.error = true });
    },
});
export const { setRatio, setFlash } = cameraSlice.actions
export default cameraSlice.reducer;