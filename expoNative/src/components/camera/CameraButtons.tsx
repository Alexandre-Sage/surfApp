import { Camera } from "expo-camera";
import React, { useState } from "react";
import { Image, Text, TouchableOpacity, View } from 'react-native';
import { useAppSelector, useAppDispatch } from '../../redux/hook';
import { takePicture, setFlash } from '../../redux/slices/camera/cameraSlice';
// import flash from "../../../assets/images/flash.svg"
import { RatiosList } from './RatiosList';
import { SvgUri } from "react-native-svg";
import styles from "../../styles/camera/CameraButtons.style"
interface CameraButtonsProps {
    flashActived: number,
    camera: Camera
};

export const CameraButtons = ({ flashActived, camera }: CameraButtonsProps): JSX.Element => {
    const [displayRatios, setDisplayRatios] = useState<Boolean>(false);
    const dispatch = useAppDispatch();
    const cameraTakePicture = async (camera: Camera) => dispatch(takePicture(camera));
    const handleDisplayRatios = () => displayRatios ? setDisplayRatios(false) : setDisplayRatios(true);
    const handleFlash = () => {
        const newFlashStatus = flashActived === 0 ? 1 : 0;
        dispatch(setFlash(newFlashStatus))
    };
    const imagePath = `${process.env.API_LAN}/images/assets/flash.svg`
    console.log(imagePath)
    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.flashButton} onPress={() => handleFlash()}>
                <SvgUri fill={"white"} uri={"http://192.168.1.12:4875/images/assets/flash.svg"} width="100%" height="100%" />
            </TouchableOpacity>
            <TouchableOpacity style={styles.takePicturebutton} onPress={() => cameraTakePicture(camera)} />
            {displayRatios ? <RatiosList camera={camera} /> : null}
            <TouchableOpacity onPress={() => handleDisplayRatios()} >
                <Text>Picture size</Text>
            </TouchableOpacity>
        </View>
    );
};