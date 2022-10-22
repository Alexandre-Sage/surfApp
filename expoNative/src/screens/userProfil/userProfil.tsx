import React, { useEffect } from "react";
import { View, ScrollView, SafeAreaView } from "react-native";
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from "../../../App"
import { ProfilHeader } from "./ProfilHeader";
import Spot from "./spot/Spot";
import Picture from "./picture/Picture";
import styles from "../../styles/userProfil/UserProfil.style"

import { useUserLocation } from "../../api/userApi/userApi";

type UserProfilProps = NativeStackScreenProps<RootStackParamList, "UserProfil">

export default function UserProfil({ route, navigation }: UserProfilProps): JSX.Element {
  const [currentLocation, updateCurrentLocation] = useUserLocation();
  useEffect(() => { updateCurrentLocation() }, [])
  return (
    <SafeAreaView>
      <ScrollView nestedScrollEnabled={true}>
        <View style={styles.userProfilContainer}>
          <ProfilHeader />
          <Picture navigation={navigation} />
          {/* <Spot currentLocation={currentLocation} /> */}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};