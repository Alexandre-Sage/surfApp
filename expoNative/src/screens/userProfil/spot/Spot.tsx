import React, { useEffect } from 'react';
import UserProfilMap from "./map/UserProfilMap";
import { View, LayoutAnimation, Text, StyleSheet } from "react-native";
import { useModal, Button } from '@sage/surf-app-ui-lib';
import { SpotListModal } from './spotList/SpotListModal';
import { useSpotList } from '../../../api/spotApi/spotApi';
import { SpotButtons } from './SpotButtons';
import { useUserLocation } from '../../../api/userApi/userApi';
import { useMap } from '../../../components/map/SurfAppMap';
declare interface SpotPropsInterface {
  //currentLocation: CurrentLocationInterface,
  enableMainScroll: () => void,
};



export default function Spot({ enableMainScroll }: SpotPropsInterface): JSX.Element {
  const [spots, setSpotList] = useSpotList();
  const [toggleModal, setToggleModal] = useModal();
  const [currentLocation, setCurrentLocation] = useUserLocation();
  const { mapLocation, setMapLocation, mapEnabled, setMapEnabled } = useMap()
  const { latitude, longitude } = currentLocation;
  const test = () => {
    scrollTo
  }
  useEffect(() => { setSpotList() }, []);
  const displayModal = (): void => {
    enableMainScroll();
    setToggleModal();
  };
  return (
    <View style={styles.view}>
      <Button onPressFunction={() => displayModal()} text={""} />
      <SpotListModal
        style={{
          position: "absolute",
          borderWidth: 5,
          borderColor: "red",
        }}
        setMapLocation={setMapLocation}
        toggleModal={toggleModal}
        spotList={spots}
        onClose={displayModal}
      />
      <UserProfilMap
        spotList={spots}
        mapLocation={mapLocation}
        setMapLocation={setMapLocation}
        currentLocation={currentLocation}
      />
      <SpotButtons />
    </View>
  );
};
const styles = StyleSheet.create({
  view: {
    width: 500,
    height: 800,
  },
  text: {
    fontSize: 5
  }
});
