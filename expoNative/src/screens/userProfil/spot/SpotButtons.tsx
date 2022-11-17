import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { Button } from '@sage/surf-app-ui-lib';
import React from 'react';
import { View } from 'react-native';
import { RootStackParamList } from '../../../../App';


export const SpotButtons = (): JSX.Element => {
  const { navigate, replace } = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const loge = () => console.log("done")
  return (
    <View>
      <Button text={"Spot details"} onPressFunction={() => navigate("AddSpot")} />
      <Button text={"Add spot"} onPressFunction={() => navigate("AddSpot")} />
    </View>
  )
}