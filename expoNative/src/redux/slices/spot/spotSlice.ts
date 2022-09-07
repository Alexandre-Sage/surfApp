import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { getFetchFunction, getFetchSetState } from "../../../modules/fetch/basicFetch";
import { SpotListInterface } from "../../../interfaces/spotInterfaces";


const spotSlice = createSlice({
    name: "spot",
    initialState: {
        spotList: [] as Array<SpotListInterface>,
        spotDetails: {} as any,
    },
    reducers: {
        setSpotList(state, action: PayloadAction<SpotListInterface[]>) {
            state.spotList = action.payload;
        }
    },
    extraReducers(builder) {
        builder.addCase(getSpotList.fulfilled, (state, action) => {
            state.spotList = action.payload
        });
    }
});

export const getSpotList = createAsyncThunk("spot/spotListFetch", async (): Promise<SpotListInterface[]> => {
    try {
        const spotList: Array<SpotListInterface> = await getFetchFunction(`${process.env.API_LAN}/spot/getAllSpots`);
        return spotList
    } catch (error) {
        return error as any
    }
})

export default spotSlice.reducer;

