import React, { useState, useEffect } from 'react';
import { View, LayoutAnimation, Text, StyleSheet, Alert, useColorScheme } from "react-native";
import { useAppSelector, useAppDispatch } from '../../../redux/hook';
import { getSpotList } from '../../../redux/slices/spot/spotSlice';
import { CurrentLocationInterface } from "../../../interfaces/currentLocation"
import { UserProfilMap } from "./map/UserProfilMap";

declare interface SpotPropsInterface {
    currentLocation: CurrentLocationInterface
};

export default function Spot({ currentLocation }: SpotPropsInterface): JSX.Element {
    const dispatch = useAppDispatch();
    const { spotList } = useAppSelector((state) => state.spot);
    useEffect(() => {
        dispatch(getSpotList())
    }, []);
    console.log(UserProfilMap)
    return (
        <View style={styles.view}>
            <UserProfilMap spotList={spotList} currentLocation={currentLocation} />
        </View>
    );
};

const styles = StyleSheet.create({
    view: {
        width: 500,
        height: 500,
    },
    map: {
        width: 500,
        height: 500,
    },
    text: {
        fontSize: 5
    }
})
