import { View } from "react-native";
import React, { useState, useEffect } from "react";
import { getFetchFunction, postFetchFunction, getFetchSetState } from "../../modules/fetch/basicFetch";
import { API_URL } from "@env";

export default function Picture() {
    const [userData, setData] = useState();
    useEffect(function () {
        getFetchSetState(`${API_URL}/userProfil/picture`, setData)
            .catch(err => alert(err))
    }, []);
    //console.log("here", userData)
    return (
        <View>

        </View>
    );
};