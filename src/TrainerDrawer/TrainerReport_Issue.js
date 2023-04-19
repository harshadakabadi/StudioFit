import React, { useState } from "react";
import {
  Button,
  Center,
  NativeBaseProvider,
  Text,
  TextArea,
  Box,
  ScrollView,
  Container,
  Select,
  CheckIcon,KeyboardAvoidingView
} from "native-base";
import TrainerBottomDrawer from "./TrainerBottomDrawer";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";


const TrainerReport_Issue = () => {
  const navigation = useNavigation();
  const [category, setCategory] = useState("");
  const [issue, setIssue] = useState("");
  
  const postData = async () => {
    const userId = await AsyncStorage.getItem("userId");
    const branchId = await AsyncStorage.getItem("branchId");

    try {
      let result = await fetch(`${global.MyVar}/api/reported_issue_api/`, {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({
          category,
          issue,
          branch: branchId,
          created_by: userId,
          updated_by: userId,
        }),
      });
      handleClick();
      alert("Successfully submitted");
      console.log("Data saved");
    } catch (error) {
      console.log(error);
    } finally {
      console.log("Done");
    }
  };
  const handleClick = () => {
    setCategory("");
    setIssue("");
  };
  return (
    <NativeBaseProvider>
      <KeyboardAvoidingView
        behavior="height"
        style={[{ justifyContent: "center", height: "100%" }]}
      >
        <ScrollView>
          <Center>
            <Container mt={39} maxWidth="800">
              <Center>
                <Text mt={5} fontSize={18} ml={-159}>
                  Report Issue for :
                </Text>
                <Box width={300} mt={7}>
                  <Select
                    bgColor="#e7f3fb"
                    selectedValue={category}
                    fontSize={16}
                    accessibilityLabel="select category"
                    placeholder="select category"
                    _selectedItem={{
                      bg: "teal.600",
                      endIcon: <CheckIcon size="3" />,
                    }}
                    _light={{
                      bg: "coolGray.100",
                      _hover: {
                        bg: "coolGray.200",
                      },
                      _focus: {
                        bg: "coolGray.200:alpha.70",
                      },
                    }}
                    _dark={{
                      bg: "coolGray.800",
                      _hover: {
                        bg: "coolGray.900",
                      },
                      _focus: {
                        bg: "coolGray.900:alpha.70",
                      },
                    }}
                    mt={1}
                    onValueChange={(itemValue) => setCategory(itemValue)}
                  >
                    <Select.Item
                      shadow={2}
                      label="Member"
                      value={"Member"}
                      onChangeText={(text) => setCategory(text)}
                    />
                    <Select.Item
                      shadow={2}
                      label="Trainer"
                      value={"Trainer"}
                      onChangeText={(text) => setCategory(text)}
                    />
                    <Select.Item
                      shadow={2}
                      label="Equipment"
                      value={"Equipment"}
                      onChangeText={(text) => setCategory(text)}
                    />
                    <Select.Item
                      shadow={2}
                      label="Management"
                      value={"Management"}
                      onChangeText={(text) => setCategory(text)}
                    />
                    <Select.Item
                      shadow={2}
                      label="Environment"
                      value={"Environment"}
                      onChangeText={(text) => setCategory(text)}
                    />
                  </Select>
                </Box>
                <Text mt={7} fontSize={18} ml={-159}>
                  Enter Your Issue
                </Text>
                <Box alignItems="center" mt={7}>
                  <TextArea
                    fontSize={16}
                    bgColor="#e7f3fb"
                    h={40}
                    maxW="300"
                    placeholder="Enter your Issue "
                    value={issue}
                    onChangeText={(text) => setIssue(text)}
                  />
                </Box>
                <Center>
                  <Button
                    mt={20}
                    mb={10}
                    textAlign={"center"}
                    justifyContent={"center"}
                    alignItems={"center"}
                    width={200}
                    height={50}
                    borderRadius={8}
                    bgColor={"#4CAF50"}
                    onPress={postData}
                    onPressIn={() => navigation.navigate("Dashboard")}
                  >
                    <Text fontSize={20} fontWeight={"bold"} textAlign={"center"} color={"white"}>
                      Submit
                    </Text>
                  </Button>
                </Center>
              </Center>
            </Container>
          </Center>
        </ScrollView>
        <TrainerBottomDrawer />
      </KeyboardAvoidingView>
    </NativeBaseProvider>
  );
};

export default TrainerReport_Issue;
