import React, { useState, useEffect } from "react";
import { Image, Text, View, TextInput } from "react-native";
import Button from "../../components/buttons/Button";
import Input from "../../components/inputs/Input";
import styles from "../../styles/LandingPage/LoginFrom.style";

export default function LoginForm() {
    useEffect(() => {

    });
    const [answers, setAnswers] = useState({
        email: null,
        password: null
    });

    const sendAnswers = async (arg) => {
        console.log(arg)
        console.table(answers);
    };
    return (
        <View style={styles.formContainer}>
            <Input name="Email" state={answers} setState={(value) => setAnswers(value)} />
            <Input name="Password" state={answers} setState={(value) => setAnswers(value)} />
            <Button text="Submit" onPressFunction={(event) => sendAnswers(event)} />
        </View>
    )
}