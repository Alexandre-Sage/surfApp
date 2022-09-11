import React, { useState, useEffect } from 'react';
import UserProfilMap from "./map/UserProfilMap";
import { View, LayoutAnimation, Text, StyleSheet, Alert, useColorScheme } from "react-native";
import { useAppSelector, useAppDispatch } from '../../../redux/hook';
import { getSpotList } from '../../../redux/slices/spot/spotSlice';
import { CurrentLocationInterface } from "../../../interfaces/currentLocation";
import { SpotList } from "./spotList/SpotList";
import { MapLocationInterface } from "../../../interfaces/mapLocationInterface";
declare interface SpotPropsInterface {
    currentLocation: CurrentLocationInterface
};



export default function Spot({ currentLocation }: SpotPropsInterface): JSX.Element {
    const dispatch = useAppDispatch();
    const { latitude, longitude } = currentLocation;
    const { spotList } = useAppSelector((state) => state.spot);
    const [mapLocation, setMapLocation] = useState<MapLocationInterface>({} as MapLocationInterface);
    useEffect(() => {
        setMapLocation({
            latitude: latitude,
            longitude: longitude,
        });
        dispatch(getSpotList());
    }, [latitude, longitude]);
    return (
        <View style={styles.view}>
            <SpotList spotList={spotList} setMapLocation={(coordinates: MapLocationInterface) => setMapLocation(coordinates)} />
            <UserProfilMap spotList={spotList} mapLocation={mapLocation} currentLocation={currentLocation} />
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
});
