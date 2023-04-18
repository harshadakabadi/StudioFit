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

const FitnessTracker = () => {
  const navigation = useNavigation();
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState(0);
  const [steps_walked, setStepWalked] = useState("");
  const [calories_burnt, setCaloriesBurnt] = useState("");
  const [fat_percent, setFatPercent] = useState("");
  const [bmi, setBMI] = useState("");
  
  
  const postData = async () => {
    try {
      let result = await fetch(`${global.MyVar}/api/feedback_api/`, {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({
          height,
          weight,
          steps_walked,
          calories_burnt,
          fat_percent,
          bmi,
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
     setHeight("");
     setWeight("");
     setStepWalked("");
     setCaloriesBurnt("");
     setFatPercent("");
     setBMI("");
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
              <HStack space={85}>
                <Text fontSize={17}>Enter Height</Text>
                <Input
                  width="30%"
                  height="37"
                  borderWidth={2}
                  placeholder="00"
                  fontSize={17}
                  textAlign={"center"}
                  // value={height}
                  // onChangeText={(text) => setHeight(text)}
                />
              </HStack>
              <HStack space={83} mt={6}>
                <Text fontSize={17}>Enter Weight</Text>
                <Input
                  width="30%"
                  height="37"
                  borderWidth={2}
                  placeholder="00"
                  fontSize={17}
                  textAlign={"center"}
                  //  value={weight}
                  //  onChangeText={(text) => setWeight(text)}
                />
              </HStack>
              <HStack space={35} mt={6}>
                <Text fontSize={17}>Enter Steps walked</Text>
                <Input
                  width="30%"
                  height="37"
                  borderWidth={2}
                  placeholder="00"
                  fontSize={17}
                  textAlign={"center"}
                  // value={steps_walked}
                  // onChangeText={(text) => setStepWalked(text)}
                />
              </HStack>
              <HStack space={31} mt={6}>
                <Text fontSize={17}>Enter Calories burnt</Text>
                <Input
                  width="30%"
                  height="37"
                  borderWidth={2}
                  placeholder="00"
                  fontSize={17}
                  textAlign={"center"}
                  // value={calories_burnt}
                  // onChangeText={(text) => setCaloriesBurnt(text)}
                />
              </HStack>
              <HStack space={95} mt={6}>
                <Text fontSize={17}>Enter Fat %</Text>
                <Input
                  width="30%"
                  height="37"
                  borderWidth={2}
                  placeholder="00"
                  fontSize={17}
                  textAlign={"center"}
                  //  value={fat_percent}
                  // onChangeText={(text) => setFatPercent(text)}
                />
              </HStack>
              <HStack space={105} mt={6}>
                <Text fontSize={17}>Enter BMI</Text>
                <Input
                  width="30%"
                  height="37"
                  borderWidth={2}
                  placeholder="00"
                  fontSize={17}
                  textAlign={"center"}
                  //  value={bmi}
                  // onChangeText={(text) => setBMI(text)}
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
                    bgColor={"#FF647F"}
                    // onPress={postData}
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
            </Container>
          </Center>
        </ScrollView>
        <MemberBottomDrawer />
      </KeyboardAvoidingView>
    </NativeBaseProvider>
  );
}

export default FitnessTracker