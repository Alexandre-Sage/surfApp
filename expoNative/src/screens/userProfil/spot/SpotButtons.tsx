import React from 'react';
import { View } from 'react-native';
import { Button } from '../../../components/buttons/Button';
export const SpotButtons = (): JSX.Element => {
  const loge = () => console.log("done")
  return (
    <View>
      <Button text={"Spot details"} onPressFunction={() => loge()} />
      <Button text={"Add spot"} onPressFunction={() => loge()} />
    </View>
  )
}