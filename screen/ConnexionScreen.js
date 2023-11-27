// ConnexionScreen.js
import React, { useState } from 'react';
import { View, Text, TextInput, Pressable, StyleSheet } from 'react-native';

const ConnexionScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    // Ajoutez ici la logique de connexion avec votre serveur
    // Utilisez fetch ou une bibliothèque comme axios pour interroger le serveur
    // N'oubliez pas de gérer les erreurs et de stocker les informations d'authentification si la connexion réussit
  };

  const handleRegister = () => {
    // Naviguez vers la page d'inscription ou ajoutez votre propre logique d'inscription
    navigation.navigate('Inscription');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Connexion</Text>

      <TextInput
        style={styles.input}
        placeholder="Email"
        onChangeText={(text) => setEmail(text)}
        value={email}
      />

      <TextInput
        style={styles.input}
        placeholder="Mot de passe"
        secureTextEntry={true}
        onChangeText={(text) => setPassword(text)}
        value={password}
      />

      <Pressable style={styles.button} onPress={handleLogin}>
        <Text>Se connecter</Text>
      </Pressable>

      <Pressable style={styles.button} onPress={handleRegister}>
        <Text>Créer un compte</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingLeft: 10,
    borderRadius: 5,
    width: '80%',
  },
  button: {
    backgroundColor: 'lightblue',
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
  },
});

export default ConnexionScreen;
