import React from 'react';
import { View, Text, StyleSheet, ImageBackground, Image, TouchableOpacity } from 'react-native';

const Home = () => {
    return (
        <View style={styles.container}>
            <ImageBackground
            style={styles.img}
            source={require('../../images/logo.png')}
            />
            <TouchableOpacity style={styles.btn} >
                <Text style={styles.text}>GO</Text>
            </TouchableOpacity>

           
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