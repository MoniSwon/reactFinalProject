import React from 'react';
import { FlatList, Pressable, StyleSheet, View, Text, ImageBackground } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function LogoutScreen() {
    const navigation = useNavigation();
  
    const handleLogout = async () => {
      await AsyncStorage.removeItem('userConnected');
      navigation.navigate('Connexion');
    };
  
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Se déconnecter</Text>
        <Pressable style={styles.sendButton} onPress={handleLogout}>
          <Text style={styles.buttonText}>Se déconnecter</Text>
        </Pressable>
      </View>
    );
  };
  
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
    sendButton: {
      height: 40,
      marginTop: 20,
      marginBottom: 20,
      paddingLeft: 20,
        paddingRight: 20,
      backgroundColor: '#003399',
      borderColor: '#003399',
      borderWidth: 1,
      borderRadius: 50,
      justifyContent: 'center',
      alignItems: 'center',
    },
    buttonText: {
        color: '#fff',
        textAlign: 'center',
        fontSize: 18,
    }
  });
  