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

export const UserMapMarker = ({ coordinateObject, title, color }: MapMarkerProps): JSX.Element => (
    <React.Fragment>
        <Marker
            coordinate={coordinateObject}
            title={title}
            pinColor={color}
        />
    </React.Fragment>
)