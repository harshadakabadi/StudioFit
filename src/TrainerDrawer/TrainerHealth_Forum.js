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
  ScrollView,
  NativeBaseProvider
} from "native-base";

const TrainerHealth_Forum = () => {
  const navigation = useNavigation();
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: true,
    });
  }, []);
  const [category, setCategory] = React.useState("");

  return (
    <NativeBaseProvider>
      <ScrollView>
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
          <Box>
            <TextArea
              bgColor="#e7f3fb"
              mt={15}
              height={20}
              fontSize={15}
              placeholder="Title of Forum"
              width={"100%"}
              maxW="329"
            />
          </Box>
          <Box maxW="500" mt={5}>
            <Select
              bgColor="#e7f3fb"
              selectedValue={category}
              minWidth="329"
              fontSize={16}
              accessibilityLabel="Select Forum category"
              placeholder="Select Forum category"
              _selectedItem={{
                endIcon: <CheckIcon size="1" />,
              }}
              mt={1}
              onValueChange={(itemValue) => setCategory(itemValue)}
            >
              <Select.Item label="Positive" value="positive" />
              <Select.Item label="Negative" value="negative" />
              <Select.Item label="None" value="None" />
            </Select>
          </Box>
          <Center>
            <Text mt={30} fontSize={18}>
              Enter content of Forum
            </Text>
            <Box>
              <TextArea
                bgColor="#e7f3fb"
                mt={15}
                height={40}
                fontSize={15}
                placeholder="Enter Your Content"
                width={"100%"}
                maxW="329"
              />
            </Box>
          </Center>
          <View>
            <Center>
              <Button
                mt={20}
                textAlign={"center"}
                justifyContent={"center"}
                alignItems={"center"}
                width={"100%"}
                height={50}
                borderRadius={8}
                bgColor={"#4CAF50"}
              >
                <Text fontSize={18} textAlign={"center"} color={"white"}>
                  Post
                </Text>
              </Button>
            </Center>
          </View>
        </Center>
      </ScrollView>
    </NativeBaseProvider>
  );
};

export default TrainerHealth_Forum;
