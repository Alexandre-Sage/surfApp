import React, { useEffect } from 'react';
import UserProfilMap from "./map/UserProfilMap";
import { View, LayoutAnimation, Text, StyleSheet } from "react-native";
import { CurrentLocationInterface } from "../../../interfaces/currentLocation";
import { useModal } from '../../../components/modals/Modal';
import { SpotListModal } from './spotList/SpotListModal';
import { useSpotList } from '../../../api/spotApi/spotApi';
import { Button } from '../../../components/buttons/Button';
import { SpotButtons } from './SpotButtons';
declare interface SpotPropsInterface {
  currentLocation: CurrentLocationInterface,
  enableMainScroll: () => void,
};



export default function Spot({ currentLocation, enableMainScroll }: SpotPropsInterface): JSX.Element {
  const { latitude, longitude } = currentLocation;
  const [spots, setSpotList] = useSpotList();
  const [toggleModal, setToggleModal] = useModal();
  useEffect(() => { setSpotList() }, []);
  const displayModal = (): void => {
    enableMainScroll();
    setToggleModal();
  };
  return (
    <View style={styles.view}>
      <Button onPressFunction={() => displayModal()} text={""} />
      <SpotListModal toggleModal={toggleModal} spotList={spots} onClose={displayModal} />
      <UserProfilMap spotList={spots} currentLocation={currentLocation} />
      <SpotButtons />
    </View>
  );
};
const styles = StyleSheet.create({
  view: {
    width: 500,
    height: 800,
  },
  map: {
    width: "100%",
    height: 500,
    overflow: "visible"
  },
  text: {
    fontSize: 5
  }
});
