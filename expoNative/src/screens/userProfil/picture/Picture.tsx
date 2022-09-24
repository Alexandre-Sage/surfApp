import { View, ScrollView, Alert } from "react-native";
import React, { useState, useEffect } from "react";
import styles from "../../../styles/userProfil/Picture.style";
import Button from "../../../components/buttons/Button";
import { useAppSelector, useAppDispatch } from '../../../redux/hook';
import { getPictureList } from "../../../redux/slices/picture/pictureSlice";
import { SafeAreaView } from "react-native-safe-area-context";
import { AddPictureButton } from "./AddPictureButton";
import { PictureComponent } from "./PictureComp";

declare interface PictureProps {
    navigation: any
}

export default function Picture({ navigation }: PictureProps) {
    const dispatch = useAppDispatch();
    const { pictures } = useAppSelector((state) => state.picture);
    const [addPicturePressed, setAddPicturePressed] = useState<boolean>(false);
    useEffect(function () {
        dispatch(getPictureList())
    }, []);
    const displayPopUp = () => setAddPicturePressed(addPicturePressed ? false : true);
    const displayCameraFunction = () => {
        navigation.navigate("Camera")
    };
    const pictureJsx = pictures.map((picture, key) => (
        <PictureComponent imagePath={`${process.env.API_LAN}/${picture.path}`} navigation={navigation} style={styles.picture} />
    ));

    return (
        <SafeAreaView>
            <View style={styles.container}>
                <View style={styles.scrollContainer}>
                    <ScrollView nestedScrollEnabled={true} horizontal={true} >
                        {pictureJsx}
                    </ScrollView>
                </View>
                <View style={styles.subContainer}>
                    {addPicturePressed ? <AddPictureButton displayCameraFunction={displayCameraFunction} /> : null}
                    <View style={styles.buttonsContainer}>
                        <Button text={"Gallery"} aditionalStyles={styles.button} onPressFunction={(event: any) => console.log(event)} />
                        <Button text={"Add picture"} aditionalStyles={styles.button} onPressFunction={() => displayPopUp()} />
                    </View>
                </View>
            </View>
        </SafeAreaView>
    );
};