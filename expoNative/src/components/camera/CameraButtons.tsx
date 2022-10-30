import { Camera } from "expo-camera";
import React, { useState } from "react";
import { Image, StyleProp, Text, TouchableOpacity, View } from 'react-native';
import { useAppSelector, useAppDispatch } from '../../redux/hook';
//import { takePicture, setFlash } from '../../redux/slices/camera/cameraSlice';
import { takePicture } from "../../api/cameraApi/cameraApi";
import { RatiosList } from './RatiosList';
import { SvgUri } from "react-native-svg";
import styles from "../../styles/camera/CameraButtons.style"
//import { setFlash } from "../../redux/slices/camera/cameraSlice";
export interface CameraButtonsProps {
  flashActived: (number: number) => void,
  flashStatus: number,
  camera: Camera,
  style?: StyleProp<any>,
  setRatio: (string: string) => void
  cameraAction: Function
};

//SET FLASH ET TAKE PICTURE NON TESTER

export const CameraButtons = ({ flashActived, camera, flashStatus, setRatio, cameraAction }: CameraButtonsProps): JSX.Element => {
  const [displayRatios, setDisplayRatios] = useState<Boolean>(false);
  const handleDisplayRatios = () => displayRatios ? setDisplayRatios(false) : setDisplayRatios(true);
  const imagePath = `${process.env.API_LAN}/images/assets/flash.svg`
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.flashButton}
        onPress={() => flashActived(flashStatus === 0 ? 1 : 0)}
      >
        <SvgUri
          fill={"white"}
          uri={imagePath}
          style={styles.flashSvg}
        />
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.takePicturebutton}
        onPress={() => takePicture(camera, cameraAction)}
      />
      <View style={styles.ratioListContainer} >
        {displayRatios ? <RatiosList setRatio={setRatio} camera={camera} /> : null}
        <TouchableOpacity
          onPress={() => handleDisplayRatios()}
          style={styles.ratiosListButton}
        >
          <Text>Picture size</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};