import React from 'react';
import { View, Text, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const TodoDetailScreen = ({ route }) => {
    const navigation = useNavigation();
    const { title } = route.params;
    const handleGoBack = () => {
        navigation.goBack();
      };

    return (
        <View>
      <Text>Détails de la tâche : {title}</Text>
      <Button title="Retour" onPress={handleGoBack} />
    </View>
    );
};

export default TodoDetailScreen;