import React from 'react';
import { FlatList, Pressable, StyleSheet, View, Text, ImageBackground } from 'react-native';
import { useNavigation } from '@react-navigation/native';


export default function DashboardScreen() {

    const navigation = useNavigation();

    const postalCodes = [
        { id: '1', postalCode: '69001', title: 'Lyon 1er' },
        { id: '2', postalCode: '69002', title: 'Lyon 2ème' },
        { id: '3', postalCode: '69003', title: 'Lyon 3ème' },
        { id: '4', postalCode: '69004', title: 'Lyon 4ème' },
        { id: '5', postalCode: '69005', title: 'Lyon 5ème' },
        { id: '6', postalCode: '69006', title: 'Lyon 6ème' },
        { id: '7', postalCode: '69007', title: 'Lyon 7ème' },
        { id: '8', postalCode: '69008', title: 'Lyon 8ème' },
        { id: '9', postalCode: '69009', title: 'Lyon 9ème' },
    ];


    const handleButtonPress = (postalCode) => {
        // Action à effectuer lorsque le bouton est pressé
        navigation.navigate('TodoList', { postalCode });
    };

    const renderItem = ({ item }) => (
        <Pressable
            style={styles.button}
            onPress={() => handleButtonPress(item.postalCode)}>
            <Text style={styles.buttonText}>{item.title}</Text>
        </Pressable>
    );

    return (
        <ImageBackground
        source={require('../assets/image/lyonaccueil.jpg')}
        style={styles.image}
    >
        <View style={styles.container}>
            <Text style={styles.title}>L'Agenda Culturel<br/>Des Quartiers de Lyon</Text>
            <FlatList
                data={postalCodes}
                renderItem={renderItem}
                keyExtractor={(item) => item.id}
                contentContainerStyle={styles.flatList}
                numColumns={1} // 3 colonnes pour afficher les boutons
            />
        </View>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    flatList: {
        justifyContent: 'center',
    },
    button: {
        backgroundColor: '#003399',
        paddingTop: 15,
        paddingBottom: 15,
        margin: 5,
        borderRadius: 5,
        width: 300,
    },
    buttonText: {
        color: '#fff',
        textAlign: 'center',
        fontSize: 18,
    },
    image: {
        flex: 1,
        resizeMode: 'cover',
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontSize: 28,
        fontWeight: 'bold',
        color: '#003399', // Couleur du texte
        textAlign: 'center',
        marginBottom: 20,
        marginTop: 20,
      },
});
