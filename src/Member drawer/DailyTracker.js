import { View } from "react-native";
import React, { useEffect, useState } from "react";
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
import { useFocusEffect } from "@react-navigation/native";
import MemberBottomDrawer from "./MemberBottomDrawer";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { MaterialIcons } from "@expo/vector-icons";

const DailyTracker =() => {
  const navigation = useNavigation();
  const [steps_walked, setStepWalked] = useState("");
  const [calories_burnt, setCaloriesBurnt] = useState("");
  const [heart_rate, setHeartRate] = useState("");
  const [hasStartedTyping, setHasStartedTyping] = useState(false);
  const [showForm, setShowForm] = useState(false);
  

  const getDate = async () => {
    const created_at = await AsyncStorage.getItem("created_at");
    if(created_at)
    {
      const val = created_at.substring(1, 11).split("-");
      const date = new Date();
    let day = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();
    console.log(day + "-" + month + "-" + year);
    console.log(val[2] + "-" + val[1] + "-" + val[0]);

    if (
      parseInt(val[0]) === year &&
      parseInt(val[1]) === month &&
      parseInt(val[2]) === day
    ) {
      alert("You have already submitted the fitness details..");
      setShowForm(false);
    } else {
      setShowForm(true);
    }
    }
    else {
      setShowForm(true);
    }  
    
  }
  
  useFocusEffect(
    React.useCallback(() => {
      getDate();
    }, [])
  );

  const postData = async () => {
    const userId = await AsyncStorage.getItem("userId");
    
    try {
      if (!steps_walked || !calories_burnt || !heart_rate) {
        alert("All fields are required");
      } else {
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
            weight_loss: 0,
            heart_rate,
            member: userId,
          }),
        });
        if (result.status === 201) {
          alert("Submitted successfully..");
          setHasStartedTyping(false);
          navigation.navigate("Dashboard");
        } else {
          alert("Something Wrong");
        }
        handleClick();
      }
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
              {showForm && (
                <Container>
                  <HStack space={37} mt={6}>
                    <Text fontSize={17}>Enter Steps walked</Text>
                    <Input
                      width="30%"
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
              )}
            </Center>
          </ScrollView>
        <View>
          <MemberBottomDrawer />
        </View>
      </KeyboardAvoidingView>
    </NativeBaseProvider>
  );
};

export default DailyTracker;
