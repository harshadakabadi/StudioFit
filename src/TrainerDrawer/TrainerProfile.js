import { View,Prompt } from 'react-native'
import React from 'react'
import {
  NativeBaseProvider,
  VStack,
  Box,
  Image,
  Center,
  Text,
  HStack,
  Icon
} from "native-base";
import { SafeAreaView } from 'react-native-safe-area-context';
import {
  MaterialIcons,
  MaterialCommunityIcons,
  Foundation,
} from "@expo/vector-icons";
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';

const TrainerProfile = () => {
  return (
    <NativeBaseProvider>
      <SafeAreaView></SafeAreaView>
    </NativeBaseProvider>
  );
};

export default TrainerProfile;