
import React, { useLayoutEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { Select, Box, Center,View,CheckIcon,ScrollView,KeyboardAvoidingView,Input, Text ,TextArea,Button, NativeBaseProvider, Container} from "native-base";
import { RatingInput } from "react-native-stock-star-rating";
import { useState } from 'react';
import MemberBottomDrawer from "./MemberBottomDrawer";

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
  const [branch, setBranch] = useState("");
  const [created_by, setCreatedBy] = useState("");

  

  const postData = async () => {
    try {
      let result = await fetch(`http://${global.MyVar}/api/feedback_api/`, {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({
          category,
          feedback,
          rating,
          branch:1,
          created_by:1,
        }),
      });
      alert("Submitted successfully..");
      console.log("Data saved");
    } catch (error) {
      alert("Something Wrong");
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
          <Container alignItems={"center"} m={10} width={"800"}>
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
                  label="staff"
                  value={"staff"}
                  onChangeText={(text) => setCategory(text)}
                />
                <Select.Item
                  shadow={2}
                  label="management"
                  value={"management"}
                  onChangeText={(text) => setCategory(text)}
                />
                <Select.Item
                  shadow={2}
                  label="services"
                  value={"services"}
                  onChangeText={(text) => setCategory(text)}
                />
              </Select>
            </Box>

            <Center>
              <Text mt={30} fontSize={18}>
                Enter Your Feedback
              </Text>
              <Box>
                <TextArea
                  bgColor="#e7f3fb"
                  mt={15}
                  height={40}
                  fontSize={15}
                  placeholder="Enter Your Feedback"
                  width={300}
                  maxW="329"
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
                    mt={20}
                    textAlign={"center"}
                    justifyContent={"center"}
                    alignItems={"center"}
                    width={300}
                    height={50}
                    borderRadius={8}
                    bgColor={"#4CAF50"}
                    onPress={postData}
                  >
                    <Text fontSize={18} textAlign={"center"} color={"white"}>
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