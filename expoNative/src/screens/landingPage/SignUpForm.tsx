import React, { useState, useEffect } from "react";
import { ScrollView, View } from "react-native";
import { Button, TxtInput } from "@sage/surf-app-ui-lib";
import { getFetchFunction, postFetchFunction } from "../../modules/fetch/basicFetch";
import styles from "../../styles/LandingPage/SignUpForm.style";

declare interface SignUpAnswersInterface {
  email: string,
  phone: string,
  firstName: string,
  name: string,
  userName: string,
  location: string,
  password: string,
  confirmPassword: string,
}
console.log(process.env.API_URL)
export default function SignUpForm(): JSX.Element {
  const [answers, setAnswers] = useState({
    email: "",
    phone: "",
    firstName: "",
    name: "",
    userName: "",
    location: "",
    password: "",
    confirmPassword: "",
  });
  const sendAnswers = async () => { console.log(JSON.stringify(answers)); await postFetchFunction(`${process.env.DEVELOPMENT_SERVER}/auth/signUp`, answers).then(res => console.log(res)).catch(err => console.log(err)) };
  return (
    <ScrollView >
      <View style={styles.container}>
        <TxtInput
          name="email"
          title="Email"
          state={answers}
          setState={setAnswers}
        />
        <TxtInput
          name="phone"
          title="Phone"
          state={answers}
          setState={setAnswers}
        />
        <TxtInput
          name="firstName"
          title="First name"
          state={answers}
          setState={setAnswers}
        />
        <TxtInput
          name="name"
          title="Name"
          state={answers}
          setState={setAnswers}
        />
        <TxtInput
          name="userName"
          title="User name"
          state={answers}
          setState={setAnswers}
        />
        <TxtInput
          name="location"
          title="Location"
          state={answers}
          setState={setAnswers}
        />
        <TxtInput
          name="password"
          title="Password"
          state={answers}
          setState={setAnswers}
        />
        <TxtInput
          name="confirmPassword"
          title="Confirm password"
          state={answers}
          setState={setAnswers}
        />
        <Button containerStyle={styles.button} text="Submit" onPressFunction={() => sendAnswers()} />
      </View>
    </ScrollView>
  );
};