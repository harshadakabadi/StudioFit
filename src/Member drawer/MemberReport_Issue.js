import React, { useState } from "react";
import { KeyboardAvoidingView } from "native-base";
import { useNavigation } from "@react-navigation/native";
import {
  Button,
  Center,
  NativeBaseProvider,
  Text,
  TextArea,Box,Input, ScrollView, Container,Select,CheckIcon
} from "native-base";
import MemberBottomDrawer from "./MemberBottomDrawer";
import AsyncStorage from "@react-native-async-storage/async-storage";


const MemberReport_Issue = () => {
  const navigation = useNavigation();
  const [category,setCategory]=useState("");
  const [issue, setIssue] = useState("");
  

  const postData = async () => {
    const userId = await AsyncStorage.getItem("userId");
    const branchId = await AsyncStorage.getItem("branchId");
    try {
      let result = await fetch(`${global.MyVar}/api/reported_issue/`, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "content-type": "application/json",
        },
        body: JSON.stringify({
          category,
          issue,
          comment:"",
          branch: branchId,
          created_by: userId,
          updated_by: userId,
        }),
      });
      alert("Submitted Successfully..");
      handleClick();
    } catch (error) {
      alert("Something wrong!");
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
            <Container mt={30} maxWidth="800">
              <Center>
                <Text mt={5} fontSize={18} ml={-159}>
                  Report Issue for :
                </Text>
                <Box width={300} mt={4}>
                  <Select
                    bgColor="#E8E8E8"
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

                <Text mt={5} fontSize={18} ml={-159}>
                  Enter Your Issue :
                </Text>
                <Box alignItems="center" mt={5}>
                  <TextArea
                    fontSize={16}
                    bgColor="#E8E8E8"
                    h={120}
                    maxW="300"
                    placeholder="Enter your Issue "
                    value={issue}
                    onChangeText={(text) => setIssue(text)}
                  />
                </Box>
                <Center>
                  <Button
                    mt={20}
                    mb={20}
                    textAlign={"center"}
                    justifyContent={"center"}
                    alignItems={"center"}
                    width={200}
                    height={50}
                    borderRadius={8}
                    bgColor={"#28a745"}
                    onPress={postData}
                    onPressIn={() => navigation.navigate("Dashboard")}
                  >
                    <Text
                      textAlign={"center"}
                      fontSize={20}
                      fontWeight={"bold"}
                      color={"white"}
                    >
                      Submit
                    </Text>
                  </Button>
                </Center>
              </Center>
            </Container>
          </Center>
        </ScrollView>
        <MemberBottomDrawer />
      </KeyboardAvoidingView>
    </NativeBaseProvider>
  );
};

export default MemberReport_Issue;
