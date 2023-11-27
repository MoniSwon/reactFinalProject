import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import TodoListScreen from './screen/TodoListScreen';
import TodoDetailScreen from './screen/TodoDetailScreen';
import InscriptionScreen from './screen/InscriptionScreen'
import DashboardScreen from './screen/DashboardScreen';
import LoginScreen from './screen/LoginScreen';
import LogoutScreen from './screen/LogoutScreen';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';


const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const TodoListStack = () => (
  <Stack.Navigator
    screenOptions={{
      headerShown: false
    }}>
    <Stack.Screen name="Accueil" component={DashboardScreen} options={{ headerShown: false }} />
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

const LoginStack = () => (
  <Stack.Navigator
    screenOptions={{
      headerShown: false
    }}>
    <Stack.Screen name="Login" component={LoginScreen} />
  </Stack.Navigator>
);


export default function App() {
  const [login, setLogin] = useState(false);
  
  useEffect(() => {
    // Check for stored user information in AsyncStorage
    const checkLoginStatus = async () => {
      const storedUser = await AsyncStorage.getItem('userConnected');
      if (storedUser) {
        setLogin(true);
      } else {
        setLogin(false);
      }
    };

    checkLoginStatus();
  }, []);

  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Inscription"
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color, size }) => {
            let iconName;

            if (route.name === 'Nos évènements') {
              iconName = 'auto-fix';
            } else if (route.name === 'Inscription') {
              iconName = 'account';
            } else if (route.name === 'Connexion') {
              iconName = 'account-arrow-right';
            }  else if (route.name === 'Deconnexion') { // Nouveau écran de déconnexion
              iconName = 'logout';
            }

            // You can return any component that you like here!
            return <MaterialCommunityIcons name={iconName} size={size} color={color} />;
          },
        })}
      >
        {login ? (
          <>
        <Tab.Screen name="Nos évènements" component={TodoListStack} />
        <Tab.Screen name="Deconnexion" component={LogoutScreen} />
        </>
        ) : (
          <>
            <Tab.Screen name="Inscription" component={InscriptionStack} />
            <Tab.Screen name="Connexion" component={LoginStack} />
          </>
        )}



      </Tab.Navigator>
    </NavigationContainer>
  );
}