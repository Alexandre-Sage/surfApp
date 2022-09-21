import React from 'react';
import { View, Text } from "react-native";

interface PopUpProps {
    message: string,
};

export const PopUp = ({ message }: PopUpProps): JSX.Element => {
    return (
        <View>
            <Text>{message}</Text>
        </View>
    );
};