import React, { ReactNode, useState } from "react";
import { useAppSelector, useAppDispatch } from '../../redux/hook';
import { Alert, Animated, Image, ImageBackground, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { GestureDetector, Gesture, Directions, PanGesture } from "react-native-gesture-handler";
import { manipulateAsync } from "expo-image-manipulator";
import { sendPicture } from "../../modules/fetch/basicFetch";
import { removePicture } from "../../redux/slices/camera/cameraSlice"
import { UriProps } from "react-native-svg";
//17.0.2



export default function Preview(): JSX.Element {
    const dispatch = useAppDispatch();
    const { newPicture } = useAppSelector((state) => state.camera);
    const [displayedPicture, setPicture] = useState<string>(newPicture[0].uri);
    const url = "/userProfil/uploadPicture";
    const panGestureLeft = Gesture.Fling()
        .direction(Directions.LEFT)
        .onStart((event) => {
            const newIndex = newPicture.findIndex(picture => picture.uri === displayedPicture) + 1
            if (newIndex < newPicture.length) setPicture(newPicture[newIndex].uri);
            else if (newIndex === newPicture.length) setPicture(newPicture[0].uri);
        })

    const panGestureRight = Gesture.Fling()
        .direction(Directions.RIGHT)
        .onStart((event) => {
            const newIndex = newPicture.findIndex(picture => picture.uri === displayedPicture) - 1
            if (newIndex > 0) setPicture(newPicture[newIndex].uri);
            else if (newIndex <= 0) setPicture(newPicture[newPicture.length - 1].uri);
        })
    return (

        <GestureDetector gesture={panGestureLeft} >
            <GestureDetector gesture={panGestureRight}>
                <Animated.View style={styles.container}>
                    <ImageBackground source={{ uri: displayedPicture }} style={styles.container}>
                        <View style={styles.toolBar}>
                            <TouchableOpacity
                                style={styles.toolBar}
                                onPress={() => sendPicture(url, displayedPicture, "userImage")}
                            >
                                <Text style={styles.text}>SAVE</Text>
                            </TouchableOpacity>
                        </View>
                    </ImageBackground>
                </Animated.View>
            </GestureDetector>
        </GestureDetector >

    );
};

const styles = StyleSheet.create({
    container: {
        width: "100%",
        height: "100%"
    },
    text: {
        width: "50%",
        fontSize: 2,
        height: "100%",
        color: "purple"
    },
    toolBar: {
        width: "100%",
        height: "15%",
        borderWidth: 1,
        borderColor: "white",
        position: "absolute",
    }
})