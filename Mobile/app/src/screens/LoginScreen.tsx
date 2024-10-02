import React, { useState } from 'react';
import { View, Image, StyleSheet, TouchableOpacity, Text  } from 'react-native';
import {TextInput, Button} from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {useNavigation} from "expo-router";

const LoginScreen = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const navigation = useNavigation(); // Hook de navegação

    const handleLogin = () => {
        // @ts-ignore
        navigation.navigate('HomeScreen');
    };

    const goToRegister = () => {
        // @ts-ignore
        navigation.navigate('RegisterScreen');
    };

    return (
        <View style={styles.container}>
            <Image
                source={require('../../../assets/images/partial-react-logo.png')}
                style={styles.image}
            />
            <View style={styles.credenciais}>
                <TextInput
                    mode="outlined"
                    label="Usuário"
                    activeOutlineColor="#158495"
                    onChangeText={text => setUsername(text)}
                    style={styles.input}
                />
                <TextInput
                    mode="outlined"
                    label="Senha"
                    activeOutlineColor="#158495"
                    onChangeText={setPassword}
                    secureTextEntry
                    style={styles.input}
                />
                <Button
                    mode="contained"
                    buttonColor="#158495"
                    onPress={handleLogin}
                    style={styles.button}
                >
                    Entrar
                </Button>

                <TouchableOpacity style={styles.novoUsuario} onPress={goToRegister}>
                    <Icon name="person-add" size={24} color="#158495" />
                    <Text style={styles.newUserText}>Quero criar uma conta </Text>
                </TouchableOpacity>

            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f5f5f5',
    },
    image: {
        width: 150,
        height: 150,
        marginBottom: 30,
    },
    credenciais: {
        width: '80%',
        alignItems: 'center',
    },
    input: {
        width: '100%',
        marginBottom: 20,
    },
    button: {
        width: '100%',
    },
    novoUsuario: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 20,
    },
    newUserText: {
        marginLeft: 10,
        fontSize: 16,
    },
});

export default LoginScreen;
