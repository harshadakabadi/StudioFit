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
import { MaterialIcons } from "@expo/vector-icons"; 


const DailyTracker = () => {
  const navigation = useNavigation();
  const [steps_walked, setStepWalked] = useState("");
  const [calories_burnt, setCaloriesBurnt] = useState("");
  const [heart_rate, setHeartRate] = useState("");
  const [hasStartedTyping, setHasStartedTyping] = useState(false);

  
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
          weight_loss:0,
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
                  onChange={handleInputChange}
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
                  onChange={handleInputChange}
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
                  onChange={handleInputChange}
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