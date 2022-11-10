import React, { useState, useEffect } from 'react';
import { FlatList, ScrollView, Text, TouchableHighlight, ListRenderItem, StyleSheet, View, SafeAreaView } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { SpotListInterface } from "../../../../interfaces/spotInterfaces";
import { styles } from "../../../../styles/spots/spotListItem.style"
declare interface SpotListItemProps {
  spot: SpotListInterface,
  onPressFunction: Function,
}

export const SpotListItem = ({ spot, onPressFunction }: SpotListItemProps): JSX.Element => {
  const { coordinates } = spot.location;
  return (
    <TouchableOpacity style={styles.container} onPress={() => onPressFunction(coordinates)}  >
      <Text style={styles.text}>{spot.spotName}</Text>
    </TouchableOpacity>
  );
};
