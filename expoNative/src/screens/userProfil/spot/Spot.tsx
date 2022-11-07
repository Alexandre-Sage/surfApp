import React, { useState, useEffect } from 'react';
import UserProfilMap from "./map/UserProfilMap";
import { View, LayoutAnimation, Text, StyleSheet, Alert, useColorScheme } from "react-native";
import { useAppSelector, useAppDispatch } from '../../../redux/hook';
import { getSpotList } from '../../../redux/slices/spot/spotSlice';
import { CurrentLocationInterface } from "../../../interfaces/currentLocation";
import { SpotList } from "./spotList/SpotList";
import { MapLocationInterface } from "../../../interfaces/mapLocationInterface";
import { useSpotList } from '../../../api/spotApi/spotApi';
import { getFetch } from '../../../api/fetchApi/fetchApi';
import { getStoredData } from '../../../api/asyncStorage/asyncStorage';
declare interface SpotPropsInterface {
  currentLocation: CurrentLocationInterface
};



export default function Spot({ currentLocation }: SpotPropsInterface): JSX.Element {
  //const dispatch = useAppDispatch();
  const { latitude, longitude } = currentLocation;
  //const { spotList } = useAppSelector((state) => state.spot);
  const [spots, updateSpotList] = useSpotList();
  useEffect(() => {
    console.log("use")
    //updateSpotList();
    const token = getStoredData("JWT-TOKEN");
    console.log(token)
    fetch(`http://127.0.0.1:3500/spot/getAllSpots`, {
      method: 'GET',
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2MzVjZjFmNTlkZWVhNjM4ZDcyYTc5M2MiLCJ1c2VyTmFtZSI6IlRlc3RPbmUiLCJpYXQiOjE2Njc3MzI1OTQsImV4cCI6MTY2ODU5NjU5NH0.PXkQXd6KIyR6eV-WVeNWrtE2Bvn48j4bRf4j7nx4bdE`
      }
    }).then(res => console.log("res", JSON.stringify(res))).catch(err => console.log({ err: JSON.stringify(err) }))
    //${process.env.DEVELOPMENT_SPOT_SERVER}
  }, []);
  //fetch(`http://127.0.0.1:3500/spot/getAllSpots`, {
  //  method: 'GET',
  //  headers: {
  //    "Content-Type": "application/json",
  //    "Authorization": `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2MzVjZjFmNTlkZWVhNjM4ZDcyYTc5M2MiLCJ1c2VyTmFtZSI6IlRlc3RPbmUiLCJpYXQiOjE2Njc3MzI1OTQsImV4cCI6MTY2ODU5NjU5NH0.PXkQXd6KIyR6eV-WVeNWrtE2Bvn48j4bRf4j7nx4bdE`
  //  }
  //}).then(res => console.log("res", JSON.stringify(res))).catch(err => console.log({ err: JSON.stringify(err) }))
  //getFetch(`http://127.0.0.1:3500/spot/getAllSpots`).then(res => console.log("res", res)).catch(err => console.log({ err: JSON.stringify(err) }));
  return (
    <View style={styles.view}>
      {/* <SpotList spotList={spots} /> */}
      {/* <UserProfilMap spotList={spots} /> */}
    </View>
  );
};
const styles = StyleSheet.create({
  view: {
    width: 500,
    height: 500,
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
