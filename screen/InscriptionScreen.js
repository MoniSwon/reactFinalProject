import AsyncStorage from '@react-native-async-storage/async-storage';
import { useCallback, useMemo, useState } from 'react';
import { Pressable, StyleSheet, Text, View, Image } from 'react-native';
import { TextInput } from 'react-native-web';
import { useNavigation } from '@react-navigation/native';


export default function InscriptionScreen() {
  const [nom, setNom] = useState('');
  const [prenom, setPrenom] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');
  const [passwordError, setPasswordError] = useState(false);
  const passwordMismatch = useMemo(() => password !== passwordConfirm, [password, passwordConfirm]);

  const navigation = useNavigation();
  
  const handleRegistration = useCallback(() => {
    if (password !== passwordConfirm) {
      setPasswordError(true);
      return alert('Les mots de passe ne correspondent pas');
    }

    if (!nom || !prenom || !password || !passwordConfirm) {
      return alert('Veuillez remplir tous les champs');
    }

    if (password.length < 3) {
      setPasswordError(true);
      return alert('Le mot de passe doit contenir au moins 3 caractères');
    }

    AsyncStorage.setItem('user', JSON.stringify({ nom, prenom, password }));

    setPasswordError(false);

    navigation.navigate('Connexion');

  }, [nom, prenom, password, passwordConfirm]);
  

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Inscription</Text>

      <View style={styles.profileImageContainer}>
        <Image src={require('../assets/image/profil_pic.png')} style={styles.profileImage} />
      </View>

      <View style={styles.formContainer}>
        <TextInput style={styles.input} placeholder="Prénom" placeholderTextColor="#003399" autoFocus={true} value={prenom} onChangeText={(text) => setPrenom(text)}/>
        <TextInput style={styles.input} placeholder="Nom" placeholderTextColor="#003399" autoFocus={true} value={nom} onChangeText={(text) => setNom(text)}/>
        <TextInput style={passwordError || passwordMismatch ? styles.inputError : styles.input} placeholder="Mot de passe" placeholderTextColor="#003399" autoFocus={true} secureTextEntry={true} value={password} onChangeText={(text) => setPassword(text)}/>
        <TextInput style={passwordError || passwordMismatch ? styles.inputError : styles.input} placeholder="Confirmer le mot de passe" placeholderTextColor="#003399" autoFocus={true} secureTextEntry={true} value={passwordConfirm} onChangeText={(text) => setPasswordConfirm(text)}/>

        <Pressable style={styles.sendButton} title="Envoyer" onPress={handleRegistration}>
          <Text style={styles.buttonText}>Envoyer</Text>
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
    borderColor: '#003399',
    borderWidth: 1,
    marginBottom: 10,
    paddingLeft: 10,
    borderRadius: 5,
    backgroundColor: '#FFFFFF'
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
    backgroundColor: '#003399',
    borderColor: '#003399',
    borderWidth: 1,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 18,
  },
});

