import React, { useEffect } from 'react';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { StyleSheet, View, Alert, ScrollView } from 'react-native';
import { RootStackParamList } from '../../../App';
import { PictureSideScroller } from './PictureSideScroller';
import { Button } from '../buttons/Button';
import { sendFileFetch } from '../../api/fetchApi/fetchApi';
import styles from "../../styles/componentAdditional/Preview.style";
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNewPicture, uploadPictureToServer } from '../../api/pictureHook/pictrueApi';
import { ErrorModal, useError } from '../modals/ErrorModal';
import { ImageInfo } from 'expo-image-picker';
export type PreviewProps = NativeStackScreenProps<RootStackParamList, "Preview">

export default function Preview({ navigation, route }: PreviewProps): JSX.Element {
  const [newPictures, updateNewPicture, removeNewPicture] = useNewPicture(route.params.images as ImageInfo[]);
  const { errorMessage, setErrorMessage, setToggleErrorModal, toggleErrorModal } = useError()
  const url = `${process.env.DEVELOPMENT_SERVER}/image/userImageUpload`
  //TO MOVE
  const uploadPictureFunction = async (pictureUri: ImageInfo["uri"]) => {
    try {
      await uploadPictureToServer(url, pictureUri, "userPicture");
      removeNewPicture(pictureUri);
    } catch (error) {
      setErrorMessage("Something went wrong uploading picture please try again");
      setToggleErrorModal();
      return;
    }
  }

  const uploadAll = async (picturesArray: Array<any>) => {
    picturesArray.forEach(async (picture, index) => {
      await uploadPictureFunction(picture.uri);
      updateNewPicture([] as any)
    });
  };
  console.log(newPictures)
  return (
    <SafeAreaView>
      <ScrollView style={styles.container} >
        <View style={styles.container}>
          <PictureSideScroller
            pictures={[...newPictures]}
            styles={styles}
            isPreview={true}
            pictureFunction={uploadPictureFunction}
          />
          <View style={styles.buttonContainer}>
            <Button aditionalStyles={styles.button} text={"Upload all"} onPressFunction={() => uploadAll(newPictures)} />
            <Button aditionalStyles={styles.button} text={"Add picture"} onPressFunction={() => console.log("ok")} />
          </View>
        </View>
      </ScrollView>
      <ErrorModal
        message={errorMessage}
        displayModal={toggleErrorModal}
        close={setToggleErrorModal}
      />
    </SafeAreaView>
  );
};

