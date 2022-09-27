import React, { useEffect } from 'react';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { Text, StyleSheet, View, Alert, ScrollView } from 'react-native';
import { RootStackParamList } from '../../../App';
import { useAppDispatch, useAppSelector } from '../../redux/hook';
import { uploadImageFromLocalFiles, getPictureList } from '../../redux/slices/picture/pictureSlice';
import { PictureSideScroller } from './PictureSideScroller';
import Button from '../buttons/Button';
import { sendFileFetch } from '../../modules/fetch/basicFetch';
import { PayloadAction } from '@reduxjs/toolkit';

export type PreviewProps = NativeStackScreenProps<RootStackParamList, "Preview">
export default function Preview({ navigation }: PreviewProps): JSX.Element {
    useEffect(() => {

    }, []);

    const { newPicture } = useAppSelector((state) => state.picture);
    const { cameraPicture } = useAppSelector((state) => state.camera)

    const dispatch = useAppDispatch();

    const addNewPicture = () => {
        dispatch(uploadImageFromLocalFiles());
    };
    const url = "/userProfil/uploadPicture";
    const uploadPictureFunction = async (url: string, pictureUri: string, pictureName: string, callBack?: Function): Promise<Response> => {
        //console.log(pictureUri)
        const formData: FormData = new FormData();
        const splitedImageUri: Array<string> = pictureUri.split(".");
        const imageType: string = splitedImageUri[splitedImageUri.length - 1];
        formData.append("image", {
            uri: pictureUri,
            type: `image/${imageType}`,
            name: pictureName
        });
        return await sendFileFetch(url, formData, callBack);
    };
    const uploadAll = () => {
        const allPictures = [...newPicture, ...cameraPicture];
        allPictures.forEach(async (picture, index) => {
            await uploadPictureFunction(url, picture.uri, "userPicture");
        });
        dispatch(getPictureList());
    };

    return (
        <ScrollView style={styles.container}>
            <PictureSideScroller
                pictures={[...newPicture, ...cameraPicture]}
                navigation={navigation}
                styles={styles}
                isPreview={true}
                pictureFunction={uploadPictureFunction}
            />
            <View>
                <Button text={"Upload all"} onPressFunction={() => uploadAll()} />
                <Button text={"Add picture"} onPressFunction={() => console.log("ok")} />
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    text: {
        fontSize: 20,
        color: "white"
    },
    container: {
        backgroundColor: "black",
        width: "100%",
        height: "100%"
    },
    scrollContainer: {
        width: "100%",
        height: 600,
        justifyContent: "space-around",
        alignItems: "center",
        flexDirection: "row",
        //borderWidth: 1,
        //borderColor: "white"
    },
    picture: {
        width: 350,
        height: 500,
        marginLeft: 10,
        marginRight: 10,
        borderRadius: 5,
        border: "rgba(255, 255, 255, 0.3)",
        borderWidth: 1,
    }
});