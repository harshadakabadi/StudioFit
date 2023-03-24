import { View } from "react-native";
import React, { useLayoutEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import {
  Select,
  Box,
  Center,
  CheckIcon,
  Text,
  TextArea,
  Button,
  NativeBaseProvider,
  Container
} from "native-base";
import StarRating from "react-native-star-rating-widget";
import { useState } from "react";
import { ScrollView } from "react-native-gesture-handler";
const Report_Issue = () => {
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
          <Container mt={15} maxWidth="800">
            <Center>
              <Box maxW="500" mt={50}>
                <Select
                  selectedValue={category}
                  minWidth="329"
                  fontSize={16}
                  bgColor="#e7f3fb"
                  accessibilityLabel="Select By Issue category"
                  placeholder="Select By Issue category"
                  _selectedItem={{
                    endIcon: <CheckIcon size="1" />,
                  }}
                  mt={1}
                  onValueChange={(itemValue) => setCategory(itemValue)}
                >
                  <Select.Item label="management" value="management" />
                  <Select.Item label="staff" value="staff" />
                  <Select.Item label="None" value="None" />
                </Select>
              </Box>
              <Text mt={30} fontSize={18}>
                Enter Your Issue
              </Text>
              <Box alignItems="center" mt={5}>
                <TextArea
                  fontSize={16}
                  bgColor="#e7f3fb"
                  h={40}
                  placeholder="Enter Your Issue"
                  maxW="329"
                />
              </Box>

              <Center>
                <Button
                  mt={20}
                  textAlign={"center"}
                  justifyContent={"center"}
                  alignItems={"center"}
                  width={300}
                  height={50}
                  borderRadius={8}
                  bgColor={"#4CAF50"}
                >
                  <Text fontSize={18} textAlign={"center"} color={"white"}>
                    Submit
                  </Text>
                </Button>
              </Center>
            </Center>
          </Container>
        </Center>
      </ScrollView>
    </NativeBaseProvider>
  );
};

export default Report_Issue;
