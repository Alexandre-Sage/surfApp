import React from "react"
import { ImageBackground, View } from "react-native"
import { Gesture, GestureDetector } from "react-native-gesture-handler"
import { PreviewButton } from "./PreviewButton"
import styles from "../../styles/componentAdditional/TouchablePicture.style";
import { sendFileFetch, sendPicture } from "../../modules/fetch/basicFetch";

interface PictureComponentProps {
    style: object,
    imagePath: string,
    navigation: any,
    isPreview?: boolean,
    previewFunction: Function
}

export const TouchablePicture = ({ navigation, imagePath, style, isPreview, previewFunction }: PictureComponentProps): JSX.Element => {
    const doubleTapImageGesture = (imagePath: string) => Gesture.Tap().numberOfTaps(2).onStart(() => {
        navigation.navigate("FullScreen", { imagePath: imagePath });
    });

    /*const uploadPictureFunction = async (url: string, pictureUri: string, pictureName: string, callBack?: Function): Promise<Response> => {
        const formData: FormData = new FormData();
        const splitedImageUri: Array<string> = pictureUri.split(".");
        const imageType: string = splitedImageUri[splitedImageUri.length - 1];
        formData.append("image", {
            uri: pictureUri,
            type: `image/${imageType}`,
            name: pictureName
        });
        return await sendFileFetch(url, formData, callBack);
    };*/
    //sendPicture(url, displayedPicture, "userImage")}

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

