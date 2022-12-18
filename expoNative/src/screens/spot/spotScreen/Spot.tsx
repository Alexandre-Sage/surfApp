import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React from "react";
import { Text, View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { RootStackParamList } from "../../../../App";

//interface SpotScreenProps{
//
//}
type SpotScreenProps = NativeStackScreenProps<RootStackParamList, "SpotScreen">
export default function SpotScreen({ navigation, route }: SpotScreenProps) {
  const { spotId } = route.params
  return (
    <ScrollView>
      <View>
        <Text>
          SPOT SCREEN
        </Text>
      </View>
    </ScrollView>
  );
};
