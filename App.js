import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import TodoListScreen from './screen/TodoListScreen';
import TodoDetailScreen from './screen/TodoDetailScreen';
import InscriptionScreen from './screen/InscriptionScreen';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const TodoListStack = () => (
  <Stack.Navigator
  screenOptions={{
    headerShown: false
  }}>
    <Stack.Screen name="TodoList" component={TodoListScreen} options={{ headerShown: false }} />
    <Stack.Screen name="TodoDetail" component={TodoDetailScreen} options={{ headerShown: false }} />
  </Stack.Navigator>
);

const InscriptionStack = () => (
  <Stack.Navigator
  screenOptions={{
    headerShown: false
  }}>
    <Stack.Screen name="Inscription" component={InscriptionScreen} />
  </Stack.Navigator>
);


export default function App() {
  return (
  <NavigationContainer>
      <Tab.Navigator
       initialRouteName="Inscription"
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color, size }) => {
            let iconName;

            if (route.name === 'ToDoList') {
              iconName = 'format-list-bulleted';
            } else if (route.name === 'Inscription') {
              iconName = 'account';
            }

            // You can return any component that you like here!
            return <MaterialCommunityIcons name={iconName} size={size} color={color} />;
          },
        })}
      >
        <Tab.Screen name="ToDoList" component={TodoListStack} />
        <Tab.Screen name="Inscription" component={InscriptionStack} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}