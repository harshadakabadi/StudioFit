import { Pressable, View, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import {
  Box,
  Button,
  Center,
  NativeBaseProvider,
  Text,
  Input,
  Icon,
} from "native-base";
import { SafeAreaView } from "react-native-safe-area-context";
import { MaterialIcons, MaterialCommunityIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import axios from "axios";

const baseUrl = "https://reqres.in";
const MemberLogin = () => {
  const navigation = useNavigation();
  const [show, setShow] = React.useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const onChangeEmailHandler = (email) => {
    setEmail(email);
  };
  const onChangePasswordHandler = (password) => {
    setPassword(password);
  };

  const onLoginFormHandler = async (event) => {
    if (!email.trim() || !password.trim()) {
      alert("Name or Email is invalid");
      return;
    }
    setIsLoading(true);
    try {
      const response = await axios.post(`${baseUrl}/api/users`, {
        email,
        password,
      });
      if (response.status === 201) {
        alert(` You have created: ${JSON.stringify(response.data)}`);
        setIsLoading(false);
        setEmail("");
        setPassword("");
      } else {
        throw new Error("An error has occurred");
      }
    } catch (error) {
      alert("An error has occurred");
      setIsLoading(false);
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
              fontSize={42}
              textAlign={"center"}
              fontWeight={"bold"}
              color={"#7d5fff"}
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
            Member Login 
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
            placeholder="Email"
            value={email}
            editable={!isLoading}
            onChangeText={onChangeEmailHandler}
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
            editable={!isLoading}
            onChangeText={onChangePasswordHandler}
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
                  mt={10}
                  borderRadius={17}
                  onPressOut={onLoginFormHandler}
                  disabled={isLoading}
                  onPress={() => navigation.navigate("Member HomeScreen")}
                >
                  <Text>Log In</Text>
                </Button>
              </Center>
            </TouchableOpacity>
          </View>
          <TouchableOpacity>
            <Center mt={78}>
              <Button
                ml={200}
                bgColor={"white.100"}
                borderColor={"black"}
                onPress={() => navigation.navigate("Forgot Password")}
              >
                <Text color={"black"} textAlign={"center"}>
                  Forgot Password?
                </Text>
              </Button>
            </Center>
          </TouchableOpacity>
          <TouchableOpacity>
            <Center mt={78}>
              <Button
                bgColor={"white.100"}
                borderColor={"black"}
                onPress={() => navigation.navigate("Trainer Login")}
              >
                <Text color={"black"} textAlign={"center"} >
                  Trainer Login 
                </Text>
              </Button>
            </Center>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </NativeBaseProvider>
  );
};

export default MemberLogin;
