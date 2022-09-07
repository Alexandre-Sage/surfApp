import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import * as Location from "expo-location";
import { CurrentLocationInterface } from "../../../interfaces/currentLocation";


export const getCurrentLocation = createAsyncThunk("currentLocation/getCurrentPosition", async (): Promise<CurrentLocationInterface> => {
    try {
        await Location.requestForegroundPermissionsAsync();
        const locationObject = await Location.getCurrentPositionAsync({});
        const currentLocation: CurrentLocationInterface = { ...locationObject.coords };
        return currentLocation;
    } catch (error) {
        console.log("location function error", error);
        return error as CurrentLocationInterface;
    };
});

const currentLocationSlice = createSlice({
    name: "currentLocation",
    initialState: {
        currentLocation: {} as CurrentLocationInterface,
        loading: false
    },
    reducers: {},
    extraReducers: builder => {
        builder.addCase(getCurrentLocation.pending, state => {
            state.loading = true;
        });
        builder.addCase(getCurrentLocation.fulfilled, (state, action) => {
            state.currentLocation = action.payload;
            state.loading = false;
        });
        builder.addCase(getCurrentLocation.rejected, state => {
            state.loading = false
        });
    }
});

export default currentLocationSlice.reducer;