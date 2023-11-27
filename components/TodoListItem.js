import React from 'react';
import { TouchableOpacity, Text, StyleSheet, Button, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';


const TodoListItem = ({ title, onDelete }) => {
    const navigation = useNavigation();
  
    const handlePress = () => {
      // Naviguer vers la page de détail avec le titre comme paramètre
      navigation.navigate('TodoDetail', { title });
    };
  
    return (
      <View style={styles.container}>
        <TouchableOpacity style={styles.itemButton} onPress={handlePress}>
          <Text style={styles.itemText}>{title}</Text>
        </TouchableOpacity>
        <Button title="Supprimer" onPress={onDelete} />
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