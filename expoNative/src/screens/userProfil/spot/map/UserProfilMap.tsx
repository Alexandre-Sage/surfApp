import React, { ReactNode, useEffect, useMemo, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { CurrentLocationInterface } from "../../../../interfaces/currentLocation";
import { SpotListInterface } from "../../../../interfaces/spotInterfaces";
import { UserMapMarker } from "./MapMarker";
import { SafeAreaView } from "react-native-safe-area-context";
import { MapLocationInterface } from "../../../../interfaces/mapLocationInterface"
import { useUserLocation } from "../../../../api/userApi/userApi";
import { SurfAppMap, useMap } from "../../../../components/map/SurfAppMap";
declare interface UserProfilMapProps {
  mapLocation: MapLocationInterface,
  spotList: Array<SpotListInterface>,
  currentLocation: CurrentLocationInterface,
  setMapLocation: (param: CurrentLocationInterface) => void;
}

export default function UserProfilMap({ spotList, setMapLocation, mapLocation }: UserProfilMapProps): JSX.Element {
  const { mapEnabled, setMapEnabled } = useMap()
  const [currentLocation, setCurrentLocation] = useUserLocation();
  useEffect(() => {
    setMapLocation({ ...currentLocation })
  }, [currentLocation])
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
      <SurfAppMap
        mapEnabled={mapEnabled}
        markerList={markersList}
        mapLocation={mapLocation}
        myLocation={currentLocation}
        setMapEnabled={() => setMapEnabled()}
      />
    </SafeAreaView >
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
    overflow: "visible",
  },
  text: {
    fontSize: 5
  }
})

