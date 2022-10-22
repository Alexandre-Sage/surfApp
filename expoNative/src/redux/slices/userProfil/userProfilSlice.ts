import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { getFetchFunction, getFetchSetState } from "../../../modules/fetch/basicFetch";
import { SpotListInterface } from "../../../interfaces/spotInterfaces";

declare interface UserHeaderInterface {
  userName: string,
  name: string,
  location: string,
  firstName: string,
  creationDate: string
}


const userSlice = createSlice({
  name: "user",
  initialState: {
    profilHeader: [] as Array<UserHeaderInterface>,
  },
  reducers: {
    setProfilHeader(state, action: PayloadAction<UserHeaderInterface[]>) {
      state.profilHeader = action.payload
    }
  },
  extraReducers(builder) {
    builder.addCase(getProfilHeader.fulfilled, (state, action) => {
      state.profilHeader = action.payload
    });
  }

});

export const getProfilHeader = createAsyncThunk("user/fetchUserHeader", async () => {
  try {
    const profilHeader = await getFetchFunction(`${process.env.DEVELOPMENT_USER_SERVER}/userProfil/header`);
    return profilHeader
  } catch (error) {
    console.log(error)
  }
});

export default userSlice.reducer;