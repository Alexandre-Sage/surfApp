import React, { useState, useEffect } from "react";
import { ScrollView, View } from "react-native";
import Button from "../../components/buttons/Button";
import Input from "../../components/inputs/Input";
import { getFetchFunction, postFetchFunction } from "../../modules/fetch/basicFetch";
import styles from "../../styles/LandingPage/SignUpForm.style";
import { API_URL } from "@env";

export default function SignUpForm() {
    useEffect(() => { getFetchFunction(`${API_URL}/csrf`) }, []);
    const [answers, setAnswers] = useState({
        email: null,
        phone: null,
        firstName: null,
        name: null,
        userName: null,
        location: null,
        password: null,
        confirmPassword: null,
    });
    const sendAnswers = async () => await postFetchFunction(`${API_URL}/sign-up`, answers);
    return (
        <ScrollView >
            <View style={styles.container}>
                <Input name="Email" state={answers} setState={(value) => setAnswers(value)} />
                <Input name="Phone" state={answers} setState={(value) => setAnswers(value)} />
                <Input name="First name" state={answers} setState={(value) => setAnswers(value)} />
                <Input name="Name" state={answers} setState={(value) => setAnswers(value)} />
                <Input name="User name" state={answers} setState={(value) => setAnswers(value)} />
                <Input name="Location" state={answers} setState={(value) => setAnswers(value)} />
                <Input name="Password" state={answers} setState={(value) => setAnswers(value)} />
                <Input name="Confirm password" state={answers} setState={(value) => setAnswers(value)} />
                <Button aditionalStyles={styles.button} style={styles.button} text="Submit" onPressFunction={(event) => sendAnswers(event)} />
            </View>
        </ScrollView>
    );
};