import React, { useEffect, useState } from 'react';
import { FlatList, StyleSheet, View, TextInput, Button } from 'react-native';
import TodoListItem from '../components/TodoListItem';
import { getData } from '../api/events/EventCall';
import { useRoute } from '@react-navigation/native';

export default function TodoListScreen() {

  const [events, setEvents] = useState([]);

  const route = useRoute();
  const postalCode = route.params?.postalCode || '69002';

  const getFirstDayOfMonth = () => {
    const today = new Date();
  const year = today.getFullYear();
  const month = String(today.getMonth() + 1).padStart(2, '0');
  const firstDayOfMonth = `${year}-${month}-01`;
  return firstDayOfMonth;
  };

  useEffect(() => {
    getData(getFirstDayOfMonth(), postalCode)
    .then((res) => {
      setEvents(res);
    })
  }, [postalCode]);


  const renderItem = ({ item }) => (
    <TodoListItem
    info={item}
  />
  );

  const [searchTerm, setSearchTerm] = useState('');

  const filteredEvents = events.filter((event) =>
  event.title_fr.toLowerCase().includes(searchTerm.toLowerCase())
);


  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Rechercher par titre"
        onChangeText={(text) => setSearchTerm(text)}
      />
           
      <FlatList
        data={filteredEvents}
        renderItem={renderItem}
        keyExtractor={(item) => item.uid.toString()}
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
