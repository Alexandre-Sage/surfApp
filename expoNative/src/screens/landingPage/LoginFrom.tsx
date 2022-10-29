import React, { useState, useEffect } from "react";
import { View } from "react-native";
import Button from "../../components/buttons/Button";
import Input from "../../components/inputs/Input"
import { authentificationFetch } from "../../api/fetchApi/fetchApi";
import styles from "../../styles/LandingPage/LoginFrom.style";
import { RootStackParamList } from "../../../App"
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { useNavigation } from "@react-navigation/native";

declare interface LoginAnswersInterface {
  email: string,
  password: string
};

declare interface LoginResponseInterface extends Response {
  message: any
  error: boolean
}

type LoginFormProps = NativeStackScreenProps<RootStackParamList>;

export default function LoginForm({ navigation }: LoginFormProps): JSX.Element {
  const [answers, setAnswers] = useState({
    email: "test@testOne.com",
    password: "test"
  });
  /*Ajout du param a vérifier*/
  const sendAnswers = async () => {
    authentificationFetch(`${process.env.DEVELOPMENT_SERVER}/auth/login`, answers)
      .then((res: any) => !res.error ? navigation.navigate("UserProfil") : console.log(res.error))
      .catch(err => console.error(err))
  };
  return (
    <View style={styles.formContainer}>
      <Input name="Email" state={answers} setState={(value: LoginAnswersInterface) => setAnswers(value)} defaultValue={"test@testOne.com"} />
      <Input name="Password" state={answers} setState={(value: LoginAnswersInterface) => setAnswers(value)} />
      <Button text="Submit" onPressFunction={() => sendAnswers()} />
    </View>
  );
};