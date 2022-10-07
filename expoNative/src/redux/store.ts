import { configureStore } from "@reduxjs/toolkit";
import currentLocationSlice from "./slices/currentLocation/currentLocationSlice";
import spotSlice from "./slices/spot/spotSlice";
import pictureSlice from "./slices/picture/pictureSlice";
import userSlice from "./slices/userProfil/userProfilSlice";
import cameraSlice from "./slices/camera/cameraSlice";
import mapSlice from "./slices/map/mapSlice";

export const store = configureStore({
    reducer: {
        currentLocation: currentLocationSlice,
        spot: spotSlice,
        picture: pictureSlice,
        user: userSlice,
        camera: cameraSlice,
        map: mapSlice
    }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;