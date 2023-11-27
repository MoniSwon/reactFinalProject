import React, { useState } from 'react';
import { FlatList, StyleSheet, View, TextInput, Button } from 'react-native';
import TodoListItem from '../components/TodoListItem';

export default function TodoListScreen() {
  const [todos, setTodos] = useState([
    { id: 1, title: 'Todo 1' },
    { id: 2, title: 'Todo 2' },
  ]);

  const [newTodoTitle, setNewTodoTitle] = useState('');
  const [isInputVisible, setIsInputVisible] = useState(false);

  const handleDeleteTodo = (id) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  };

  const handleAddTodo = () => {
    if (newTodoTitle.trim() !== '') {
      setTodos((prevTodos) => [
        ...prevTodos,
        { id: prevTodos.length + 1, title: newTodoTitle },
      ]);
      setNewTodoTitle('');
      setIsInputVisible(false);
    }
  };


  const renderItem = ({ item }) => (
    <TodoListItem
      title={item.title}
      onDelete={() => handleDeleteTodo(item.id)}
    />
  );

  const [searchTerm, setSearchTerm] = useState('');

  const filteredTodos = todos.filter((todo) =>
    todo.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Rechercher par titre"
        onChangeText={(text) => setSearchTerm(text)}
      />
      {isInputVisible && (
        <TextInput
          style={styles.input}
          placeholder="Nom de la tâche"
          onChangeText={(text) => setNewTodoTitle(text)}
          value={newTodoTitle}
        />
      )}
      <Button
        title={isInputVisible ? 'Ajouter la tâche' : 'Nouvelle tâche'}
        onPress={() => {
          if (isInputVisible) {
            handleAddTodo();
          } else {
            setIsInputVisible(!isInputVisible);
            setNewTodoTitle('');
          }
        }}
      />
      {isInputVisible && (
        <Button title="Annuler" onPress={() => setIsInputVisible(false)} />
      )}
      <FlatList
        data={filteredTodos}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={styles.flatList}
        scrollEnabled={true}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  flatList: {
    justifyContent: 'center',
    padding: 10,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    padding: 10,
  },
});
