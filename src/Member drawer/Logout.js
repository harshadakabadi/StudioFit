import { Text } from 'react-native'
import React, { useLayoutEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { NativeBaseProvider,Center,View } from 'native-base';


const Logout = () => {
    const navigation = useNavigation();
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);
  return (
    <NativeBaseProvider>
      <Center>
        <View mt={300}>
          <Text fontSize={80} color={"grey.400"}>
            Logout Successfully..
          </Text>
        </View>
      </Center>
    </NativeBaseProvider>
  );
}

export default Logout