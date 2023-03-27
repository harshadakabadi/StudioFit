import { View, Text } from 'react-native';
import React from 'react';
import { NativeBaseProvider,HStack,Pressable,Center,Icon } from 'native-base';
import MemberDrawerNavigator from '../Member drawer/MemberDrawerNavigator';

const MemberHomeScreen = () => {
  return (
    <NativeBaseProvider>
      <View style={{ flex: 1 }}>
        <MemberDrawerNavigator/>
      </View>
    </NativeBaseProvider>
  );
};


export default MemberHomeScreen;