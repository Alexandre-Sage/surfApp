import React, { useState } from "react";
import { StyleSheet } from "react-native";
import MapView, { Geojson, Marker } from "react-native-maps";
import { CurrentLocationInterface } from "../../../../interfaces/currentLocation";
import { SpotListInterface } from "../../../../interfaces/spotInterfaces";
import { UserMapMarker } from "./MapMarker";
import { MapLocationInterface } from "../../../../interfaces/mapLocationInterface";
import { SafeAreaView } from "react-native-safe-area-context";


declare interface UserProfilMapProps {
    mapLocation: MapLocationInterface,
    spotList: Array<SpotListInterface>,
    currentLocation: CurrentLocationInterface,
}

export default function UserProfilMap({ mapLocation, spotList, currentLocation }: UserProfilMapProps): JSX.Element {
    const { longitude, latitude } = mapLocation;
    const currentLocationCoordinates = { longitude: currentLocation.longitude, latitude: currentLocation.latitude };
    const myLocation = Object.values(currentLocationCoordinates).every(coord => coord !== undefined)


    const markersList = spotList.map(spot => {
        const { spotName, _id } = spot;
        const { coordinates } = spot.location;
        const coordinateObject = {
            latitude: parseInt(coordinates[0]),
            longitude: parseInt(coordinates[1])
        };
        return (
            <UserMapMarker key={_id} title={spot.spotName} coordinateObject={coordinateObject} />
        );
    });
    return (
        <SafeAreaView>
            <MapView style={styles.map}
                initialRegion={{
                    latitude: latitude, longitude: longitude,
                    latitudeDelta: 0, longitudeDelta: 1,
                }}
                region={{
                    latitude: latitude, longitude: longitude,
                    latitudeDelta: 0, longitudeDelta: 1,
                }}
            >
                {myLocation ? <UserMapMarker coordinateObject={currentLocationCoordinates} title={"My location"} color={"blue"} /> : null}
                {markersList}
            </MapView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    view: {
        width: "75%",
        height: 200,
    },
    map: {
        width: "100%",
        height: 200,
    },
    text: {
        fontSize: 5
    }
})
