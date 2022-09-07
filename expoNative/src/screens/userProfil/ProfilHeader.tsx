import React, { useState, useEffect } from "react";
import { View, LayoutAnimation, Text, ScrollView } from "react-native";
import styles from "../../styles/userProfil/ProfilHeader.style";
import { useAppSelector, useAppDispatch } from '../../redux/hook';
import { getProfilHeader } from "../../redux/slices/userProfil/userProfilSlice";


export default function ProfilHeader() {
    const dispatch = useAppDispatch();
    const { profilHeader } = useAppSelector((state) => state.user);

    useEffect(function () {
        dispatch(getProfilHeader())
    }, []);
    const headerJsx = profilHeader.map((info, key) => (
        <React.Fragment key={key}>
            <View>
                <Text>{info.userName!}</Text>
            </View>
            <View>
                <Text>Name: {info.name!}</Text>
                <Text>Location: {info.location!}</Text>
            </View>
            <View>
                <Text>First name: {info.firstName!}</Text>
                <Text>Inscription: {info.creationDate!}</Text>
            </View>
        </React.Fragment>
    ));
    return (
        <View>
            {headerJsx}
        </View>
    );
};