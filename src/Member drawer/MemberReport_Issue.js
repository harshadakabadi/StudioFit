import React, { useState } from "react";
import { KeyboardAvoidingView } from "native-base";
import { useNavigation } from "@react-navigation/native";
import {
  Button,
  Center,
  NativeBaseProvider,
  Text,
  TextArea,
  Box,
  Container,
  Select,
  CheckIcon,
  HStack,
  Card,
  View,
  Heading,
} from "native-base";
import { ScrollView } from "react-native-gesture-handler";
import MemberBottomDrawer from "./MemberBottomDrawer";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { MaterialIcons } from "@expo/vector-icons";
import { useFocusEffect } from "@react-navigation/native";
import { ActivityIndicator } from "react-native-paper";
import { Divider } from "@rneui/themed";


const MemberReport_Issue = () => {
  const navigation = useNavigation();
  const [category, setCategory] = useState("");
  const [issue, setIssue] = useState("");
  const [hasStartedTyping, setHasStartedTyping] = useState(false);
  const [reported_issue, setReportedIssue] = useState("");
  const [loading, setLoading] = useState(true);

  const getData = async () => {
    const userId = await AsyncStorage.getItem("userId");
    try {
      const data = await fetch(`${global.MyVar}/api/reported_issue/`);
      const reported_issue = await data.json();
      setReportedIssue(reported_issue);
      setLoading(false);
    } catch (e) {
      console.log({ e });
    } finally {
      console.log("done");
    }
  };
  const postData = async () => {
    const userId = await AsyncStorage.getItem("userId");
    const branchId = await AsyncStorage.getItem("branchId");
    console.log(userId);
    console.log(branchId);

    try {
       if ( !category || !issue ) {
         alert("All fields are required");
       } else {
        let result = await fetch(`${global.MyVar}/api/reported_issue/`, {
          method: "POST",
          headers: {
            Accept: "application/json",
            "content-type": "application/json",
          },
          body: JSON.stringify({
            category,
            issue,
            comment: "",
            is_resolved: false,
            branch: branchId,
            created_by: userId,
            updated_by: userId,
          }),
        });
        alert("Submitted Successfully..");
        handleClick();
        getData();
        navigation.navigate("Dashboard");
       } 
    } catch (error) {
      alert("Something wrong!");
      console.log(error);
    } finally {
      console.log("Done");
    }
  };
  useFocusEffect(
    React.useCallback(() => {
      getData();
    }, [])
  );

  const handleClick = () => {
    setCategory("");
    setIssue("");
  };
  const handleCancel = () => {
    setHasStartedTyping(false);
    navigation.navigate("Dashboard");
    handleClick();
  };
  const handleInputChange = () => {
    setHasStartedTyping(true);
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
              <HStack space={90}>
                <Text mt={2} fontSize={18} ml={0}>
                  Report Issue for :
                </Text>
                {hasStartedTyping && (
                  <Button onPress={handleCancel} bgColor={"transparent"}>
                    <HStack space={1} mt={3}>
                      <MaterialIcons
                        name="cancel-presentation"
                        size={24}
                        color="red"
                      />
                      <Text>Cancel</Text>
                    </HStack>
                  </Button>
                )}
              </HStack>
              <Center>
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
                    onChange={handleInputChange}
                  />
                </Box>
                <Center>
                  <Button
                    mt={10}
                    mb={20}
                    textAlign={"center"}
                    justifyContent={"center"}
                    alignItems={"center"}
                    width={200}
                    height={50}
                    borderRadius={8}
                    bgColor={"#28a745"}
                    onPress={postData}
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
          <Center>
            <Card bgColor="grey" style={{ width: 400, height: 400 }}>
              {loading ? (
                <ActivityIndicator size="small" />
              ) : (
                <Box ml={4} mb={3}>
                  <Center mt={2} mb={3}>
                    <Heading>Issues Reported by you</Heading>
                  </Center>
                  <ScrollView>
                    {reported_issue &&
                      reported_issue.map((object) => (
                        <Box key={object.id}>
                          <Heading mt={2} color={"lightblue"}>
                            {object.category}
                          </Heading>
                          <Text fontSize={20} mt={3} color={"white"}>
                            {object.issue}
                          </Text>
                          <Text fontSize={16} mt={3} color={"white"} mb={8}>
                            posted on : {new Date(object.created_at).toGMTString()}
                          </Text>
                          <Box mt={3}>
                            <Divider />
                          </Box>
                        </Box>
                      ))}
                  </ScrollView>
                </Box>
              )}
            </Card>
          </Center>
        </ScrollView>
        <MemberBottomDrawer />
      </KeyboardAvoidingView>
    </NativeBaseProvider>
  );
};

export default MemberReport_Issue;
