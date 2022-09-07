import React from "react";
import { Marker } from "react-native-maps";
declare interface MapMarkerProps {
    title?: string,
    coordinateObject: {
        longitude: number,
        latitude: number,
    },
    color?: string
};

export default function UserMapMarker({ coordinateObject, title, color }: MapMarkerProps): JSX.Element {
    console.log("marker", Marker)
    return (
        <React.Fragment>
            <Marker
                coordinate={coordinateObject}
                title={title}
                pinColor={color}
            />
        </React.Fragment>
    );
};