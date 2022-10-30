import React, { useEffect } from 'react';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { StyleSheet, View, Alert, ScrollView } from 'react-native';
import { RootStackParamList } from '../../../App';
import { PictureSideScroller } from './PictureSideScroller';
import Button from '../buttons/Button';
import { sendFileFetch } from '../../api/fetchApi/fetchApi';
import styles from "../../styles/componentAdditional/Preview.style";
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNewPicture } from '../../api/cameraApi/cameraApi';

export type PreviewProps = NativeStackScreenProps<RootStackParamList, "Preview">

export default function Preview({ navigation, route }: PreviewProps): JSX.Element {
  const [newPictures, updateNewPicture] = useNewPicture(route.params.images);
  const url = `${process.env.DEVELOPMENT_SERVER}/image/userImageUpload`
  //TO MOVE
  const uploadPictureFunction = async (url: string, pictureUri: string, pictureName: string, callBack?: Function): Promise<Response> => {
    const formData: FormData = new FormData();
    const splitedImageUri: Array<string> = pictureUri.split(".");
    const imageType: string = splitedImageUri[splitedImageUri.length - 1];
    formData.append("image", {
      uri: pictureUri,
      type: `image/${imageType}`,
      name: pictureName
    });
    try {
      return await sendFileFetch(url, formData, callBack);
    } catch (error) {
      console.log(error)
      throw error
    }
  };
  const uploadAll = async (picturesArray: Array<any>) => {
    picturesArray.forEach(async (picture, index) => {
      await uploadPictureFunction(url, picture.uri, "userPicture");
      //dispatch(deleteNewPicture(picture.uri))
      //dispatch(deleteCameraPicture(picture.uri))
    });
  };////////

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
            <Button aditionalStyles={styles.button} text={"Upload all"} onPressFunction={() => uploadAll([])} />
            <Button aditionalStyles={styles.button} text={"Add picture"} onPressFunction={() => console.log("ok")} />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

