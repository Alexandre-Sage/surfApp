import React, { useState, useEffect } from "react";
import { View, LayoutAnimation, Text } from "react-native";
import { getFetchFunction, postFetchFunction } from "../../modules/fetch/basicFetch";
import { API_URL } from "@env";
import ProfilHeader from "./ProfilHeader";
import Picture from "./Picture";
export default function UserProfil() {
    //const userHeaderObj = { firstName: answers.firstName, }
    return (
        <View>
            <ProfilHeader />
            <Picture />
        </View>
    );
};