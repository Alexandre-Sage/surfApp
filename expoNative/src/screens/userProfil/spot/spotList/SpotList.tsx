import React, { useState, useEffect } from 'react';
import { FlatList, ScrollView, Text, TouchableHighlight, ListRenderItem, StyleSheet, View, SafeAreaView } from 'react-native';
import { SpotListInterface } from "../../../../interfaces/spotInterfaces";
import { SpotListItem } from "./SpotListItem";

declare interface SpotListProps {
    spotList: Array<SpotListInterface>
    setMapLocation: Function
};

export const SpotList = ({ spotList, setMapLocation }: SpotListProps): JSX.Element => {
    const onPressFunction = (coordinates: Array<string>) => {
        console.log("fuckOff")
        setMapLocation({
            latitude: parseInt(coordinates[0]),
            longitude: parseInt(coordinates[1])
        });
    };
    const spotListJsx = spotList.map((spot, key) => (
        <SpotListItem key={key} spot={spot} onPressFunction={(coordinates: Array<string>) => onPressFunction(coordinates)} />
    ))
    return (
        <SafeAreaView>
            <ScrollView nestedScrollEnabled={true} style={styles.flatList}>
                <View>
                    {spotListJsx}
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    flatList: {
        width: 300,
        height: 100,
        borderColor: "blue",
        borderWidth: 1,
        marginLeft: 150,
        //position: 'absolute',
        //zIndex: 999
    }
})
