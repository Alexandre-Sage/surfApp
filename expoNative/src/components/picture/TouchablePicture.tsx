import React from "react"
import { ImageBackground, View } from "react-native"
import { Gesture, GestureDetector } from "react-native-gesture-handler"
import { PreviewButton } from "./PreviewButton"
import styles from "../../styles/componentAdditional/TouchablePicture.style";
import { useNavigation } from "@react-navigation/native";
import { NativeStackScreenProps, NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../../App";
import { ImageInfo } from "expo-image-picker";

interface PictureComponentProps {
  style: object,
  imagePath: string,
  //navigation: any,
  isPreview?: boolean,
  previewFunction?: (param: ImageInfo["uri"]) => void
}

export const TouchablePicture = ({ imagePath, style, isPreview, previewFunction }: PictureComponentProps): JSX.Element => {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>()
  const doubleTapImageGesture = (imagePath: string) => Gesture.Tap().numberOfTaps(2).onStart(() => {
    navigation.navigate("FullScreen", { imagePath: imagePath });
  });

  return (
    <GestureDetector gesture={doubleTapImageGesture(imagePath)} >
      <View style={style}>
        <ImageBackground style={styles.imageBackground} source={{ uri: imagePath }}  >
          {isPreview ? <PreviewButton imagePath={imagePath} uploadFunction={previewFunction} /> : null}
        </ImageBackground>
      </View>
    </GestureDetector >
  );
};

