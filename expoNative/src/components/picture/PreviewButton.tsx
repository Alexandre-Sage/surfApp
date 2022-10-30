import React from "react"
import { Alert, Text, TouchableOpacity, View } from "react-native";
import styles from "../../styles/componentAdditional/TouchablePicture.style";
import { deleteNewPicture, getPictureList } from "../../redux/slices/picture/pictureSlice";
import { useAppDispatch, useAppSelector } from "../../redux/hook"
interface PreviewButtonProps {
  uploadFunction: Function,
  deleteFunction?: Function,
  imagePath: string,

};

export const PreviewButton = ({ uploadFunction, deleteFunction, imagePath }: PreviewButtonProps) => {
  const url = `${process.env.DEVELOPMENT_IMAGE_SERVER}/imageApi/userImageUpload`;
  const uploadPicture = async (imagePath: string) => {
    try {
      await uploadFunction(url, imagePath, "UserImage");
    } catch (error: any) {
      Alert.alert(error)
    }
  }
  return (
    <View style={styles.previewButtonContainer}>
      <TouchableOpacity
        style={styles.previewButton}
        onPress={() => uploadPicture(imagePath)}
      >
        <Text style={styles.previewButtonText}  >
          Upload single
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.previewButton, styles.spliter]}
        onPress={() => console.log("removeToAdd")}//removePicture(imagePath)}
      >
        <Text style={styles.previewButtonText}>
          Delete
        </Text>
      </TouchableOpacity>
    </View>
  )
}