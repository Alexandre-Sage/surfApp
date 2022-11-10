import React, { useEffect, useState } from "react";
import { View, ScrollView, SafeAreaView } from "react-native";
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from "../../../App"
import { ProfilHeader } from "./ProfilHeader";
import Spot from "./spot/Spot";
import Picture from "./picture/Picture";
import styles from "../../styles/userProfil/UserProfil.style"

import { useUserLocation } from "../../api/userApi/userApi";
import { getFetch } from "../../api/fetchApi/fetchApi";


type UserProfilProps = NativeStackScreenProps<RootStackParamList, "UserProfil">
export default function UserProfil({ route, navigation }: UserProfilProps): JSX.Element {
  const [currentLocation, updateCurrentLocation] = useUserLocation();
  const [scroll, setScroll] = useState<boolean>(true)
  useEffect(() => { updateCurrentLocation() }, [])
  const enableScroll = () => setScroll(!scroll)
  console.log(scroll)
  return (
    <SafeAreaView>
      <ScrollView nestedScrollEnabled={false} scrollEnabled={scroll}>
        <View style={styles.userProfilContainer}>
          <ProfilHeader />
          <Picture navigation={navigation} />
          <Spot currentLocation={currentLocation} enableMainScroll={enableScroll} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};