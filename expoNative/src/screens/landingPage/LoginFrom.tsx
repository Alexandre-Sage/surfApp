import React, { useState, useEffect } from "react";
import { View } from "react-native";
import { Button } from "../../components/buttons/Button";
import Input from "../../components/inputs/Input"
import { authentificationFetch } from "../../api/fetchApi/fetchApi";
import styles from "../../styles/LandingPage/LoginFrom.style";
import { RootStackParamList } from "../../../App"
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import { ErrorModal, useError } from "../../components/modals/ErrorModal";
declare interface LoginAnswersInterface {
  email: string,
  password: string
};

declare interface LoginResponseInterface extends Response {
  message: any
  error: boolean
}

type LoginFormProps = NativeStackScreenProps<RootStackParamList>;



export function LoginForm({ navigation }: LoginFormProps): JSX.Element {
  const { errorMessage, setErrorMessage, toggleErrorModal, setToggleErrorModal } = useError()
  const [answers, setAnswers] = useState({
    email: "test@testOne.com",
    password: "test"
  });
  const sendAnswers = async () => {
    try {
      const auth = await authentificationFetch(`${process.env.DEVELOPMENT_SERVER}/auth/logIn`, answers)
      navigation.navigate("UserProfil")
    } catch (error: any) {
      setErrorMessage(error.message)
      setToggleErrorModal()
      console.log(toggleErrorModal, errorMessage)
    }
  };
  return (
    <SafeAreaView>
      <View style={styles.formContainer}>
        <Input name="Email" state={answers} setState={(value: LoginAnswersInterface) => setAnswers(value)} defaultValue={"test@testOne.com"} />
        <Input name="Password" state={answers} setState={(value: LoginAnswersInterface) => setAnswers(value)} />
        <Button text="Submit" onPressFunction={() => sendAnswers()} />
        <ErrorModal message={errorMessage} displayModal={toggleErrorModal} close={setToggleErrorModal} />
      </View>
    </SafeAreaView>
  );
};