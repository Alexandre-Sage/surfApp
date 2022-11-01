import React, { useState } from 'react';
import { Camera, CameraType } from "expo-camera";
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../../App';
import { CameraButtons } from './CameraButtons';
import { useAppSelector, useAppDispatch } from '../../redux/hook';
import { takePicture } from '../../api/cameraApi/cameraApi';
import { useNewPicture } from '../../api/pictureHook/pictrueApi';
//import styles from '../../../styles/LandingPage/LandingPage.style';

export type CameraProps = NativeStackScreenProps<RootStackParamList, "Camera">

export default function UserCamera({ navigation }: CameraProps): JSX.Element {
  //LOCAL STATES
  const [camera, setCamera] = useState<Camera>({} as Camera);
  const [newPictures, updateNewPicture] = useNewPicture();
  const [flash, setFlash] = useState<number>(0)
  const [ratio, setRatio] = useState<string>();
  const [type, setType] = useState(CameraType.back);
  const [autoFocus, setAutoFocus] = useState();
  const [focusDepth, setFocusDepth] = useState();
  //A CHANGER DE PLACE?
  const [permission, setPermission] = Camera.useCameraPermissions();
  const previewPath = newPictures[0] ? newPictures[newPictures.length - 1].uri : "/"
  if (!permission?.granted) setPermission()
  console.log(newPictures)
  return (
    <View>
      <Camera
        /*useCamera2Api={true} autoFocus={true}*/ ref={async (ref) => { setCamera(ref!) }}
        type={type} focusDepth={0} flashMode={flash} ratio={ratio}
        style={styles.container}
      >
        <TouchableOpacity
          style={styles.preview}
          onPress={() => navigation.navigate("Preview", { images: newPictures })}
        >
          <Image source={{ uri: previewPath }} style={styles.preview} />
        </TouchableOpacity>
        <CameraButtons
          flashStatus={flash}
          camera={camera}
          flashActived={(newFlash) => setFlash(newFlash)}
          setRatio={setRatio}
          cameraAction={updateNewPicture}
        />
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