import React from 'react';
import { View, Text, Button, Image, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

function removeHtmlTags(input) {
  const regex = /<[^>]*>/g;
  return input.replace(regex, '');
}

const TodoDetailScreen = ({ route }) => {
    const navigation = useNavigation();
    const { info } = route.params;
    const handleGoBack = () => {
        navigation.goBack();
      };

    return (
        <View scrollEnabled={true}>
          <Text style={styles.title}>Titre : {info.title_fr}</Text>
          <Text style={styles.date}>Date : {info.daterange_fr}</Text>
          <Text style={styles.phrase}>{info.description_fr}</Text>
        <Text style={styles.description}>Description : {removeHtmlTags(info.longdescription_fr)}</Text>
          <Image source={{ uri: info.image }} style={{ width: 200, height: 200, marginLeft: 95}} />
          <Text style={styles.lieu}>Nom du lieu : {info.location_name}</Text>
          <Text style={styles.adresse}>Adresse : {info.location_address}</Text>

            <Button title="Retour" onPress={handleGoBack} style={styles.button} />
        </View>
    );
};

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
    width: 200,
    height: 200,
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
  date: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000000', // Couleur du texte
    textAlign: 'center',
    marginBottom: 5,
    marginTop: 5,
  },
  phrase: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#003399', // Couleur du texte
    textAlign: 'center',
    marginBottom: 20,
    marginTop: 20,
  },
  description: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#000000', // Couleur du texte
    textAlign: 'center',
    marginBottom: 20,
    marginTop: 20,
    marginLeft: 5,
    marginRight: 5,
  },
  lieu: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#000000', // Couleur du texte
    textAlign: 'center',
    marginBottom: 5,
    marginTop: 5,
  },
  adresse: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#000000', // Couleur du texte
    textAlign: 'center',
    marginBottom: 5,
    marginTop: 5,
  },
});

export default TodoDetailScreen;