import React, { useState } from 'react';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { ScrollView, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { RootStackParamList } from '../../../../App';
import { Button, CheckBox, DropdownInput, TxtInput, Modal, useModal, ErrorModal, useError } from '@sage/surf-app-ui-lib';
import { styles } from '../../../styles/spots/addSpot.style';
import Or from '../../landingPage/Or';
import { useUserLocation } from '../../../api/userApi/userApi';
import { InputFunctionParam } from '../../../components/inputs/inputAction';
import { postFetchFunction } from '../../../api/fetchApi/fetchApi';
type AddSpotScreenProps = NativeStackScreenProps<RootStackParamList, "AddSpot">
interface AddSpotFormInterface {
  spotName: string;
  country: string;
  location: any;
  orientation: string[] | []
  type: {
    waveType: string;
    bottomType: string;
  };

};


const CardinalPointCheckBox = ({ title, name, state, action }: { title: string, name: string, state: any, action: any }): JSX.Element => {
  const orientations: any[] = ["N", "S", "E", "W", "NW", "SE", "NE", "SW"]
  return (
    <View style={styles.spotOrientationContainer}>
      <View style={styles.addSpotTitle}>
        <Text style={styles.addSpotTxt}>{title}</Text>
      </View>
      <View style={styles.spotOrientation}>
        {orientations.map(orientation => (
          <CheckBox multipleChoice
            state={state}
            name={name}
            key={orientation}
            action={action}
            value={orientation} />
        ))}
      </View>
    </View>
  )
}

export default function AddSpotScreen(): JSX.Element {
  const [userLocation, setLocation] = useUserLocation()
  const [userAnswers, setUserAnswers] = useState<AddSpotFormInterface>({} as AddSpotFormInterface)
  const [toggleModal, setToggleModal] = useModal();
  const [modalMessage, setModalMessage] = useState<string>()
  const { errorMessage, setErrorMessage, setToggleErrorModal, toggleErrorModal } = useError();
  const bottomTypesArray: string[] = ["Sand", "Reef", "Mixed"];
  const waveTypesArray: string[] = ["Point break", "Shore break", "Slab", "River mouth"];
  const getUserLocation = () => {
    setLocation();
    setUserAnswers({
      ...userAnswers,
      location: {
        type: "Point",
        coordinates: [userLocation.longitude, userLocation.latitude]
      }
    })
  };
  const setWaveType = ({ name, value }: InputFunctionParam) =>
    setUserAnswers({
      ...userAnswers,
      type: {
        ...userAnswers.type,
        [name]: value
      }
    });
  const senAnswersToServer = async () => {
    const url = `${process.env.DEVELOPMENT_SERVER}/spot/newSpot`;
    try {
      const { error, serverResponse } = await postFetchFunction(url, userAnswers)
      if (error) {
        setErrorMessage(serverResponse);
        setToggleErrorModal();
      }
      setModalMessage(serverResponse)
      setToggleModal()
    } catch (error: any) {
      console.log(error)
    }
  }
  console.log({ userAnswers })
  return (
    <SafeAreaView style={styles.safeView}>
      <ScrollView style={styles.scrollView}>
        <View style={styles.container}>
          <View style={styles.spotInfoCtn}>
            <TxtInput name={"spotName"} title={"Spot name"} setState={setUserAnswers} state={userAnswers} />
            <TxtInput name={"country"} title="Country" setState={setUserAnswers} state={userAnswers} />
          </View>
          <View style={styles.spotTypeCtn}>
            <View style={styles.addSpotTitle}>
              <Text style={styles.addSpotTxt}>Spot type</Text>
            </View>
            <View style={styles.spotTypeInputCtn} >
              <DropdownInput
                action={setWaveType}
                listItemToMap={waveTypesArray}
                title="Wave type"
                name='waveType'
              />
              <DropdownInput
                action={setWaveType}
                listItemToMap={bottomTypesArray}
                title="Bottom type"
                name="bottomType"
              />
            </View>
          </View>
          <CardinalPointCheckBox
            name="orientation"
            title="Orientation"
            action={setUserAnswers}
            state={userAnswers}
          />

          <View style={styles.locationCtn}>
            <View style={styles.addSpotTitle}>
              <Text style={styles.addSpotTxt}>
                Location (You can add this later)
              </Text>
            </View>
            <View style={styles.locationInputCtn}>
              <Button
                text='Choose location'
                onPressFunction={() => { }}
              />
              <Or />
              <Button
                onPressFunction={getUserLocation}
                text="Current Location"
              />
            </View>
          </View>
          <CardinalPointCheckBox
            name='optimalWave'
            title="Optimal waves (You can add this later)"
            action={setUserAnswers}
            state={userAnswers}
          />
          <CardinalPointCheckBox
            name="optimalWinds"
            title="Optimal winds (You can add this later)"
            action={setUserAnswers}
            state={userAnswers}
          />

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
              onPressFunction={async () => await senAnswersToServer()}
              text="Create"
            />
          </View>
        </View>
      </ScrollView>
      <Modal
        toggleModal={toggleModal}
        onClose={setToggleModal}
      >
        <View><Text>{"HERE"}</Text></View>
      </Modal>
      <ErrorModal
        close={setToggleErrorModal}
        displayModal={toggleErrorModal}
        message={errorMessage}
      />
    </SafeAreaView>
  );
};
