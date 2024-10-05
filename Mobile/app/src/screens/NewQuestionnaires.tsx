// screens/HomeScreen.tsx
import React, {useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, FlatList} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import {Button, TextInput} from "react-native-paper";

const NewQuestionnaires: React.FC = () => {
    const [titulo, setTitulo] = useState('');
    const [descricao, setDescricao] = useState('');
    const navigation = useNavigation();

    const questions = [
        { id: '1', description: 'Qual é a sua cor favorita?', type: 'multipleChoice' },
        { id: '2', description: 'O sol é quente?', type: 'trueFalse' },
    ];

    const handleSave = () => {
        console.log('Tipo de pergunta:', questionType);
    };

    const handlePress = ({item}: { item: any }) => {
        navigation.navigate('NewQuest', {
            description: item.description,
            questionType: item.type,
        });
    };

    const renderItem = ({ item }) => (
        <TouchableOpacity onPress={() => handlePress({item: item})} style={styles.itemList}>
            <Text style={styles.itemText}>{item.description}</Text>
        </TouchableOpacity>
    );

    const backToHomeScreen = () => {
        navigation.goBack();
    };

    const goToNewQuest = () => {
        // @ts-ignore
        navigation.navigate('NewQuest');
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

                {/* Perguntas do questionário */}
                <View >
                    <FlatList
                        data={questions}
                        keyExtractor={(item) => item.id}
                        renderItem={renderItem}
                    />
                </View>

                <Button
                    mode="contained"
                    onPress={handleSave}
                    style={styles.saveButton}
                >
                    Salvar
                </Button>

            </View>

            {/* Adicionar uma nova pergunta */}
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

    itemList: {
        backgroundColor: 'rgba(98,174,186,0.4)',
        padding: 16,
        borderRadius: 8,
        marginVertical: 2,
        borderStyle:'solid',
        borderWidth: 1,
        borderColor: '#62AEBA'
    },
    itemText: {
        color: '#49454F',
        fontSize: 16,
    },
    saveButton: {
        marginTop: 24,
        alignSelf: 'flex-end',
        backgroundColor: '#62AEBA'
    },
});

export default NewQuestionnaires;
