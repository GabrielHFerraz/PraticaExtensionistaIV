// screens/HomeScreen.tsx
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const HomeScreen: React.FC = () => {
    const navigation = useNavigation();

    const goToNewQuestionnaires= () => {
        navigation.navigate('NewQuestionnaires');
    };

    return (
        <View style={styles.container}>
            <View style={styles.navbar}>
                <TouchableOpacity onPress={() => navigation.openDrawer()}>
                    <Ionicons name="menu" size={28} color="black" />
                </TouchableOpacity>

                <Text style={styles.title}>Home</Text>

                <TouchableOpacity onPress={() => navigation.navigate('ProfileScreen')}>
                    <Ionicons name="person-circle" size={28} color="black" />
                </TouchableOpacity>
            </View>

            <TouchableOpacity style={styles.fab} onPress={goToNewQuestionnaires}>
                <Ionicons name="add" size={24} color="white" />
            </TouchableOpacity>

            <Text>Welcome to Home Screen!</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    navbar: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: 50,
        marginBottom: 20,
        backgroundColor: '#FBFBFB',
        padding: 10

    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    fab: {
        position: 'absolute',
        bottom: 30,
        right: 30,
        backgroundColor: '#158495',
        width: 60,
        height: 60,
        borderRadius: 30,
        justifyContent: 'center',
        alignItems: 'center',
        elevation: 5,
    },
});

export default HomeScreen;
