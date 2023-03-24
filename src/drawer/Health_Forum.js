import { View } from "react-native";
import React, { useLayoutEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { EvilIcons } from "@expo/vector-icons"; 
import {
  Select,
  Box,
  Center,
  CheckIcon,
  Text,
  TextArea,
  Button,
  VStack,
  Divider,
  Heading,
  Input,
  Icon,
  Container,
  Header,
  Content,
  Card,
  NativeBaseProvider
} from "native-base";
import { ScrollView } from "react-native-gesture-handler";

const  Health_Forum = () => {
  const navigation = useNavigation();
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: true,
    });
  }, []);
  const name = [
    "Harshada Kabadi",
    "Shivansh Sharma",
    "Abhijit wavhal",
    "Ankit Singh",
  ];
  const title = [
    "A simple Beginner's Routine",
    "Perfect for beginners!",
    "Great for those who take wellness seriously",
    "Great for those who take wellness seriously",
  ];
  const description = [
    "You will do 3 work outs per week on non consecutive days",
    "You will do 3 work outs per week on non consecutive days",
    "You will do 3 work outs per week on non consecutive days",
    "You will do 3 work outs per week on non consecutive days",
  ];
  const createdAt = [
    "Posted on: 5/03/2023 18:05:39",
    "Posted on: 10/12/2022 5:25:09",
    "Posted on: 29/07/2021 22:06:36",
    "Posted on: 17/06/2023 15:05:39",
  ];

  return (
    <NativeBaseProvider>
      <Center>
        <VStack
          my="4"
          space={5}
          w="100%"
          maxW="300px"
          divider={
            <Box px="2">
              <Divider />
            </Box>
          }
        >
          <VStack w="100%" mt={19} space={5} alignSelf="center">
            <Input
              bgColor="#e7f3fb"
              size={20}
              placeholder="Search"
              variant="filled"
              width="100%"
              borderRadius="8"
              py="1"
              px="2"
              InputLeftElement={
                <Icon
                  ml="2"
                  size="6"
                  color="gray.400"
                  as={<EvilIcons name="search" size={24} color="black" />}
                />
              }
            />
          </VStack>
        </VStack>
      </Center>
      <ScrollView>
        <Center>
          <Box>
            {name.map((element, index) => (
              <Card bgColor="#e7f3fb" key={element}>
                <Heading>{element}</Heading>
                <VStack
                  my="4"
                  space={5}
                  w="100%"
                  maxW="300px"
                  divider={
                    <Box px="2">
                      <Divider />
                    </Box>
                  }
                ></VStack>
                <Text fontWeight={"semibold"}>{title[index]}</Text>
                <Text mt={2}>{description[index]}</Text>
                <Text fontSize={12} color={"gray.400"}>
                  {createdAt[index]}
                </Text>
              </Card>
            ))}
          </Box>
        </Center>
      </ScrollView>
    </NativeBaseProvider>
  );
};

export default Health_Forum;
