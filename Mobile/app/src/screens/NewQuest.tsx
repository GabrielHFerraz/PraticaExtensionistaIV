import * as React from 'react';
import {View, StyleSheet, TouchableOpacity} from 'react-native';
import {TextInput, Button, RadioButton, Text, useTheme, IconButton, DefaultTheme} from 'react-native-paper';
import {useNavigation} from "expo-router";
import {Ionicons} from "@expo/vector-icons";
import {useRoute} from "@react-navigation/core";

const NewQuest = () => {
    const navigation = useNavigation();
    const route = useRoute();

    const [description, setDescription] = React.useState('');
    const [questionType, setQuestionType] = React.useState('multipleChoice');

    const SaveQuestionnair = () => {
        console.log('Tipo de pergunta:', questionType);
    };

    const handleRadioPress = (value) => {
        setQuestionType(value);
    };

    const backToNewQuestionnaires = () => {
        navigation.navigate('NewQuestionnaires');
    };

    return (
        <View style={styles.container}>
            {/* Navbar */}
            <View style={styles.navbar}>
                <TouchableOpacity onPress={() => navigation.openDrawer()}>
                    <Ionicons name="menu" size={28} color="black" />
                </TouchableOpacity>

                <Text>Nova pergunta</Text>

                <TouchableOpacity onPress={() => navigation.navigate('ProfileScreen')}>
                    <Ionicons name="person-circle" size={28} color="black" />
                </TouchableOpacity>
            </View>

            {/* Voltar para questionário */}
            <TouchableOpacity style={styles.backButton} onPress={backToNewQuestionnaires}>
                <Ionicons name="arrow-back" size={24} color="black" />
            </TouchableOpacity>

            {/* Tipo de perguntas */}
            <View style={styles.conteudo}>
                <TextInput
                    label="Descrição"
                    value={description}
                    onChangeText={text => setDescription(text)}
                    mode="flat"
                    style={styles.input}
                    textColor='#ffffff'
                    theme={{ colors: { text: '#ffffff', primary: '#ffffff', placeholder: '#ffffff' } }}
                />

                <Text style={styles.label}>Tipo de Pergunta:</Text>

                <RadioButton.Group
                    onValueChange={value => setQuestionType(value)}
                    value={questionType}
                >
                    <TouchableOpacity  onPress={() => handleRadioPress('multipleChoice')} style={styles.radioContainer}>
                        <View style={styles.radioBackground}>
                            <Text style={styles.radioText}>Múltipla Escolha</Text>
                            <RadioButton value="multipleChoice" color="#49454F" />
                        </View>
                    </TouchableOpacity >
                    <TouchableOpacity  onPress={() => handleRadioPress('trueFalse')}  style={styles.radioContainer}>
                        <View style={styles.radioBackground}>
                            <Text style={styles.radioText}>Verdadeiro ou Falso</Text>
                            <RadioButton value="trueFalse" color="#49454F" />
                        </View>
                    </TouchableOpacity>

                </RadioButton.Group>

                <Button
                    mode="contained"
                    onPress={SaveQuestionnair}
                    style={styles.saveButton}
                >
                    Salvar
                </Button>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    conteudo: {
      flex: 1,
        padding:30
    },
    container: {
        flex: 1,
    },
    label: {
        fontSize: 16,
        marginBottom: 10,
    },
    radioContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 8,
    },
    saveButton: {
        marginTop: 24,
        alignSelf: 'flex-end',
        backgroundColor: '#62AEBA'
    },
    iconButton: {
        position: 'absolute',
        top: 20,
        left: 16,
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
    backButton: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 10,
        borderRadius: 5,
    },
    input: {
        width: '100%',
        marginBottom: 30,
        backgroundColor: '#62AEBA',
        color: '#ffffff',
    },
    radioBackground: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'rgba(98,174,186,0.4)',
        borderRadius: 16,
        padding: 8,
        width: '100%',
        justifyContent: 'space-between',
    },
    radioText: {
        color: '#49454F',
        fontSize: 16,
    },
});

export default NewQuest;
