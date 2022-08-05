import React, { useState, useEffect } from "react";
import { View } from "react-native";
import Button from "../../components/buttons/Button";
import Input from "../../components/inputs/Input";
import { getFetchFunction, postFetchFunction } from "../../modules/fetch/basicFetch";
import styles from "../../styles/LandingPage/LoginFrom.style";

export default function LoginForm() {
    const [answers, setAnswers] = useState({
        email: null,
        password: null
    });
    useEffect(async () => await getFetchFunction("http://127.0.0.1:4875/csrf"), []);
    const sendAnswers = async () => await postFetchFunction("http://127.0.0.1:4875/login", answers);
    return (
        <View style={styles.formContainer}>
            <Input name="Email" state={answers} setState={(value) => setAnswers(value)} />
            <Input name="Password" state={answers} setState={(value) => setAnswers(value)} />
            <Button text="Submit" onPressFunction={(event) => sendAnswers(event)} />
        </View>
    );
};