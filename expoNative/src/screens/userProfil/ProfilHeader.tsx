import React, { useState, useEffect } from "react";
import { View, LayoutAnimation, Text, ScrollView } from "react-native";
import styles from "../../styles/userProfil/ProfilHeader.style";
import { useAppSelector, useAppDispatch } from '../../redux/hook';
import { getProfilHeader } from "../../redux/slices/userProfil/userProfilSlice";
import { SafeAreaView } from "react-native-safe-area-context";


export default function ProfilHeader() {
    const dispatch = useAppDispatch();
    const { profilHeader } = useAppSelector((state) => state.user);

    useEffect(function () {
        dispatch(getProfilHeader())
    }, []);
    const headerJsx = profilHeader.map((info, key) => (
        <React.Fragment key={key}>

            <View style={styles.userNameContainer}>
                <Text style={styles.userName}>{info.userName!}</Text>
            </View>
            <View style={styles.infoContainer}>
                <View style={styles.infoSubContainer}>
                    <Text style={styles.info}>Name: {info.name!}</Text>
                    <Text style={styles.info}>Location: {info.location!}</Text>
                </View>
                <View style={styles.infoSubContainer}>
                    <Text style={styles.info}>
                        First name: {info.firstName!}
                    </Text>
                    <Text style={styles.info}>
                        Inscription: {new Date(info.creationDate!).toLocaleDateString(["ban", "id"])}
                    </Text>
                </View>
            </View>
        </React.Fragment>
    ));
    return (
        <SafeAreaView>
            <View style={styles.container}>
                {headerJsx}
            </View>
        </SafeAreaView>
    );
};