import { View } from "react-native";
import React, { useState, useEffect } from "react";
import styles from "../../../styles/userProfil/Picture.style";
import Button from "../../../components/buttons/Button";
import { SafeAreaView } from "react-native-safe-area-context";
import { AddPictureButton } from "./AddPictureButton";
import { PictureSideScroller } from "../../../components/picture/PictureSideScroller";
import { useProfilPicture } from "../../../api/userApi/userApi";
declare interface PictureProps {
  navigation: any
}

export default function Picture({ navigation }: PictureProps) {
  const [addPicturePressed, setAddPicturePressed] = useState<boolean>(false);
  const [pictureInfo, updatePictureInfo] = useProfilPicture();
  useEffect(() => {
    updatePictureInfo();
  }, []);
  const displayPopUp = () => setAddPicturePressed(addPicturePressed ? false : true);
  const displayCameraFunction = () => {
    navigation.navigate("Camera")
  };
  const uploadFromFilesFunction = async () => {
    let sucess = false;
    do {
      try {
        //await dispatch(uploadImageFromLocalFiles());
        sucess = true
      } catch (error) {
        console.log(error)
      }
    } while (!sucess) navigation.navigate("Preview");
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
            <Button text={"Gallery"} aditionalStyles={styles.button} onPressFunction={() => navigation.navigate("Gallery")} />
            <Button text={"Add picture"} aditionalStyles={styles.button} onPressFunction={() => displayPopUp()} />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};