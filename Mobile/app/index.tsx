import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './src/screens/LoginScreen'; // Suponha que a tela de login está em `screens/LoginScreen.tsx`
import RegisterScreen from './src/screens/RegisterScreen'; // Suponha que a tela de cadastro está em `screens/RegisterScreen.tsx`

const Stack = createStackNavigator();

const App: React.FC = () => {
  return (
      <NavigationContainer independent={true}>
        <Stack.Navigator initialRouteName="LoginScreen">
          <Stack.Screen
              name="LoginScreen"
              component={LoginScreen}
              options={{ title: 'Login', headerShown:false}}

          />
          <Stack.Screen
              name="RegisterScreen"
              component={RegisterScreen}
              options={{ title: 'Cadastro' }}
          />
        </Stack.Navigator>
      </NavigationContainer>
  );
};

export default App;
