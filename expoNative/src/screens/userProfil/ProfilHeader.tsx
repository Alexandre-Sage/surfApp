import React, { useState, useEffect } from "react";
import { View, LayoutAnimation, Text, ScrollView } from "react-native";
import { getFetchSetState } from "../../modules/fetch/basicFetch";
import API_LAN from "react-native-dotenv";
import styles from "../../styles/userProfil/ProfilHeader.style";

declare interface UserInfoInterface {
    userInfo: {
        userName: string,
        name: string,
        location: string,
        firstName: string,
        creationDate: string
    }
}

export default function ProfilHeader() {
    const [userData, setData] = useState<UserInfoInterface>({} as UserInfoInterface);
    useEffect(function () {
        getFetchSetState(`${process.env.API_LAN}/userProfil/header`, setData)
            .catch((error) => console.log(error));
    }, []);
    const userInfo = [{ ...userData.userInfo }]
    const headerJsx = userInfo.map(info => (
        <React.Fragment>
            <View>
                <Text>{info.userName!}</Text>
            </View>
            <View>
                <Text>Name: {info.name!}</Text>
                <Text>Location: {info.location!}</Text>
            </View>
            <View>
                <Text>First name: {info.firstName!}</Text>
                <Text>Inscription: {info.creationDate!}</Text>
            </View>
        </React.Fragment>
    ));
    return (
        <View>
            {headerJsx}
        </View>
    );
};