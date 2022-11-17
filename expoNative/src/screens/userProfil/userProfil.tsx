import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React, { useState } from "react";
import { SafeAreaView, ScrollView, View } from "react-native";
import { RootStackParamList } from "../../../App";
import styles from "../../styles/userProfil/UserProfil.style";
import Picture from "./picture/Picture";
import { ProfilHeader } from "./ProfilHeader";
import Spot from "./spot/Spot";



type UserProfilProps = NativeStackScreenProps<RootStackParamList, "UserProfil">
export default function UserProfil({ route, navigation }: UserProfilProps): JSX.Element {
  const [scroll, setScroll] = useState<boolean>(true)
  const enableScroll = () => setScroll(!scroll)
  return (
    <SafeAreaView>
      <ScrollView nestedScrollEnabled={false} scrollEnabled={scroll}>
        <View style={styles.userProfilContainer}>
          <ProfilHeader />
          <Picture navigation={navigation} />
          <Spot enableMainScroll={enableScroll} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};