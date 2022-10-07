import React, { useEffect } from "react";
import { View, ScrollView, SafeAreaView } from "react-native";
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from "../../../App"

import { useAppSelector, useAppDispatch } from '../../redux/hook';
import { getCurrentLocation } from "../../redux/slices/currentLocation/currentLocationSlice";
import { setMapLocation } from "../../redux/slices/map/mapSlice";

import { getFetchFunction, postFetchFunction } from "../../modules/fetch/basicFetch";
import ProfilHeader from "./ProfilHeader";
import Spot from "./spot/Spot";
import Picture from "./picture/Picture";

import styles from "../../styles/userProfil/UserProfil.style"
import { Action } from "expo-image-manipulator";


type UserProfilProps = NativeStackScreenProps<RootStackParamList, "UserProfil">

export default function UserProfil({ route, navigation }: UserProfilProps): JSX.Element {
    const dispatch = useAppDispatch();
    const { currentLocation } = useAppSelector((state) => state.currentLocation);
    useEffect(() => {
        dispatch(getCurrentLocation())
            .then((action: any) => {
                const { longitude, latitude } = action.payload;
                dispatch(setMapLocation({
                    latitude: latitude,
                    longitude: longitude
                }));
            });
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