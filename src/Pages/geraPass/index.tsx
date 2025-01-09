import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { StatusBar } from 'expo-status-bar';

const GeraPass = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>GeraPass Page</Text>
            <StatusBar style="auto" />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
    },
    text: {
        fontSize: 20,
        fontWeight: 'bold',
    },
});

export  {GeraPass};