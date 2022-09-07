import React from "react";
import { StyleSheet } from "react-native";
import MapView, { Geojson, Marker } from "react-native-maps";
import { CurrentLocationInterface } from "../../../../interfaces/currentLocation";
import { SpotListInterface } from "../../../../interfaces/spotInterfaces";
import UserMapMarker from "./MapMarker";

declare interface UserProfilMapProps {
    currentLocation: CurrentLocationInterface,
    spotList: Array<SpotListInterface>
}

export const UserProfilMap = ({ currentLocation, spotList }: UserProfilMapProps): JSX.Element => {

    const { longitude, latitude } = currentLocation;

    const currentLocationCoordinates = { longitude, latitude };

    const myLocationMarker = Object.values(currentLocationCoordinates).every(coord => coord !== undefined)
    const markersList = spotList.map(spot => {
        const { spotName, _id } = spot;
        const { coordinates } = spot.location;
        const coordinateObject = {
            latitude: parseInt(coordinates[0]),
            longitude: parseInt(coordinates[1])
        }
        return <UserMapMarker
            key={_id}
            title={spot.spotName}
            coordinateObject={coordinateObject}
        />
    })
    return (
        <MapView style={styles.map}
            initialRegion={{
                latitude: latitude,
                longitude: longitude,
                latitudeDelta: 0,
                longitudeDelta: 1,
            }}
        >
            {/*myLocationMarker ? <UserMapMarker coordinateObject={currentLocationCoordinates} title={"My location"} color={"blue"} /> : null*/}
            {/*markersList*/}

        </MapView>
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
