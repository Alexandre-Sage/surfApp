import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { getFetchFunction, getFetchSetState } from "../../../modules/fetch/basicFetch";

declare interface PictureInterface {
    path: string,
    place: string,
}

const pictureSlice = createSlice({
    name: "picture",
    initialState: {
        pictures: [] as Array<PictureInterface>
    },
    reducers: {
        setPictureList(state, action: PayloadAction<PictureInterface[]>) {
            state.pictures = action.payload;
        }
    },
    extraReducers(builder) {
        builder.addCase(getPictureList.fulfilled, (state, action) => {
            state.pictures = action.payload
        });
    }
});

export const getPictureList = createAsyncThunk("picture/pictureListFetch", async () => {
    try {
        const pictureList = await getFetchFunction(`${process.env.API_LAN}/userProfil/allPicture`);
        return pictureList;
    } catch (err) {
        console.log(err)
    }
});

export default pictureSlice.reducer;