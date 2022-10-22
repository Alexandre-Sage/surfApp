import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { ImagePickerResult } from "expo-image-picker";
import { getFetchFunction, getFetchSetState } from "../../../modules/fetch/basicFetch";

import * as ImagePicker from "expo-image-picker";
import { MediaTypeOptions, launchImageLibraryAsync } from "expo-image-picker";
import { create } from "react-test-renderer";

declare interface PictureInterface {
  path: string,
  place: string,
}

const pictureSlice = createSlice({
  name: "picture",
  initialState: {
    pictures: [] as Array<PictureInterface>,
    newPicture: [] as Array<any>
  },
  reducers: {
    setPictureList(state, action: PayloadAction<PictureInterface[]>) {
      state.pictures = action.payload;
    },
    deleteNewPicture(state, action: PayloadAction<string>) {
      state.newPicture = state.newPicture.filter(picture => picture.uri !== action.payload)
    },
    setNewPicture(state, action: PayloadAction<any>) {
      state.newPicture = [...state.newPicture, action.payload]
    }
  },
  extraReducers(builder) {
    builder.addCase(getPictureList.fulfilled, (state, action: PayloadAction<PictureInterface[]>) => {
      state.pictures = action.payload
    });
    //
    builder.addCase(uploadImageFromLocalFiles.fulfilled, (state, action: PayloadAction<ImagePickerResult>) => {
      state.newPicture = [...state.newPicture, action.payload];
    })
  }
});

export const uploadImageFromLocalFiles = createAsyncThunk("picture/uploadFromLocalFiles", async (): Promise<ImagePickerResult> => {
  const newImage = await launchImageLibraryAsync({
    mediaTypes: MediaTypeOptions.All,
    quality: 1
  });
  //newImage.path=newImage.uri
  return newImage;
});

export const getPictureList = createAsyncThunk("picture/pictureListFetch", async () => {
  try {
    const pictureList = await getFetchFunction(`${process.env.DEVELOPMENT_IMAGE_SERVER}/userProfil/allPicture`);
    return pictureList;
  } catch (err) {
    console.log(err);
  };
});
export const { deleteNewPicture, setNewPicture } = pictureSlice.actions;
export default pictureSlice.reducer;