import React, { useState } from 'react';
import { Camera, CameraType } from "expo-camera";
import { StyleSheet, Text, View } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../../App';
//import { TouchableOpacity } from 'react-native-gesture-handler';
//import { takePicture, setFlash } from '../../redux/slices/camera/cameraSlice';
import { CameraButtons } from './CameraButtons';
import { useAppSelector, useAppDispatch } from '../../redux/hook';
//import styles from '../../../styles/LandingPage/LandingPage.style';

export type CameraProps = NativeStackScreenProps<RootStackParamList, "Camera">

export default function UserCamera({ navigation }: CameraProps): JSX.Element {
    //LOCAL STATES
    const [camera, setCamera] = useState<Camera>({} as Camera);
    //REDUX
    const dispatch = useAppDispatch();
    const { newPicture, selectedRatio, flashActived } = useAppSelector((state) => state.camera);

    //MOVE TO REDUX

    const [type, setType] = useState(CameraType.back);
    //A CHANGER DE PLACE?
    const [permission, setPermission] = Camera.useCameraPermissions();

    return (
        <View >
            <Camera
                useCamera2Api={true} autoFocus={true} ref={async (ref) => { setCamera(ref!) }}
                style={styles.container} type={type} focusDepth={1} flashMode={flashActived}
                ratio={selectedRatio}
            >
                <CameraButtons camera={camera} flashActived={flashActived} />
            </Camera>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        width: "100%",
        height: "100%",
        borderWidth: 1,
        //borderColor: "white"
    },
    button: {
        width: 50,
        height: 50,
        borderWidth: 1,
        borderColor: "white",
        borderRadius: 100
    },
    preview: {
        position: "absolute",
        width: "100%",
        height: "50%",
        borderWidth: 1,
        borderColor: "red"
    }
})