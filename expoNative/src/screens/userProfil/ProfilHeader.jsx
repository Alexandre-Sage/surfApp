import React, { useState, useEffect } from "react";
import { View, LayoutAnimation, Text } from "react-native";
import { getFetchFunction, postFetchFunction } from "../../modules/fetch/basicFetch";
import { API_URL } from "@env";

export default function ProfilHeader() {
    const [userData, setData] = useState();
    useEffect(async function () {
        getFetchFunction(`${API_URL}/userProfil/header`)
            .then((userData) => setData(userData))
            .catch((error) => alert(error));
    }, []);
    return (
        <View>

        </View>
    );
};