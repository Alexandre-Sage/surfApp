import React, { useState, useEffect } from "react";
import { View, LayoutAnimation, Text } from "react-native";
import { getFetchSetState } from "../../modules/fetch/basicFetch";
import { API_URL } from "@env";
import styles from "../../styles/userProfil/ProfilHeader.style";

export default function ProfilHeader() {
    const [userData, setData] = useState({ userInfo: "fuck" });
    useEffect(async function () {
        return await getFetchSetState(`${API_URL}/userProfil/header`, setData)
            .catch((error) => alert(error));
    }, []);
    console.log("header", userData)
    const { userInfo } = userData;
    const headerJsx = (
        <React.Fragment>
            <View>
                <Text>{userInfo.userName}</Text>
            </View>
            <View>
                <Text>Name: {userInfo.name}</Text>
                <Text>Location: {userInfo.location}</Text>
            </View>
            <View>
                <Text>First name: {userInfo.firstName}</Text>
                <Text>Inscription: {userInfo.creationDate}</Text>
            </View>
        </React.Fragment>
    );
    return (
        <View>
            {headerJsx}
        </View>
    );
};