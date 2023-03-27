import React, { useLayoutEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { EvilIcons } from "@expo/vector-icons"; 
import {
  Box,
  Center,
  Text,
  VStack,
  Divider,
  Heading,
  Input,
  Icon,
  Card,
  NativeBaseProvider
} from "native-base";
import { ScrollView } from "react-native-gesture-handler";
import axios from "axios";

const MemberHealth_Forum = () => {
  const navigation = useNavigation();
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: true,
    });
  }, []);

   const [blog, setBlog] = useState([]);
  
   axios
     .get("https://jsonplaceholder.typicode.com/posts")
     .then((response) => {
       setBlog(response.data);
     })
     .catch(function (error) {
       // handle error
       alert(error.message);
     });
  
 
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
             {blog && blog.map((object, index) => (
              <Card bgColor="#e7f3fb" key={object.id}>
                <Heading>Harshada Kabadi</Heading>
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
                <Text fontWeight={"semibold"}>{object.title}</Text>
                <Text mt={2}> {object.body}</Text>
                <Text fontSize={12} color={"gray.400"}>
                  posted on 29/03/2023 23:45:60
                </Text>
              </Card>
            ))} 
          </Box>
        </Center>
      </ScrollView>
    </NativeBaseProvider>
  );
};

export default MemberHealth_Forum;
