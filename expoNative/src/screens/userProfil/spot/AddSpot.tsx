import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';
import { RootStackParamList } from '../../../../App';
import { Button } from '../../../components/buttons/Button';
import { DropdownInput } from '../../../components/inputs/Dropdown';
import { TxtInput } from '../../../components/inputs/Input';
//import styles from '../../../styles/LandingPage/LandingPage.style';
type AddSpotScreenProps = NativeStackScreenProps<RootStackParamList, "AddSpot">




export default function AddSpotScreen(): JSX.Element {
  const waveTypesArray: any[] = [];
  const bottomTypesArray: any[] = []
  return (
    <SafeAreaView style={styles.safeView}>
      <ScrollView style={styles.scrollView}>
        <View style={styles.container}>

          <View style={styles.spotInfoCtn}>
            <TxtInput name={"Spot name"} setState={() => { }} state={{}} />
            <TxtInput name={"Country"} setState={() => { }} state={{}} />
          </View>

          <View style={styles.spotTypeCtn}>
            <View style={styles.spotTypeTxtCtn}>
              <Text style={styles.spotType}>Spot type</Text>
            </View>
            <View style={styles.spotTypeInputCtn} >
              <DropdownInput action={() => { }} listItemToMap={waveTypesArray} name="Wave type" />
              <DropdownInput action={() => { }} listItemToMap={bottomTypesArray} name="Bottom type" />
            </View>
          </View>

          <View>

          </View>

        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  safeView: {},
  scrollView: {},
  container: {},
  spotInfoCtn: {},
  spotTypeCtn: {},
  spotTypeTxtCtn: {},
  spotType: {},
  spotTypeInputCtn: {}


})