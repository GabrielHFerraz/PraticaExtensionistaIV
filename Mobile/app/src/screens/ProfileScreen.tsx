// screens/ProfileScreen.tsx
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const ProfileScreen: React.FC = () => {
    const navigation = useNavigation();

    const handleLogout = () => {
        // @ts-ignore
        navigation.navigate('HomeScreen'); // Redireciona para a tela inicial após o logout
    };

    return (
        <View style={styles.container}>
            <View style={styles.avatarContainer}>
                {/* Ícone de Avatar */}
                <Ionicons name="person-circle" size={100} color="black" />
            </View>

            {/* Nome do usuário */}
            <Text style={styles.userName}>John Doe</Text>

            {/* Informações adicionais do usuário */}
            <Text style={styles.info}>Email: johndoe@example.com</Text>

            {/* Botão de logout */}
            <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
                <Text style={styles.logoutText}>Logout</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f8f8f8',
    },
    avatarContainer: {
        marginBottom: 20,
    },
    userName: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    info: {
        fontSize: 16,
        color: '#555',
        marginBottom: 30,
    },
    logoutButton: {
        backgroundColor: '#ff5c5c',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 5,
    },
    logoutText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },
});

export default ProfileScreen;
