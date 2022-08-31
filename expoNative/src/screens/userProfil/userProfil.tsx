import React, { useState, useEffect } from "react";
import { View, LayoutAnimation, Text } from "react-native";
import { getFetchFunction, postFetchFunction } from "../../modules/fetch/basicFetch";
import ProfilHeader from "./ProfilHeader";
import Picture from "./Picture";
import styles from "../../styles/userProfil/UserProfil.style"
import { RootStackParamList } from "../../../App"
import { NativeStackScreenProps } from '@react-navigation/native-stack';

export type UserProfilProps = NativeStackScreenProps<RootStackParamList, "UserProfil">

export default function UserProfil({ route, navigation }: UserProfilProps): JSX.Element {
    return (
        <View style={styles.userProfilContainer}>
            <ProfilHeader />
            <Picture />
        </View>
    );
};