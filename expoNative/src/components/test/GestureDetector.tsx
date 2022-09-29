import React, { ReactNode } from 'react';
import { GestureDetector, GestureType, Gesture } from 'react-native-gesture-handler';

interface AppGestureDetectorProps {
    children: ReactNode
};

export default function AppGestureDetector({ children }: AppGestureDetectorProps) {
    return (
        <GestureDetector  >
            <children></children>
        </GestureDetector>
    )
};