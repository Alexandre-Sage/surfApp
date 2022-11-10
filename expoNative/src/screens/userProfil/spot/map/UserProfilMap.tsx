import React, { ReactNode, useState } from "react";
import { StyleSheet } from "react-native";
import MapView, { Geojson, Marker } from "react-native-maps";
import { CurrentLocationInterface } from "../../../../interfaces/currentLocation";
import { SpotListInterface } from "../../../../interfaces/spotInterfaces";
import { UserMapMarker } from "./MapMarker";
import { SafeAreaView } from "react-native-safe-area-context";

import { useAppSelector, useAppDispatch } from '../../../../redux/hook';
import { setMapLocation, setMapEnabled } from "../../../../redux/slices/map/mapSlice";

import { MapLocationInterface } from "../../../../interfaces/mapLocationInterface"
declare interface UserProfilMapProps {
  //mapLocation: MapLocationInterface,
  spotList: Array<SpotListInterface>,
  currentLocation: CurrentLocationInterface,
}

const useMap = (): {
  mapLocation: MapLocationInterface,
  setMapLocation: (param: MapLocationInterface) => void,
  mapEnabled: boolean,
  setMapEnabled: () => void
} => {
  const [mapLocation, setMapLocation] = useState<MapLocationInterface>({} as MapLocationInterface);
  const [mapEnabled, setMapEnabled] = useState<boolean>(false);
  const updateMapLocation = (newMapLocation: MapLocationInterface) => setMapLocation(newMapLocation);
  const enableMap = () => setMapEnabled(!mapEnabled);
  return { mapLocation, setMapLocation: updateMapLocation, mapEnabled, setMapEnabled: enableMap };
}

interface SurfAppMapProps {
  defaultLocation: MapLocationInterface;
  mapLocation: MapLocationInterface;
  markerList: ReactNode[];
  mapActivation: () => void;
  mapEnabled: boolean;
}

export const SurfAppMap = ({ defaultLocation, markerList, mapEnabled, mapLocation }: SurfAppMapProps) => {
  const { longitude, latitude } = mapLocation;
  return (
    <SafeAreaView>
      <MapView style={[styles.map, { height: 500, width: "100%" }]}
        initialRegion={{
          latitude: latitude, longitude: longitude, //Map location
          latitudeDelta: 1, longitudeDelta: 1,
        }}
        region={{
          latitude: latitude, longitude: longitude, //Map location
          latitudeDelta: 1, longitudeDelta: 1,
        }}
        mapType={"satellite"}
        showsCompass={true}
        scrollEnabled={mapEnabled}
        zoomEnabled={mapEnabled}
        onLongPress={() => mapActivation(mapEnabled, setMapEnabled)}
        onPress={() => console.log("pressedMap")}
      >
        {myLocation ? <UserMapMarker coordinateObject={currentLocationCoordinates} title={"My location"} color={"blue"} /> : null}
        {markersList}
      </MapView>
    </SafeAreaView>
  )
}


export default function UserProfilMap({ spotList, currentLocation }: UserProfilMapProps): JSX.Element {
  //const dispatch = useAppDispatch()
  //const { mapLocation, mapEnabled } = useAppSelector(state => state.map)
  //const { currentLocation } = useAppSelector((state) => state.currentLocation);

  const { mapEnabled, mapLocation, setMapEnabled, setMapLocation } = useMap()
  const currentLocationCoordinates = { longitude: currentLocation.longitude, latitude: currentLocation.latitude };
  const myLocation = Object.values(currentLocationCoordinates).every(coord => coord !== undefined)
  const { longitude, latitude } = mapLocation;


  const markersList: ReactNode = spotList.map(spot => {
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

  const fuckOffWarnings = (fuckingParams: number) => fuckingParams ? fuckingParams : 0

  const mapActivationFunction = (mapCurrentStatus: boolean, setMapEnabled: Function): void => {
    setMapEnabled();
    //dispatch(setMapEnabled(newStatus));
  };

  return (
    <SafeAreaView>
      <MapView style={[styles.map, { height: 500, width: "100%" }]}
        initialRegion={{
          latitude: fuckOffWarnings(latitude), longitude: fuckOffWarnings(longitude), //Map location
          latitudeDelta: 1, longitudeDelta: 1,
        }}
        region={{
          latitude: fuckOffWarnings(latitude), longitude: fuckOffWarnings(longitude), //Map location
          latitudeDelta: 1, longitudeDelta: 1,
        }}
        mapType={"satellite"}
        showsCompass={true}
        scrollEnabled={mapEnabled}
        zoomEnabled={mapEnabled}
        onLongPress={() => mapActivationFunction(mapEnabled, setMapEnabled)}
        onPress={() => console.log("pressedMap")}
      >
        {myLocation ? <UserMapMarker coordinateObject={currentLocationCoordinates} title={"My location"} color={"blue"} /> : null}
        {markersList}
      </MapView>
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
