
import React from 'react'
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Splash from './src/screens/Splash';
import Home from './src/bottom/Home';
import Contact from './src/bottom/Contact';
import ForgotPassword from './src/screens/ForgotPassword';
import MemberLogin from './src/screens/MemberLogin';
import TrainerLogin from './src/screens/TrainerLogin';
import MemberHomeScreen from './src/screens/MemberHomeScreen';
import TrainerHomeScreen from './src/screens/TrainerHomeScreen';
import TrainerProfile from './src/TrainerDrawer/TrainerProfile';
import MemberProfile from './src/Member drawer/MemberProfile';
import Payment from './src/Member drawer/Payment';
import TrainerBottomDrawer from './src/TrainerDrawer/TrainerBottomDrawer';
import MemberBottomDrawer from './src/Member drawer/MemberBottomDrawer';


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
          name="Member Login"
          component={MemberLogin}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Trainer Login"
          component={TrainerLogin}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Member HomeScreen"
          component={MemberHomeScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Trainer HomeScreen"
          component={TrainerHomeScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ headerShown: true }}
        />
        <Stack.Screen
          name="Contact Us"
          component={Contact}
          options={{ headerShown: true }}
        />
        <Stack.Screen
          name="ForgotPassword"
          component={ForgotPassword}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Trainer Profile"
          component={TrainerProfile}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Member Profile"
          component={MemberProfile}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Payment"
          component={Payment}
          options={{ headerShown: true }}
        />
        <Stack.Screen
          name="Trainer BottomDrawer"
          component={TrainerBottomDrawer}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Member BottomDrawer"
          component={MemberBottomDrawer}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App