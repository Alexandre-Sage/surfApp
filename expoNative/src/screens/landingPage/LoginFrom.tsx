import React, { useState, useEffect } from "react";
import { View } from "react-native";
// import { TxtInput } from "../../components/inputs/Input"
import { authentificationFetch } from "../../api/fetchApi/fetchApi";
import styles from "../../styles/LandingPage/LoginFrom.style";
import { RootStackParamList } from "../../../App"
import { NativeStackNavigationProp, NativeStackScreenProps } from '@react-navigation/native-stack';
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import { ErrorModal, useError, Button, TxtInput } from "@sage/surf-app-ui-lib"
declare interface LoginAnswersInterface {
  email: string,
  password: string
};

declare interface LoginResponseInterface extends Response {
  message: any
  error: boolean
}

type LoginFormProps = Omit<NativeStackScreenProps<RootStackParamList | any>, "route">;



export function LoginForm(): JSX.Element {
  const { navigate, replace } = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const { errorMessage, setErrorMessage, toggleErrorModal, setToggleErrorModal } = useError()
  const [answers, setAnswers] = useState({
    email: "test@testOne.com",
    password: "test"
  });
  const sendAnswers = async () => {
    try {
      const auth = await authentificationFetch(`${process.env.DEVELOPMENT_SERVER}/auth/logIn`, answers)
      navigate("UserProfil")
    } catch (error: any) {
      setErrorMessage(error.message)
      setToggleErrorModal()
    }
  };
  return (
    <SafeAreaView>
      <View style={styles.formContainer}>
        <TxtInput
          name="email"
          title="Email"
          state={answers}
          setState={setAnswers}
        />
        <TxtInput
          name="password"
          title="Password"
          state={answers}
          setState={setAnswers}
        />
        <Button text="Submit" onPressFunction={() => sendAnswers()} />
        <ErrorModal message={errorMessage} displayModal={toggleErrorModal} close={setToggleErrorModal} />
      </View>
    </SafeAreaView>
  );
};