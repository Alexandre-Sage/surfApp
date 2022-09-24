import React from "react"
import { Image } from "react-native"
import { Gesture, GestureDetector, TouchableOpacity } from "react-native-gesture-handler"

interface PictureComponentProps {
    style: object,
    imagePath: string,
    navigation: any
}

export const PictureComponent = ({ navigation, imagePath, style }: PictureComponentProps) => {
    const doubleTapImageGesture = (imagePath: string) => Gesture.Tap().numberOfTaps(2).onStart(() => {
        navigation.navigate("FullScreen", { imagePath: imagePath });
    })
    return (
        <GestureDetector gesture={doubleTapImageGesture(imagePath)}>
            <TouchableOpacity>
                <Image style={style} source={{ uri: imagePath }} />
            </TouchableOpacity>
        </GestureDetector>
    )
}