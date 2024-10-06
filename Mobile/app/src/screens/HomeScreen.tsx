// screens/HomeScreen.tsx
import React, {useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, FlatList} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import Icon from "react-native-vector-icons/MaterialIcons";
import {TextInput} from "react-native-paper";

const HomeScreen: React.FC = () => {
    const navigation = useNavigation();

    const [questionarios, setQuestionarios] = useState([
        { id: '1', nome: 'Questionário 1', descricao: 'Descrição do questionário 1' },
        { id: '2', nome: 'Questionário 2', descricao: 'Descrição do questionário 2' },
        { id: '3', nome: 'Questionário 3', descricao: 'Descrição do questionário 3' },
    ]);

    const renderItem = ({ item }) => (
        <View style={styles.card}>
            <Text style={styles.cardTitle}>{item.nome}</Text>
            <Text style={styles.cardDescription}>{item.descricao}</Text>
        </View>
    );

    const goToNewQuestionnaires= () => {
        navigation.navigate('NewQuestionnaires');
    };

    const [filtro, setFiltro] = useState('');

    // Função para filtrar a lista de questionários pelo nome (fazendo o "like")
    const questionariosFiltrados = questionarios.filter(questionario =>
        questionario.nome.toLowerCase().includes(filtro.toLowerCase()) // Operação de "like" no nome
    );

    return (
        <View style={styles.container}>
            {/* Navbar */}
            <View style={styles.navbar}>
                <TouchableOpacity onPress={() => navigation.openDrawer()}>
                    <Ionicons name="menu" size={28} color="black" />
                </TouchableOpacity>

                <Text style={styles.title}>Home</Text>

                <TouchableOpacity onPress={() => navigation.navigate('ProfileScreen')}>
                    <Ionicons name="person-circle" size={28} color="black" />
                </TouchableOpacity>
            </View>

            <View style={styles.header}>
                <TouchableOpacity style={styles.box}>
                    <Text style={styles.boxTitle}>Questionários</Text>
                    <Text style={styles.boxCount}>{questionarios.length}</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.box}>
                    <Text style={styles.boxTitle}>Respondidos</Text>
                    <Text style={styles.boxCount}>0</Text>
                </TouchableOpacity>
            </View>

            {/* Campo de Input com Ícone de Lupa usando react-native-paper */}
            <TextInput
                label="Filtrar por descrição"
                value={filtro}
                onChangeText={setFiltro} // Atualiza o valor do filtro quando o usuário digita
                mode="outlined" // Define o estilo do TextInput como outlined
                left={<TextInput.Icon name="magnify" />} // Ícone de lupa à esquerda
                style={styles.searchInput}
            />


            {/* FlatList que será atualizada dinamicamente */}
            <FlatList
                data={questionariosFiltrados} // Usando os questionários filtrados
                renderItem={renderItem}
                keyExtractor={item => item.id}
                contentContainerStyle={styles.list}
            />


            <TouchableOpacity style={styles.fab} onPress={goToNewQuestionnaires}>
                <Ionicons name="add" size={24} color="white" />
            </TouchableOpacity>

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
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 16,
    },
    box: {
        flex: 1,
        marginHorizontal: 8,
        padding: 16,
        backgroundColor: '#f0f0f0',
        borderRadius: 8,
        alignItems: 'center',
    },
    boxTitle: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    boxCount: {
        marginTop: 8,
        fontSize: 24,
        color: '#007bff',
    },
    list: {
        paddingVertical: 16,
    },
    card: {
        padding: 16,
        marginVertical: 8,
        backgroundColor: '#e0e0e0',
        borderRadius: 8,
    },
    cardTitle: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    cardDescription: {
        fontSize: 14,
        marginTop: 4,
        color: '#555',
    },

});

export default HomeScreen;
