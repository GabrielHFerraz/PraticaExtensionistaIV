// App.tsx
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeScreen from "@/app/src/screens/HomeScreen";
import ProfileScreen from "@/app/src/screens/ProfileScreen";
import Sidebar from "@/app/src/components/Sidebar";
import LoginScreen from "@/app/src/screens/LoginScreen";
import RegisterScreen from "@/app/src/screens/RegisterScreen";
import NewQuestionnaires from "@/app/src/screens/NewQuestionnaires";

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

// Stack Navigator para Home
const StackNav = () => (
    <Stack.Navigator>
        <Stack.Screen name="Login" component={LoginScreen} options={{ title: 'Login', headerShown: false}} />
        <Stack.Screen name="HomeScreen" component={HomeScreen} options={{ title: 'Home', headerShown: false}} />
        <Stack.Screen name="RegisterScreen" component={RegisterScreen} options={{ title: 'Cadastro', headerStyle: { height: 80 } }} />
        <Stack.Screen name="ProfileScreen" component={ProfileScreen} options={{ title: 'Profile', headerStyle: { height: 80 }}} />
        <Stack.Screen name="NewQuestionnaires" component={NewQuestionnaires} options={{ title: 'Novo Questionário', headerStyle: { height: 80 },  headerShown: false}} />
    </Stack.Navigator>
);

// Drawer Navigator com os Stack Navigators dentro
const DrawerNavigator = () => (
    <Drawer.Navigator drawerContent={(props) => <Sidebar {...props} />}
                      initialRouteName="HomeStack">
        <Drawer.Screen name="HomeStack" component={StackNav} options={{ title: 'Home', headerShown: false }} />
    </Drawer.Navigator>
);

const App: React.FC = () => {
    return (
        <NavigationContainer independent={true}>
            <DrawerNavigator />
        </NavigationContainer>
    );
};

export default App;
