import React, { useState, useEffect } from 'react';
import { FlatList, ScrollView, Text, TouchableHighlight, ListRenderItem, StyleSheet, View, SafeAreaView } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { SpotListInterface } from "../../../../interfaces/spotInterfaces";

declare interface SpotListItemProps {
    spot: SpotListInterface,
    onPressFunction: Function,
}

export const SpotListItem = ({ spot, onPressFunction }: SpotListItemProps): JSX.Element => {
    const { coordinates } = spot.location;
    return (
        <TouchableOpacity style={styles.cont} onPress={() => onPressFunction(coordinates)}  >
            <Text>{spot.spotName}</Text>
        </TouchableOpacity>
    );
};
const styles = StyleSheet.create({
    cont: {
        width: 50,
        height: 50,
        borderWidth: 1,
        borderColor: "white"
    }
})