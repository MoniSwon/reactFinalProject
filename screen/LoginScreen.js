import { useCallback, useMemo, useState } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { TextInput } from 'react-native-web';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';


export default function LoginScreen() {
  const [nom, setNom] = useState('');
  const [prenom, setPrenom] = useState('');
  const [password, setPassword] = useState('');
  const [passwordError, setPasswordError] = useState(false);

  const navigation = useNavigation();

  const handleLogin = useCallback(async () => {
    if (!nom || !prenom || !password) {
      return alert('Veuillez remplir tous les champs');
    }

    const storedUser = await AsyncStorage.getItem('user');
    const user = JSON.parse(storedUser);

    if (user && user.nom === nom && user.prenom === prenom && user.password === password) {
        AsyncStorage.setItem('userConnected', JSON.stringify({ nom, prenom, password }));
        navigation.navigate('Nos évènements');
    } else {
      setPasswordError(true);
      alert('Informations d\'identification incorrectes');
    }

    //Redirection sur la page events si c'est tout ok
  }, [nom, prenom, password, navigation]);
  

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Connecte-toi !</Text>

      <View style={styles.profileImageContainer}>
        <img src={require('../assets/image/profil_pic.png')} style={styles.profileImage} />
      </View>

      <View style={styles.formContainer}>
        <TextInput style={styles.input} placeholder="Prénom" placeholderTextColor="gray" autoFocus={true} value={prenom} onChangeText={(text) => setPrenom(text)}/>
        <TextInput style={styles.input} placeholder="Nom" placeholderTextColor="gray" autoFocus={true} value={nom} onChangeText={(text) => setNom(text)}/>
        <TextInput style={styles.input} placeholder="Mot de passe" placeholderTextColor="gray" autoFocus={true} secureTextEntry={true} value={password} onChangeText={(text) => setPassword(text)}/>

        <Pressable style={styles.sendButton} title="Envoyer" onPress={handleLogin}>
          <Text>Me connecter</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  profileImageContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  formContainer: {
    width: '100%',
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingLeft: 10,
    borderRadius: 5,
    backgroundColor: 'lightgray'
  },
  inputError: {
    height: 40,
    borderColor: 'red',
    borderWidth: 1,
    marginBottom: 10,
    paddingLeft: 10,
    borderRadius: 5,
    backgroundColor: 'lightgray'
  },
  sendButton: {
    height: 40,
    marginTop: 20,
    backgroundColor: 'white',
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
  }
});

