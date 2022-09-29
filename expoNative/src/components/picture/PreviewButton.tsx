import React from "react"
import { Alert, Text, TouchableOpacity, View } from "react-native";
import styles from "../../styles/componentAdditional/TouchablePicture.style";
import { deleteNewPicture, getPictureList } from "../../redux/slices/picture/pictureSlice";
import { deleteCameraPicture } from "../../redux/slices/camera/cameraSlice";
import { useAppDispatch, useAppSelector } from "../../redux/hook"
interface PreviewButtonProps {
    uploadFunction: Function,
    deleteFunction?: Function,
    imagePath: string,

};

export const PreviewButton = ({ uploadFunction, deleteFunction, imagePath }: PreviewButtonProps) => {
    const url = "/userProfil/uploadPicture";
    const dispatch = useAppDispatch();
    const removePicture = (imagePath: string) => {
        dispatch(deleteNewPicture(imagePath))
        dispatch(deleteCameraPicture(imagePath))
    };
    const uploadPicture = async (url: string, imagePath: string) => {
        try {
            await uploadFunction(url, imagePath, "UserImage");
            await dispatch(getPictureList())
            removePicture(imagePath);
        } catch (error: any) {
            Alert.alert(error)
        }
    }
    return (
        <View style={styles.previewButtonContainer}>
            <TouchableOpacity
                style={styles.previewButton}
                onPress={() => uploadPicture(url, imagePath)}
            >
                <Text style={styles.previewButtonText}  >
                    Upload single
                </Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={[styles.previewButton, styles.spliter]}
                onPress={() => removePicture(imagePath)}
            >
                <Text style={styles.previewButtonText}>
                    Delete
                </Text>
            </TouchableOpacity>
        </View>
    )
}