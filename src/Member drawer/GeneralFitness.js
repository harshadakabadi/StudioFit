import { View } from "react-native";
import React, { useState } from "react";
import {
  NativeBaseProvider,
  Text,
  Container,
  HStack,
  Input,
  KeyboardAvoidingView,
  ScrollView,
  Center,
  Button,
} from "native-base";
import MemberBottomDrawer from "./MemberBottomDrawer";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
const GeneralFitness = () => {
  const navigation = useNavigation();
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState(0);
  const [age, setAge] = useState("");
  const [distance_covered, setDistaceCovered] = useState("");
  const [steps_taken, setStepTaken] = useState("");
  
  const postData = async () => {
    const userId = await AsyncStorage.getItem("userId");
    console.log(userId);
    try {
      let result = await fetch(`${global.MyVar}/api/general_member_fitness/`, {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({
          height,
          weight,
          age,
          bmi: 0,
          bmi_status: "",
          fat_percentage: 0,
          fat_percentage_status: "",
          distance_covered,
          steps_taken,
          stride_length: 0,
          average_calories_burnt: 0,
          average_heart_rate: 0,
          member: userId,
        }),
      });
      handleClick();
      alert("Submitted successfully..");
      navigation.navigate("Dashboard");
    } catch (error) {
      alert("Something Wrong");
      console.log(error);
    } finally {
      console.log("Done");
    }
  };
  const handleClick = () => {
    setHeight("");
    setWeight("");
    setStepTaken("");
    setDistaceCovered("");
    setAge("");
  };

  return (
    <NativeBaseProvider>
      <KeyboardAvoidingView
        behavior="height"
        style={[{ justifyContent: "center", height: "100%" }]}
      >
        <ScrollView>
          <Center mt={60}>
            <Container>
              <HStack space={70}>
                <Text fontSize={17}>Enter Height in cm</Text>
                <Input
                  width="30%"
                  height="39"
                  borderWidth={2}
                  keyboardType="numeric"
                  fontSize={16}
                  textAlign={"center"}
                  value={height}
                  onChangeText={(text) => setHeight(text)}
                />
              </HStack>
              <HStack space={73} mt={6}>
                <Text fontSize={17}>Enter Weight in kg</Text>
                <Input
                  width="30%"
                  height="39"
                  borderWidth={2}
                  keyboardType="numeric"
                  fontSize={16}
                  textAlign={"center"}
                  value={weight}
                  onChangeText={(text) => setWeight(text)}
                />
              </HStack>
              <HStack space={144} mt={6}>
                <Text fontSize={17}>Enter Age</Text>
                <Input
                  width="30%"
                  height="39"
                  borderWidth={2}
                  keyboardType="numeric"
                  fontSize={16}
                  textAlign={"center"}
                  value={age}
                  onChangeText={(text) => setAge(text)}
                />
              </HStack>
              <HStack space={84} mt={6}>
                <View>
                  <Text fontSize={17}>Enter Distance</Text>
                  <Text fontSize={17}>covered in meter</Text>
                </View>
                <Input
                  width="30%"
                  height="39"
                  borderWidth={2}
                  keyboardType="numeric"
                  fontSize={16}
                  textAlign={"center"}
                  value={distance_covered}
                  onChangeText={(text) => setDistaceCovered(text)}
                />
              </HStack>
              <HStack space={75} mt={6}>
                <Text fontSize={17}>Enter Steps Taken</Text>
                <Input
                  width="30%"
                  height="39"
                  borderWidth={2}
                  keyboardType="numeric"
                  fontSize={16}
                  textAlign={"center"}
                  value={steps_taken}
                  onChangeText={(text) => setStepTaken(text)}
                />
              </HStack>
              <View>
                <Center ml={47}>
                  <Button
                    mt={20}
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
            </Container>
          </Center>
        </ScrollView>
        <MemberBottomDrawer />
      </KeyboardAvoidingView>
    </NativeBaseProvider>
  );
};

export default GeneralFitness;
