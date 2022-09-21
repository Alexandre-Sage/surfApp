import React, { useState, useEffect } from "react";
import { View, ScrollView, LayoutAnimation, Text, SafeAreaView } from "react-native";
import { getFetchFunction, postFetchFunction } from "../../modules/fetch/basicFetch";
import ProfilHeader from "./ProfilHeader";
import Picture from "./picture/Picture";
import Spot from "./spot/Spot";
import { RootStackParamList } from "../../../App"
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import styles from "../../styles/userProfil/UserProfil.style"

import { useAppSelector, useAppDispatch } from '../../redux/hook';
import { getCurrentLocation } from "../../redux/slices/currentLocation/currentLocationSlice";
import { RootState } from '../../redux/store';


export type UserProfilProps = NativeStackScreenProps<RootStackParamList, "UserProfil">

export default function UserProfil({ route, navigation }: UserProfilProps): JSX.Element {
    const dispatch = useAppDispatch();
    const { currentLocation, loading } = useAppSelector((state) => state.currentLocation);
    useEffect(() => {
        dispatch(getCurrentLocation())
    }, [])
    return (
        <SafeAreaView>
            <ScrollView nestedScrollEnabled={true}>
                <View style={styles.userProfilContainer}>
                    <ProfilHeader />
                    <Picture navigation={navigation} />
                    <Spot currentLocation={currentLocation} />
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};