import { View, Text } from 'react-native';
import React from 'react';
import { NativeBaseProvider} from 'native-base';
import TrainerDrawerNavigator from '../TrainerDrawer/TrainerDrawerNavigator';

const TrainerHomeScreen = () => {
  return (
    <NativeBaseProvider>
      <View style={{ flex: 1 }}>
        <TrainerDrawerNavigator/>
      </View>
    </NativeBaseProvider>
  );
};


export default TrainerHomeScreen;