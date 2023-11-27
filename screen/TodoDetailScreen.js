import React from 'react';
import { View, Text, Button, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const TodoDetailScreen = ({ route }) => {
    const navigation = useNavigation();
    const { info } = route.params;
    const handleGoBack = () => {
        navigation.goBack();
      };

    return (
        <View>
      <Text>Titre : {info.title_fr}</Text>
      <Text>Date : {info.daterange_fr}</Text>
      <Text>Catch Phrase : {info.description_fr}</Text>
      <Text>Description : {info.longdescription_fr}</Text>
      <Image source={{ uri: info.image }} style={{ width: 200, height: 200 }} />
      <Text>Nom du lieu : {info.location_name}</Text>
      <Text>Adresse : {info.location_address}</Text>

      <Button title="Retour" onPress={handleGoBack} />
    </View>
    );
};

export default TodoDetailScreen;