import React, { useState } from "react";
import {
  Button,
  Center,
  NativeBaseProvider,
  Text,
  TextArea,
  Box,
  Input,
  ScrollView,
  Container,
  Select,
  CheckIcon,KeyboardAvoidingView
} from "native-base";
import TrainerBottomDrawer from "./TrainerBottomDrawer";
import { useNavigation } from "@react-navigation/native";

const TrainerReport_Issue = () => {
  const navigation = useNavigation();
  const [category, setCategory] = useState("");
  const [issue, setIssue] = useState("");
  
  const postData = async () => {
    try {
      let result = await fetch(
        `http://${global.MyVar}/api/reported_issue_api/`,
        {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify({
            category,
            issue,
            branch:1,
            created_by:1,
          }),
        }
      );
      alert("Successfully submitted");
      console.log("Data saved");
    } catch (error) {
      console.log(error);
    } finally {
      console.log("Done");
    }
  };
  return (
    <NativeBaseProvider>
      <KeyboardAvoidingView
        behavior="height"
        style={[{ justifyContent: "center", height: 670 }]}
      >
        <ScrollView>
          <Center>
            <Container mt={30} maxWidth="800">
              <Center>
                <Box width={300} mt={4}>
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
                <Text mt={5} fontSize={18}>
                  Enter Your Issue
                </Text>
                <Box alignItems="center" mt={5}>
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
                    width={300}
                    height={50}
                    borderRadius={8}
                    bgColor={"#4CAF50"}
                    onPress={postData}
                    onPressIn={() => navigation.navigate("Dashboard")}
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
        <TrainerBottomDrawer />
      </KeyboardAvoidingView>
    </NativeBaseProvider>
  );
};

export default TrainerReport_Issue;
