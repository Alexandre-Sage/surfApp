import React, { useState, useEffect } from "react";
import { View } from "react-native";
import Button from "../../components/buttons/Button";
import Input from "../../components/inputs/Input";
import { getFetchFunction, postFetchFunction } from "../../modules/fetch/basicFetch";
import styles from "../../styles/LandingPage/LoginFrom.style";
import { API_URL } from "@env";
export default function LoginForm() {
    useEffect(() => { getFetchFunction(`${API_URL}/csrf`) }, []);
    const [answers, setAnswers] = useState({
        email: null,
        password: null
    });
    const sendAnswers = async () => await postFetchFunction(`${API_URL}/login`, answers);
    return (
        <View style={styles.formContainer}>
            <Input name="Email" state={answers} setState={(value) => setAnswers(value)} />
            <Input name="Password" state={answers} setState={(value) => setAnswers(value)} />
            <Button text="Submit" onPressFunction={(event) => sendAnswers(event)} />
        </View>
    );
};