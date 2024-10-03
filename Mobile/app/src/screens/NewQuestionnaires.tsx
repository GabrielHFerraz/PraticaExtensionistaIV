// screens/HomeScreen.tsx
import React, {useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, FlatList} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import {TextInput} from "react-native-paper";

const NewQuestionnaires: React.FC = () => {
    const [titulo, setTitulo] = useState('');
    const [descricao, setDescricao] = useState('');
    const navigation = useNavigation();

    const questions = [
        { id: '1', question: 'What is your name?' },
        { id: '2', question: 'How old are you?' },
        { id: '3', question: 'What is your favorite color?' },
        { id: '4', question: 'Where do you live?' },
    ];


    const backToHomeScreen = () => {
        navigation.goBack();
    };

    const goToNewQuest = () => {
        navigation.goBack();
    };

    return (
        <View style={styles.container}>
            <View style={styles.navbar}>
                <TouchableOpacity onPress={() => navigation.openDrawer()}>
                    <Ionicons name="menu" size={28} color="black" />
                </TouchableOpacity>

                <Text style={styles.title}>Novo Questionário</Text>

                <TouchableOpacity onPress={() => navigation.navigate('ProfileScreen')}>
                    <Ionicons name="person-circle" size={28} color="black" />
                </TouchableOpacity>
            </View>

            <TouchableOpacity style={styles.backButton} onPress={backToHomeScreen}>
                <Ionicons name="arrow-back" size={24} color="black" />
            </TouchableOpacity>

            <View style={styles.conteudo}>
                <TextInput
                    mode="flat"
                    label="Título"
                    onChangeText={text => setTitulo(text)}
                    style={styles.input}
                    textColor='#ffffff'
                    theme={{ colors: { text: '#ffffff', primary: '#ffffff', placeholder: '#ffffff' } }}
                />
                <TextInput
                    mode="flat"
                    label="Descrição"
                    onChangeText={text => setDescricao(text)}
                    style={styles.input}
                    textColor='#ffffff'
                    theme={{ colors: { text: '#ffffff', primary: '#ffffff', placeholder: '#ffffff' } }}
                />
                <Text style={styles.title} >Perguntas</Text>

                <FlatList
                    data={questions}
                    keyExtractor={(item) => item.id}
                    renderItem={({ item }) => (
                        <View style={styles.questionContainer}>
                            <Text style={styles.questionText}>{item.question}</Text>
                        </View>
                    )}
                />
            </View>
            <TouchableOpacity style={styles.fab} onPress={goToNewQuest}>
                <Ionicons name="add" size={24} color="white" />
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
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
        fontSize: 15,
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
    backButton: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 10,
        borderRadius: 5,
    },
    conteudo: {
        flex:1,
        padding: 30
    },
    input: {
        width: '100%',
        marginBottom:10,
        backgroundColor: '#62AEBA',
        color: '#ffffff'
    },
    questionContainer: {
        padding: 15,
        backgroundColor: 'rgba(166,218,226,0.4)',
        marginBottom: 5,
        borderRadius: 15,
        borderColor: '#62AEBA',
        borderStyle: 'solid',
        borderWidth: 1
    },
    questionText: {
        fontSize: 18,
    },
});

export default NewQuestionnaires;
