import React, {useState} from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import * as Clipboard from 'expo-clipboard';

const GeraPass = () => {
    const [pass, setPass] = useState<string>('')


    const generate = () => {
        const chars = '@ABCDEFGHIJKLMNOP%QRSTUVWXYZab$cdefghijklmnopq#rstuvwxyz0123!456789';
        let password = '';
        for (let i = 0; i < 10; i++) {
            const randomIndex = Math.floor(Math.random() * chars.length);
            password += chars[randomIndex];
        }
        setPass(password);
    };

  
    

    const copy = async () => {
        await Clipboard.setStringAsync(pass);
        alert('Password copied!');
    };
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Generate your password</Text>
            <TextInput
            onChangeText={ text => setPass(text)}
            value={pass}
           
            style={styles.input}
            />
            <TouchableOpacity style={styles.btn} onPress={generate}>
            <Text style={styles.text}>Generator Pass</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btn} onPress={copy}>
            <Text style={styles.text}>Copy</Text>
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
        fontWeight: 'bold',
        alignItems: 'center',
        textAlign: 'center'
    },
    btn: {
        backgroundColor: '#DDD',
        width: '70%',
        justifyContent: 'center',
       height: 35, 
       borderRadius: 8,
       marginBottom:10, 
    },
    input: {
        backgroundColor: '#DDD',
        marginBottom: 20,
        width: '90%',
        borderRadius: 8,
        justifyContent: 'center',
        textAlign: 'center'
    },
    title: {
        marginTop: -100,
        marginBottom: 100,
        fontSize:70,
        color: '#DDD'
    }
});

export  {GeraPass};