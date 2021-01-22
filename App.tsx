import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from "react-native-safe-area-context";
import { DataPhotosProvider } from "./src/Context/DataPhotosProvider";

import { Navigation } from './src/navigation';

export default function App() {
    return (
        <DataPhotosProvider>
            <SafeAreaProvider>
                <Navigation/>
                <StatusBar/>
            </SafeAreaProvider>
        </DataPhotosProvider>
    );
}

