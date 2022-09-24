import { Camera } from "expo-camera";
import React, { useState } from "react";
import { Image, StyleProp, StyleSheetProperties, Text, TouchableOpacity, View } from 'react-native';
import { useAppSelector, useAppDispatch } from '../../redux/hook';
import { takePicture, setFlash } from '../../redux/slices/camera/cameraSlice';
// import flash from "../../../assets/images/flash.svg"
import { RatiosList } from './RatiosList';
import { SvgUri } from "react-native-svg";
import styles from "../../styles/camera/CameraButtons.style"
interface CameraButtonsProps {
    flashActived: number,
    camera: Camera,
    style?: StyleProp<any>
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
    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.flashButton} onPress={() => handleFlash()}>
                <SvgUri fill={"white"} uri={imagePath} style={styles.flashSvg} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.takePicturebutton} onPress={() => cameraTakePicture(camera)} />
            <View style={styles.ratioListContainer} >
                {displayRatios ? <RatiosList camera={camera} /> : null}
                <TouchableOpacity onPress={() => handleDisplayRatios()} style={styles.ratiosListButton} >
                    <Text>Picture size</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};