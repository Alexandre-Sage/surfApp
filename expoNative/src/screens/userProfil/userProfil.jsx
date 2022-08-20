import React, { useState, useEffect } from "react";
import { View, LayoutAnimation, Text } from "react-native";
import { getFetchFunction, postFetchFunction } from "../../modules/fetch/basicFetch";
import { API_URL } from "@env";
import ProfilHeader from "./ProfilHeader";
import Picture from "./Picture";
import styles from "../../styles/userProfil/UserProfil.style"
export default function UserProfil() {
    return (
        <View style={styles.userProfilContainer}>
            <ProfilHeader />
            <Picture />
        </View>
    );
};