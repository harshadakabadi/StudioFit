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
import { MaterialIcons } from "@expo/vector-icons"; 


const GeneralFitness = () => {
  const navigation = useNavigation();
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState(0);
  const [age, setAge] = useState("");
  const [distance_covered, setDistaceCovered] = useState("");
  const [steps_taken, setStepTaken] = useState("");
    const [hasStartedTyping, setHasStartedTyping] = useState(false);

  
  const postData = async () => {
    const userId = await AsyncStorage.getItem("userId");
    try {
      let result = await fetch(
        `${global.MyVar}/api/general_member_fitness/`,
        {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify({
            height,
            weight,
            age,
            bmi:0,
            bmi_status:"",
            fat_percentage:0,
            fat_percentage_status:"",
            distance_covered,
            steps_taken,
            stride_length: 0,
            average_calories_burnt: 0,
            average_heart_rate: 0,
            member: userId,
            
          }),
        }
      );
      handleClick();
      navigation.navigate("Dashboard");
      alert("Submitted successfully..");
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
          <Center mt={60}>
            <Container>
              <HStack space={70}>
                <Text fontSize={17}>Enter Height (in cm)</Text>
                <Input
                  width="30%"
                  height="39"
                  borderWidth={2}
                  fontSize={17}
                  textAlign={"center"}
                  keyboardType="numeric"
                  value={height}
                  onChangeText={(text) => setHeight(text)}
                  onChange={handleInputChange}
                />
              </HStack>
              <HStack space={73} mt={6}>
                <Text fontSize={17}>Enter Weight (in kg)</Text>
                <Input
                  width="30%"
                  height="39"
                  borderWidth={2}
                  fontSize={17}
                  textAlign={"center"}
                  value={weight}
                  keyboardType="numeric"
                  onChangeText={(text) => setWeight(text)}
                  onChange={handleInputChange}
                />
              </HStack>
              <HStack space={147} mt={6}>
                <Text fontSize={17}>Enter Age</Text>
                <Input
                  width="30%"
                  height="39"
                  borderWidth={2}
                  fontSize={17}
                  textAlign={"center"}
                  keyboardType="numeric"
                  value={age}
                  onChangeText={(text) => setAge(text)}
                  onChange={handleInputChange}
                />
              </HStack>
              <HStack space={47} mt={6}>
                <View>
                  <Text fontSize={17}>Enter Distance covered</Text>
                  <Text fontSize={17}>(in meter)</Text>
                </View>
                <Input
                  width="30%"
                  height="39"
                  borderWidth={2}
                  fontSize={17}
                  textAlign={"center"}
                  keyboardType="numeric"
                  value={distance_covered}
                  onChangeText={(text) => setDistaceCovered(text)}
                  onChange={handleInputChange}
                />
              </HStack>
              <HStack space={84} mt={6}>
                <Text fontSize={17}>Enter Steps Taken</Text>
                <Input
                  width="30%"
                  height="39"
                  borderWidth={2}
                  keyboardType="numeric"
                  fontSize={17}
                  textAlign={"center"}
                  value={steps_taken}
                  onChangeText={(text) => setStepTaken(text)}
                  onChange={handleInputChange}
                />
              </HStack>
              <View>
                <Center ml={8}>
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
