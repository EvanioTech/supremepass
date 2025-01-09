import React from 'react';
import { View, Text, StyleSheet, ImageBackground, Image, TouchableOpacity } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import {useNavigation} from '@react-navigation/native';


const Home = () => {
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <ImageBackground
            style={styles.img}
            source={require('../../../images/logo.png')}
            />
            <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate('GeraPass')} >
                <Text style={styles.text}>GO</Text>
            </TouchableOpacity>
            <StatusBar style="light" />

           
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#1d2437',
    },
    text: {
        fontSize: 20,
        color: '#333',
        textAlign: 'center'
    },
    img: {
        width: '100%',
        height: 500
    },
    btn: {
        backgroundColor: '#DDD',
        width: '80%',
        justifyContent: 'center',
        textAlign: 'center',
        borderRadius: 5
    }
});

export  {Home};