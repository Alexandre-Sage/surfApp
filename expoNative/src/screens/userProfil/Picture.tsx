import { View, Image } from "react-native";
import React, { useState, useEffect } from "react";
import { getFetchFunction, postFetchFunction, getFetchSetState } from "../../modules/fetch/basicFetch";
import styles from "../../styles/userProfil/Picture.style";
import Button from "../../components/buttons/Button";

import { useAppSelector, useAppDispatch } from '../../redux/hook';
import { getPictureList } from "../../redux/slices/picture/pictureSlice";


export default function Picture() {
    const dispatch = useAppDispatch();
    const { pictures } = useAppSelector((state) => state.picture);

    useEffect(function () {
        dispatch(getPictureList())
    }, []);
    console.log(pictures)
    const pictureJsx = pictures.map((picture, key) => (

        <React.Fragment key={key}>
            <Image style={styles.picture} source={{ uri: `${process.env.API_LAN}/${picture.path}` }} />
        </React.Fragment>
    ));
    return (
        <View>
            <View>
                {pictureJsx}
            </View>
            <View style={styles.buttonsContainer}>
                {/*<Button text={"Gallery"} aditionalStyles={styles.button} />
                <Button text={"Upload"} aditionalStyles={styles.button} />*/}
            </View>
        </View>
    );
};