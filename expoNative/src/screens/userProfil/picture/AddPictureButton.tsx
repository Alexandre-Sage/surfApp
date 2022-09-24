import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { SvgUri } from "react-native-svg";
import styles from "../../../styles/userProfil/Picture.style";

interface AddPictureButtonProps {
    displayCameraFunction: Function
}

export const AddPictureButton = ({ displayCameraFunction }: AddPictureButtonProps): JSX.Element => (
    <View style={styles.patch}>
        <View style={styles.addPictureButtonContainer}>
            <TouchableOpacity style={styles.addPictureButton}>
                <Text style={styles.buttonText}>
                    Files
                </Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.addPictureButton, styles.split]} onPress={() => displayCameraFunction()} >
                <Text style={styles.buttonText}>
                    Camera
                </Text>
            </TouchableOpacity>
        </View>
        <SvgUri width={50} height={25} fill={"white"} uri={`${process.env.API_LAN}/images/assets/arrow.svg`} style={styles.svg} />
    </View>
)
