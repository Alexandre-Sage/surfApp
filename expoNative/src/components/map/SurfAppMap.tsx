import React, { ReactNode, useState } from "react";
import { SafeAreaView, Text, View } from "react-native";
import MapView from "react-native-maps";
import { MapLocationInterface } from "../../interfaces/mapLocationInterface";
import { CoordinateObjectInterface, UserMapMarker } from "../../screens/userProfil/spot/map/MapMarker";

export const useMap = (): {
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
  mapLocation: MapLocationInterface;
  markerList: ReactNode[];
  myLocation: CoordinateObjectInterface;
  mapEnabled: boolean;
  setMapEnabled: () => void;
}

export const SurfAppMap = ({ markerList, mapLocation, myLocation, mapEnabled, setMapEnabled }: SurfAppMapProps) => {
  const { longitude, latitude } = mapLocation;
  if (!mapLocation.latitude || !mapLocation.longitude) return <View><Text>Loading...</Text></View>
  return (
    <SafeAreaView>
      <MapView style={[{ height: 500, width: "100%" }]}
        initialRegion={{
          ...myLocation, //Map location
          latitudeDelta: 2, longitudeDelta: 2,
        }}
        region={{
          ...mapLocation, //Map location
          latitudeDelta: 2, longitudeDelta: 2,
        }}
        mapType={"satellite"}
        showsCompass={true}
        scrollEnabled={mapEnabled}
        zoomEnabled={mapEnabled}
        onLongPress={() => setMapEnabled()}
        onPress={() => console.log("pressedMap")}
      >
        <UserMapMarker coordinateObject={myLocation} title={"My location"} color={"blue"} />
        {markerList}
      </MapView>
    </SafeAreaView>
  )
}