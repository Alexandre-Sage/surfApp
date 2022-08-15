import React, { useState, useEffect } from "react";
import { View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Button from "../../components/buttons/Button";
import Input from "../../components/inputs/Input";
import { getFetchFunction, postFetchFunction } from "../../modules/fetch/basicFetch";
import styles from "../../styles/LandingPage/LoginFrom.style";
import { API_URL } from "@env";

export default function LoginForm(props) {
    const navigation = useNavigation();
    console.log(navigation)
    useEffect(() => { getFetchFunction(`${API_URL}/csrf`) }, []);
    const [answers, setAnswers] = useState({
        email: null,
        password: null
    });
    /*Ajout du param a vérifier*/
    const sendAnswers = async () => {
        postFetchFunction(`${API_URL}/login`, answers)
            //.then((res) => res.json())
            .then(res => !res.error ? navigation.navigate("UserProfil") : alert("fuck"))
            .catch(err => console.error(err))
    };
    return (
        <View style={styles.formContainer}>
            <Input name="Email" state={answers} setState={(value) => setAnswers(value)} />
            <Input name="Password" state={answers} setState={(value) => setAnswers(value)} />
            <Button text="Submit" onPressFunction={(event) => sendAnswers(event)} />
        </View>
    );
};