import React from 'react';
import { ScrollView, StyleSheet, View, SafeAreaView } from 'react-native';
import { SpotListInterface } from "../../../../interfaces/spotInterfaces";
import { setMapLocation } from "../../../../redux/slices/map/mapSlice";
import { useAppDispatch } from '../../../../redux/hook';
import { SpotListItem } from "./SpotListItem";
import { styles } from "../../../../styles/spots/spotList.style";
declare interface SpotListProps {
  spotList: Array<SpotListInterface>
  //setMapLocation: Function
};

export const SpotList = ({ spotList/*, setMapLocation*/ }: SpotListProps): JSX.Element => {
  const dispatch = useAppDispatch()
  const onPressFunction = (coordinates: Array<string>) => {
    dispatch(setMapLocation({
      latitude: parseInt(coordinates[0]),
      longitude: parseInt(coordinates[1])
    }));
  };
  const spotListJsx = spotList.map((spot, key) => (
    <SpotListItem key={key} spot={spot} onPressFunction={(coordinates: Array<string>) => onPressFunction(coordinates)} />
  ))
  return (
    <SafeAreaView style={styles.safeView}>
      <ScrollView nestedScrollEnabled={false} style={styles.flatList}>
        <View style={styles.view}>
          {spotListJsx}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};


