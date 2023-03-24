import { View, Text } from 'react-native';
import React from 'react';
import DrawerNavigator from '../drawer/DrawerNavigator';
import { NativeBaseProvider,HStack,Pressable,Center,Icon } from 'native-base';

const HomeScreen = () => {
  return (
    <NativeBaseProvider>
      <View style={{ flex: 1 }}>
        <DrawerNavigator/>
      </View>
    </NativeBaseProvider>
  );
};


export default HomeScreen