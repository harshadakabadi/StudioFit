import { Pressable, View, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {
  Button,
  Center,
  NativeBaseProvider,
  Text,
  Icon,
  Input,
} from "native-base";

import { SafeAreaView } from "react-native-safe-area-context";
import { MaterialIcons, MaterialCommunityIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import axios from "axios";

const TrainerLogin = () => {
  const navigation = useNavigation();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [show, setShow] = useState(false);

  const handleLogin = async () => {
    console.log("password:" + password);
    console.log("username:" + username);
    try {
      const response = await fetch(`${global.MyVar}/api/login/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username,
          password,
        }),
      });
      //console.log("reaponse:" + JSON.stringify(response));
      if (response.status === 200) {
        const data = await response.json();
        await AsyncStorage.setItem("user", JSON.stringify(data));
        //console.log("User data stored:", data);
        const userId = JSON.stringify(data.id);
        await AsyncStorage.setItem("userId", userId);
        navigation.navigate("Trainer HomeScreen");
      } else {
        alert("Check your Password or username again!! ");
      }
    } catch (error) {
      console.error("Error catch:", error);
    }
  };

  return (
    <NativeBaseProvider>
      <SafeAreaView flex={1} justifyContent={"center"} alignItems={"center"}>
        <View
          width={"100%"}
          position={"relative"}
          flex={1}
          alignItems={"center"}
          justifyContent={"center"}
        >
          <View width={"100%"}>
            <Text
              mt={70}
              fontSize={42}
              textAlign={"center"}
              fontWeight={"bold"}
              color={"#876fef"}
              opacity={0.9}
            >
              STUDIOFIT
            </Text>
          </View>

          <Text
            fontSize={21}
            textAlign={"center"}
            color={"grey"}
            mb={16}
            fontWeight={"bold"}
          >
            Login to Continue
          </Text>
          <Input
            w={{
              base: "75%",
              md: "25%",
            }}
            alignItems={"center"}
            justifyContent={"center"}
            borderRadius={15}
            InputLeftElement={
              <Icon
                as={<MaterialIcons name="person" />}
                size={5}
                ml="2"
                color="muted.400"
              />
            }
            placeholder="Username"
            fontSize={16}
            value={username}
            textColor="grey"
            onChangeText={(value) => setUsername(value)}
          />
          <Input
            borderRadius={15}
            mt={10}
            w={{
              base: "75%",
              md: "25%",
            }}
            type={show ? "text" : "password"}
            InputRightElement={
              <Pressable onPress={() => setShow(!show)}>
                <Icon
                  as={
                    <MaterialIcons
                      name={show ? "visibility" : "visibility-off"}
                    />
                  }
                  size={5}
                  mr="2"
                  color="muted.400"
                />
              </Pressable>
            }
            placeholder="Password"
            value={password}
            fontSize={16}
            textColor="grey"
            onChangeText={(value) => setPassword(value)}
          />

          <View
            height={55}
            mt={12}
            shadowColor={"#000"}
            shadowOffset={{
              width: 0,
              height: 2,
            }}
            shadowOpacity={0.4}
            shadowRadius={3}
            elevation={5}
          >
            <TouchableOpacity>
              <Center>
                <Button
                  textAlign={"center"}
                  justifyContent={"center"}
                  alignItems={"center"}
                  width={"75%"}
                  height={50}
                  bgColor={"#7d5fff"}
                  mt={10}
                  borderRadius={17}
                  onPress={handleLogin}
                  //onPress={() => navigation.navigate("Member HomeScreen")}
                >
                  <Text fontSize={20} fontWeight={"bold"} color={"#282828"}>
                    Log In
                  </Text>
                </Button>
              </Center>
            </TouchableOpacity>
          </View>
          {/*  <TouchableOpacity>
            <Center mt={78}>
              <Button
                ml={200}
                bgColor={"white.100"}
                borderColor={"black"}
                onPress={() => navigation.navigate("ForgotPassword")}
              >
                <Text color={"black"} textAlign={"center"}>
                  Forgot Password?
                </Text>
              </Button>
            </Center>
          </TouchableOpacity>
          */}
          <Center mt={78}>
            <Button
              bgColor={"white.100"}
              borderColor={"black"}
              onPress={() => navigation.navigate("Member Login")}
            >
              <Text
                color={"black"}
                fontWeight={"bold"}
                textAlign={"center"}
                fontSize={16}
              >
                Member Login
              </Text>
            </Button>
          </Center>
        </View>
      </SafeAreaView>
    </NativeBaseProvider>
  );
};

export default TrainerLogin;
