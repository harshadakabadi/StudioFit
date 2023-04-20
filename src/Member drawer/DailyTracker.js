import { View, } from 'react-native'
import React, { useState } from 'react'
import {
  NativeBaseProvider,
  Text ,
  Container,
  HStack,
  Input,
  KeyboardAvoidingView,
  ScrollView,
  Center,
  Button
} from "native-base";
import MemberBottomDrawer from './MemberBottomDrawer';
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";


const DailyTracker = () => {
  const navigation = useNavigation();
  const [steps_walked, setStepWalked] = useState("");
  const [calories_burnt, setCaloriesBurnt] = useState("");
  const [heart_rate, setHeartRate] = useState("");
  
  const postData = async () => {
    const userId = await AsyncStorage.getItem("userId");
    try {
      let result = await fetch(`${global.MyVar}/api/daily_member_fitness/`, {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({
          steps_walked,
          distance_covered: 0,
          calories_burnt_by_walking: 0,
          calories_burnt,
          heart_rate,
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
     setStepWalked("");
     setCaloriesBurnt("");
     setHeartRate("");
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
              <HStack space={37} mt={6}>
                <Text fontSize={17}>Enter Steps walked</Text>
                <Input
                  width="30%"
                  height="39"
                  borderWidth={2}
                  keyboardType="numeric"
                  fontSize={16}
                  textAlign={"center"}
                  value={steps_walked}
                  onChangeText={(text) => setStepWalked(text)}
                />
              </HStack>
              <HStack space={31} mt={6}>
                <Text fontSize={17}>Enter Calories Burnt</Text>
                <Input
                  width="30%"
                  height="39"
                  borderWidth={2}
                  keyboardType="numeric"
                  fontSize={16}
                  textAlign={"center"}
                  value={calories_burnt}
                  onChangeText={(text) => setCaloriesBurnt(text)}
                />
              </HStack>
              <HStack space={60} mt={6}>
                <Text fontSize={17}>Enter Heart Rate</Text>
                <Input
                  width="30%"
                  height="39"
                  borderWidth={2}
                  keyboardType="numeric"
                  fontSize={16}
                  textAlign={"center"}
                  value={heart_rate}
                  onChangeText={(text) => setHeartRate(text)}
                />
              </HStack>
              <View>
                <Center ml={10}>
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
}

export default DailyTracker