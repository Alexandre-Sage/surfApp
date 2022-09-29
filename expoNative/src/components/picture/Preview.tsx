import React, { useEffect } from 'react';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { StyleSheet, View, Alert, ScrollView } from 'react-native';
import { RootStackParamList } from '../../../App';
import { useAppDispatch, useAppSelector } from '../../redux/hook';
import { uploadImageFromLocalFiles, getPictureList, deleteNewPicture } from '../../redux/slices/picture/pictureSlice';
import { PictureSideScroller } from './PictureSideScroller';
import Button from '../buttons/Button';
import { sendFileFetch } from '../../modules/fetch/basicFetch';
import { deleteCameraPicture } from '../../redux/slices/camera/cameraSlice';
import styles from "../../styles/componentAdditional/Preview.style";
import { SafeAreaView } from 'react-native-safe-area-context';
export type PreviewProps = NativeStackScreenProps<RootStackParamList, "Preview">


export default function Preview({ navigation }: PreviewProps): JSX.Element {
    const { newPicture } = useAppSelector((state) => state.picture);
    const { cameraPicture } = useAppSelector((state) => state.camera)

    const dispatch = useAppDispatch();

    const addNewPicture = () => {
        dispatch(uploadImageFromLocalFiles());
    };
    const url = "/userProfil/uploadPicture";
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
            throw error
        }
    };
    const uploadAll = () => {
        const allPictures = [...newPicture, ...cameraPicture];
        allPictures.forEach(async (picture, index) => {
            await uploadPictureFunction(url, picture.uri, "userPicture");
            dispatch(deleteNewPicture(picture.uri))
            dispatch(deleteCameraPicture(picture.uri))
        });
        dispatch(getPictureList());
    };

    return (
        <SafeAreaView>
            <ScrollView style={styles.container} >
                <View style={styles.container}>
                    <PictureSideScroller
                        pictures={[...newPicture, ...cameraPicture]}
                        styles={styles}
                        isPreview={true}
                        pictureFunction={uploadPictureFunction}
                    />
                    <View style={styles.buttonContainer}>
                        <Button aditionalStyles={styles.button} text={"Upload all"} onPressFunction={() => uploadAll()} />
                        <Button aditionalStyles={styles.button} text={"Add picture"} onPressFunction={() => console.log("ok")} />
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

