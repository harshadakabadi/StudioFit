
import React, { useLayoutEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { Select, Box, Center,View,CheckIcon,ScrollView,KeyboardAvoidingView,Input, Text ,TextArea,Button, NativeBaseProvider, Container} from "native-base";
import { RatingInput } from "react-native-stock-star-rating";
import { useState } from 'react';
import MemberBottomDrawer from "./MemberBottomDrawer";
import { SafeAreaView } from "react-native-safe-area-context";
import AsyncStorage from "@react-native-async-storage/async-storage";


const MemberFeedback = () => {
  const navigation = useNavigation();
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: true,
    });
  }, []);
  
  const [rating, setRating] = useState(0);
  const [category, setCategory] = useState("");
  const [feedback, setFeedback] = useState("");
  

  const postData = async () => {
    const userId = await AsyncStorage.getItem("userId");
    const branchId = await AsyncStorage.getItem("branchId");
    try {
      let result = await fetch(`${global.MyVar}/api/member_feedback/`, {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({
          category,
          feedback,
          rating,
          branch: branchId,
          created_by: userId,
        }),
      });
      handleClick();
      alert("Submitted successfully..");
      console.log("Data saved");
    } catch (error) {
      alert("Something Wrong");
      console.log(error);
    } finally {
      console.log("Done");
    }
  };
  const handleClick = () => {
    setCategory("");
    setFeedback("");
    setRating("");
  };

  return (
    <NativeBaseProvider>
      <KeyboardAvoidingView
        behavior="height"
        style={[{ justifyContent: "center", height: "100%" }]}
      >
        <ScrollView>
          <Container alignItems={"center"} m={10} width={"800"}>
            <Text fontSize={18} ml={-119}>
              Enter feedback for :
            </Text>
            <Box width={280} mt={4}>
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
                  label="Staff"
                  value={"Staff"}
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
                  label="Services"
                  value={"Services"}
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

            <Center>
              <Text mt={30} ml={-119} fontSize={18}>
                Enter Your Feedback
              </Text>
              <Box alignItems="center" mt={5}>
                <TextArea
                  fontSize={16}
                  bgColor="#E8E8E8"
                  h={130}
                  maxW="300"
                  placeholder="Enter your feedback "
                  value={feedback}
                  onChangeText={(text) => setFeedback(text)}
                />
              </Box>
              <Text mt={30} fontSize={18}>
                Rate Us
              </Text>

              <View>
                <Center>
                  <RatingInput
                    maxStars={5}
                    rating={rating}
                    setRating={setRating}
                    size={50}
                    onRating={(value) => setRating(rating)}
                  />
                </Center>
              </View>

              <View>
                <Center>
                  <Button
                    mt={10}
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
                      fontSize={20}
                      fontWeight={"bold"}
                      color={"white"}
                      textAlign={"center"}
                    >
                      Submit
                    </Text>
                  </Button>
                </Center>
              </View>
            </Center>
          </Container>
        </ScrollView>
        <MemberBottomDrawer />
      </KeyboardAvoidingView>
    </NativeBaseProvider>
  );
};

export default MemberFeedback;