import React, { useState } from 'react';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { ScrollView, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { RootStackParamList } from '../../../../App';
import { Button } from '../../../components/buttons/Button';
import { DropdownInput } from '../../../components/inputs/Dropdown';
import { CheckBox } from "../../../components/inputs/CheckBox"
import { TxtInput } from '../../../components/inputs/Input';
import { styles } from '../../../styles/spots/addSpot.style';
import Or from '../../landingPage/Or';
//import styles from '../../../styles/LandingPage/LandingPage.style';
type AddSpotScreenProps = NativeStackScreenProps<RootStackParamList, "AddSpot">

interface AddSpotFormInterface {
  spotName: string;
  country: string;
  type: {
    waveType: string;
    bottomType: string;
  };
  orientation: string[]

};


const CardinalPointCheckBox = ({ title }: { title: string }): JSX.Element => {
  const orientations: any[] = ["N", "S", "E", "W", "NW", "SE", "NE", "SW"]
  return (
    <View style={styles.spotOrientationContainer}>
      <View style={styles.addSpotTitle}>
        <Text style={styles.addSpotTxt}>{title}</Text>
      </View>
      <View style={styles.spotOrientation}>
        {orientations.map(orientation => (
          <CheckBox key={orientation} action={() => console.log("check")} value={orientation} />
        ))}
      </View>
    </View>
  )
}

export default function AddSpotScreen(): JSX.Element {
  const [userAnswers, setUserAnswers] = useState<AddSpotFormInterface>({} as AddSpotFormInterface)
  const waveTypesArray: string[] = ["Point break", "Shore break", "Slab", "River mouth"];
  const bottomTypesArray: string[] = ["Sand", "Reef", "Mixed"];
  console.log(userAnswers)
  return (
    <SafeAreaView style={styles.safeView}>
      <ScrollView style={styles.scrollView}>
        <View style={styles.container}>
          <View style={styles.spotInfoCtn}>
            <TxtInput name={"Spot name"} setState={setUserAnswers} state={userAnswers} />
            <TxtInput name={"Country"} setState={setUserAnswers} state={userAnswers} />
          </View>
          <View style={styles.spotTypeCtn}>
            <View style={styles.addSpotTitle}>
              <Text style={styles.addSpotTxt}>Spot type</Text>
            </View>
            <View style={styles.spotTypeInputCtn} >
              <DropdownInput action={() => { }} listItemToMap={waveTypesArray} name="Wave type" />
              <DropdownInput action={() => { }} listItemToMap={bottomTypesArray} name="Bottom type" />
            </View>
          </View>
          <CardinalPointCheckBox title="Orientation" />

          <View style={styles.locationCtn}>
            <View style={styles.addSpotTitle}>
              <Text style={styles.addSpotTxt}>
                Location (You can add this later)
              </Text>
            </View>
            <View style={styles.locationInputCtn}>
              <TxtInput
                name='Manual'
                setState={() => { }}
                state={{}}
              />
              <Or />
              <Button
                onPressFunction={() => { }}
                text="Current Location"
              />
            </View>
          </View>
          <CardinalPointCheckBox title="Optimal waves (You can add this later)" />
          <CardinalPointCheckBox title="Optimal winds (You can add this later)" />

          <View style={styles.spotPictureCtn}>
            <View style={styles.addSpotTitle}>
              <Text style={styles.addSpotTxt}>Spot picture (optional)</Text>
            </View>
            <View style={styles.pictureButtonCtn}>
              <Button
                onPressFunction={() => { }}
                text="Add picture"
              />
            </View>
          </View>

          <View style={styles.createCtn}>
            <Button
              onPressFunction={() => { }}
              text="Create"
            />
          </View>

        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
