import { View } from "react-native";
import React, { useState, useEffect } from "react";
import styles from "../../../styles/userProfil/Picture.style";
import { SafeAreaView } from "react-native-safe-area-context";
import { AddPictureButton } from "./AddPictureButton";
import { PictureSideScroller } from "../../../components/picture/PictureSideScroller";
import { useProfilPicture } from "../../../api/userApi/userApi";
import { uploadFromLocalFiles } from "../../../api/pictureHook/pictrueApi";
import { Camera } from "expo-camera";
import { useNewPicture } from "../../../api/pictureHook/pictrueApi";
import { Button } from "@sage/surf-app-ui-lib";
declare interface PictureProps {
  navigation: any
}
export default function Picture({ navigation }: PictureProps) {
  const [addPicturePressed, setAddPicturePressed] = useState<boolean>(false);
  const [pictureInfo, updatePictureInfo] = useProfilPicture();
  const [newPictures, updateNewPictures] = useNewPicture([])
  useEffect(() => {
    updatePictureInfo();
  }, []);
  const displayPopUp = () => setAddPicturePressed(addPicturePressed ? false : true);
  const displayCameraFunction = () => {
    navigation.navigate("Camera")
  };
  const uploadFromFilesFunction = async () => {
    try {
      const picture = await uploadFromLocalFiles(updateNewPictures)
      navigation.navigate("Preview", {
        images: [
          ...newPictures,
          picture
        ]
      });
    } catch (error) {
      console.log(error)
    }
  };
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <PictureSideScroller styles={styles} pictures={pictureInfo} />
        <View style={styles.subContainer}>
          {addPicturePressed ? <AddPictureButton
            displayCameraFunction={displayCameraFunction}
            uploadFromFilesFunction={uploadFromFilesFunction}
          /> : null}
          <View style={styles.buttonsContainer}>
            <Button text={"Gallery"} aditionalStyles={styles.button} onPressFunction={() => /*navigation.navigate("Gallery")*/console.log("gallery")} />
            <Button text={"Add picture"} aditionalStyles={styles.button} onPressFunction={() => displayPopUp()} />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};