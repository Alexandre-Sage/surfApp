import React, { useState, useEffect } from "react";
import { ScrollView, View } from "react-native";
import Button from "../../components/buttons/Button";
import Input from "../../components/inputs/Input";
import { getFetchFunction, postFetchFunction } from "../../modules/fetch/basicFetch";
import styles from "../../styles/LandingPage/SignUpForm.style";
//import { API_URL } from 'react-native-dotenv';

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
    useEffect(() => { getFetchFunction(`${process.env.API_LAN}/csrf`).then(res => console.log(res)).catch(err => console.log(err)) }, []);
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
    const sendAnswers = async () => { console.log(JSON.stringify(answers)); await postFetchFunction(`${process.env.API_LAN}/signUp`, answers).then(res => console.log(res)).catch(err => console.log(err)) };
    return (
        <ScrollView >
            <View style={styles.container}>
                <Input name="Email" state={answers} setState={(value: SignUpAnswersInterface) => setAnswers(value)} />
                <Input name="Phone" state={answers} setState={(value: SignUpAnswersInterface) => setAnswers(value)} />
                <Input name="First name" state={answers} setState={(value: SignUpAnswersInterface) => setAnswers(value)} />
                <Input name="Name" state={answers} setState={(value: SignUpAnswersInterface) => setAnswers(value)} />
                <Input name="User name" state={answers} setState={(value: SignUpAnswersInterface) => setAnswers(value)} />
                <Input name="Location" state={answers} setState={(value: SignUpAnswersInterface) => setAnswers(value)} />
                <Input name="Password" state={answers} setState={(value: SignUpAnswersInterface) => setAnswers(value)} />
                <Input name="Confirm password" state={answers} setState={(value: SignUpAnswersInterface) => setAnswers(value)} />
                <Button containerStyle={styles.button} text="Submit" onPressFunction={() => sendAnswers()} />
            </View>
        </ScrollView>
    );
};