import React from 'react';
import { Text, StyleSheet, Button, View, Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';


const TodoListItem = ({ info }) => {
    const navigation = useNavigation();
  
    const handlePress = () => {
      // Naviguer vers la page de détail avec le titre comme paramètre
      navigation.navigate('TodoDetail', { info });
    };
  
    return (
      <View style={styles.container}>
        <Pressable style={styles.itemButton} onPress={handlePress}>
          <Text style={styles.itemText}>{info.title_fr}</Text>
        </Pressable>
      </View>
    );
  }

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 10,
      },
      itemButton: {
        flex: 1,
        padding: 10,
        height: 50,
        alignContent: 'center',
        justifyContent: 'center',
        borderWidth: 1,
        borderColor: 'gray',
        backgroundColor: 'gray',
      },
      itemText: {
        textAlign: 'center',
      },
});

export default TodoListItem;