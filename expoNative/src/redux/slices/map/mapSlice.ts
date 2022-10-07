import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { MapLocationInterface } from "../../../interfaces/mapLocationInterface"


const mapSlice = createSlice({
    name: "map",
    initialState: {
        mapLocation: {} as MapLocationInterface,
        mapEnabled: false,
    },
    reducers: {
        setMapLocation: (state, action: PayloadAction<MapLocationInterface>): void => {
            state.mapLocation = action.payload;
        },
        setMapEnabled: (state, action: PayloadAction<boolean>): void => {
            state.mapEnabled = action.payload;
        },
    },
    extraReducers: builder => { }
});

export const { setMapLocation, setMapEnabled } = mapSlice.actions;
export default mapSlice.reducer;