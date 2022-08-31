import { View, Image } from "react-native";
import React, { useState, useEffect } from "react";
import { getFetchFunction, postFetchFunction, getFetchSetState } from "../../modules/fetch/basicFetch";
import styles from "../../styles/userProfil/Picture.style";
import Button from "../../components/buttons/Button";
export default function Picture() {
    const [pictureData, setData] = useState({ pictures: [] });
    useEffect(function () {
        getFetchSetState(`${process.env.API_LAN}/userProfil/picture`, setData)
            .catch(err => console.log(err))
    }, []);
    const { pictures } = pictureData;
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