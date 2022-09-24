import React, { useState } from 'react';
import { Camera, CameraType } from "expo-camera";
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../../App';
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
    const [autoFocus, setAutoFocus] = useState();
    const [focusDepth, setFocusDepth] = useState();

    //A CHANGER DE PLACE?
    const [permission, setPermission] = Camera.useCameraPermissions();
    const previewPath = newPicture[0] ? newPicture[newPicture.length - 1].uri : "/"
    return (
        <View >
            <Camera
                useCamera2Api={true} autoFocus={true} ref={async (ref) => { setCamera(ref!) }}
                type={type} focusDepth={0} flashMode={flashActived} ratio={selectedRatio}
                style={styles.container}
            >
                <TouchableOpacity style={styles.preview} onPress={() => navigation.navigate("Preview")}>
                    <Image source={{ uri: previewPath }} style={styles.preview} />
                </TouchableOpacity>
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
        display: "flex",
        flexDirection: "column",
        justifyContent: 'space-between',
        alignItems: 'center',
        overflow: "visible",
        //borderColor: "white"
    },
    preview: {
        //position: "absolute",
        width: 50,
        height: 50,
        borderWidth: 1,
        borderColor: "red"
    },
    test: {
        borderWidth: 1,
        borderColor: "green",
        width: "100%",
        marginBottom: "75%"
    }
})