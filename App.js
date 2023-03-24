import { View, Text } from 'react-native'
import React from 'react'
import Login from './src/screens/Login';
import HomeScreen from './src/screens/HomeScreen';
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Splash from './src/screens/Splash';
import Home from './src/bottom/Home';
import Contact from './src/bottom/Contact';
import { MaterialIcons, MaterialCommunityIcons } from "@expo/vector-icons";
import { Icon } from 'native-base';
import ForgotPassword from './src/screens/ForgotPassword';
import Profile from './src/drawer/Profile';
import LoginSplash from './src/screens/LoginSplash';
import Payment from './src/drawer/Payment';
import BottomDrawer from './src/drawer/BottomDrawer';


const Stack = createNativeStackNavigator();
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Splash"
          component={Splash}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Login"
          component={Login}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="HomeScreen"
          component={HomeScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ headerShown: true }}
        />
        <Stack.Screen
          name="Contact"
          component={Contact}
          options={{ headerShown: true }}
        />
        <Stack.Screen
          name="ForgotPassword"
          component={ForgotPassword}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Profile"
          component={Profile}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="LoginSplash"
          component={LoginSplash}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Payment"
          component={Payment}
          options={{ headerShown: true }}
        />
        <Stack.Screen
          name="BottomDrawer"
          component={BottomDrawer}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App