import { View, Image, Text } from "react-native";
import React, { useState, useEffect } from "react";
import { getFetchFunction, postFetchFunction, getFetchSetState } from "../../../modules/fetch/basicFetch";
import styles from "../../../styles/userProfil/Picture.style";
import Button from "../../../components/buttons/Button";
import { UserCamera } from "./Camera";
import { useAppSelector, useAppDispatch } from '../../../redux/hook';
import { getPictureList } from "../../../redux/slices/picture/pictureSlice";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Camera } from "expo-camera";


export default function Picture() {
    const dispatch = useAppDispatch();
    const { pictures } = useAppSelector((state) => state.picture);
    const [addPicturePressed, setAddPicturePressed] = useState<boolean>(false);
    const [displayCamera, setDisplayCamera] = useState<boolean>(false);
    useEffect(function () {
        dispatch(getPictureList())
    }, []);
    console.log(pictures)
    const pictureJsx = pictures.map((picture, key) => (
        <React.Fragment key={key}>
            <Image style={styles.picture} source={{ uri: `${process.env.API_LAN}/${picture.path}` }} />
        </React.Fragment>
    ));
    const displayPopUp = () => setAddPicturePressed(addPicturePressed ? false : true);
    const displayCameraFunction = () => {
        console.log("fucokkf")
        setDisplayCamera((current) => current ? false : true)
    }
    const addPicturePopUp = (
        <View>
            <TouchableOpacity>
                <Text>
                    Local Files
                </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => displayCameraFunction()} >
                <Text>
                    Camera
                </Text>
            </TouchableOpacity>
        </View>
    )
    return (
        <View>
            <View>
                {pictureJsx}
            </View>
            <View style={styles.buttonsContainer}>
                <Button text={"Gallery"} aditionalStyles={styles.button} onPressFunction={(event: any) => console.log(event)} />
                <Button text={"Add picture"} aditionalStyles={styles.button} onPressFunction={() => displayPopUp()} />
                {addPicturePressed ? addPicturePopUp : null}
                {displayCamera ? <UserCamera /> : null}
            </View>
        </View>
    );
};