import { View } from "react-native";
import React, { useEffect } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Center, NativeBaseProvider, Box, Container, Text } from "native-base";
import HomeScreen from "./HomeScreen";

const LoginSplash = ({ navigation }) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate("HomeScreen");
    }, 100);
  }, []);
  return (
    <NativeBaseProvider>
      <SafeAreaView>
        <Center>
          <Box mt={350}>
            <Text
              fontSize={20}
              textAlign={"center"}
              fontWeight={"bold"}
              opacity={0.9}
            >
              Login Successfully....
            </Text>
          </Box>
        </Center>
      </SafeAreaView>
    </NativeBaseProvider>
  );
};

export default LoginSplash;
