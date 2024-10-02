import React, { useState } from 'react';
import { View, TextInput, Button, Image, StyleSheet, Alert, TouchableOpacity } from 'react-native';

const RegisterScreen= () => {

    return (
        <View style={styles.container}>
            <TextInput
                style={styles.input}
                placeholder="Login"
            />
            <TextInput
                style={styles.input}
                placeholder="Senha"
                secureTextEntry
            />
            <Button title="Entrar"  />

        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    },
    logo: {
        width: 150,
        height: 150,
        marginBottom: 30,
    },
    input: {
        width: '100%',
        padding: 10,
        marginBottom: 15,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
    },
    registerIcon: {
        marginTop: 20,
    },
});

export default RegisterScreen;
