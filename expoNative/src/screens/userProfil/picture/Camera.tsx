import React, { useState } from 'react';
import { Camera, CameraType } from "expo-camera";

export const UserCamera = (): JSX.Element => {
    const [type, setType] = useState(CameraType.back)
    const [permission, setPermission] = Camera.useCameraPermissions();
    return (
        <Camera
            useCamera2Api={true}
            type={type}
        />
    );
};