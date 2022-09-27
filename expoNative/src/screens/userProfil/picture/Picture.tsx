import { View, ScrollView, Alert } from "react-native";
import React, { useState, useEffect } from "react";
import styles from "../../../styles/userProfil/Picture.style";
import Button from "../../../components/buttons/Button";
import { useAppSelector, useAppDispatch } from '../../../redux/hook';
import { getPictureList, uploadImageFromLocalFiles } from "../../../redux/slices/picture/pictureSlice";
import { SafeAreaView } from "react-native-safe-area-context";
import { AddPictureButton } from "./AddPictureButton";
import { PictureSideScroller } from "../../../components/picture/PictureSideScroller";

declare interface PictureProps {
    navigation: any
}

export default function Picture({ navigation }: PictureProps) {
    const [addPicturePressed, setAddPicturePressed] = useState<boolean>(false);
    const { pictures } = useAppSelector((state) => state.picture);
    const dispatch = useAppDispatch();
    useEffect(() => {
        dispatch(getPictureList())
    }, []);
    const displayPopUp = () => setAddPicturePressed(addPicturePressed ? false : true);
    const displayCameraFunction = () => {
        navigation.navigate("Camera")
    };
    const uploadFromFilesFunction = async () => {
        let sucess = false;
        do {
            try {
                await dispatch(uploadImageFromLocalFiles());
                sucess = true
            } catch (error) {
                console.log(error)
            }
        } while (!sucess) navigation.navigate("Preview");
    };

    return (
        <SafeAreaView>
            <View style={styles.container}>
                <PictureSideScroller styles={styles} pictures={pictures} navigation={navigation} />
                <View style={styles.subContainer}>
                    {addPicturePressed ? <AddPictureButton
                        displayCameraFunction={displayCameraFunction}
                        uploadFromFilesFunction={uploadFromFilesFunction}
                    /> : null}
                    <View style={styles.buttonsContainer}>
                        <Button text={"Gallery"} aditionalStyles={styles.button} onPressFunction={(event: any) => console.log(event)} />
                        <Button text={"Add picture"} aditionalStyles={styles.button} onPressFunction={() => displayPopUp()} />
                    </View>
                </View>
            </View>
        </SafeAreaView>
    );
};