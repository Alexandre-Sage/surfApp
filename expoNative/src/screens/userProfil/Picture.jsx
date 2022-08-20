import { View, Image } from "react-native";
import React, { useState, useEffect } from "react";
import { getFetchFunction, postFetchFunction, getFetchSetState } from "../../modules/fetch/basicFetch";
import { API_URL } from "@env";
import styles from "../../styles/userProfil/Picture.style";
import Button from "../../components/buttons/Button";
export default function Picture() {
    const [pictureData, setData] = useState({ pictures: [] });
    useEffect(function () {
        getFetchSetState(`${API_URL}/userProfil/picture`, setData)
            .catch(err => alert(err))
    }, []);
    const { pictures } = pictureData;
    const pictureJsx = pictures.map((picture, key) => (
        <React.Fragment key={key}>
            <Image style={styles.picture} source={`${API_URL}/${picture.path}`} />
        </React.Fragment>
    ));
    return (
        <View>
            <View>
                {pictureJsx}
            </View>
            <View>
                <Button text={"Gallery"} aditionalStyles={styles.buttons} />
                <Button text={"Upload"} />
            </View>
        </View>
    );
};