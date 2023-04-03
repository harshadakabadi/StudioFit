import { View, Text } from 'react-native';
import React from 'react';
import { NativeBaseProvider,HStack,Pressable,Center,Icon } from 'native-base';
import MemberDrawerNavigator from '../Member drawer/MemberDrawerNavigator';
import MemberBottomDrawer from '../Member drawer/MemberBottomDrawer';

const MemberHomeScreen = () => {
  return (
    <NativeBaseProvider>
      <View style={{ flex: 1 }}>
        <MemberDrawerNavigator />
        <MemberBottomDrawer/>
      </View>
    </NativeBaseProvider>
  );
};


export default MemberHomeScreen;