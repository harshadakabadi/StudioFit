import React, { useEffect, useState } from "react";
import {
  Box,
  Center,
  View,
  Text,
  NativeBaseProvider,
  Card,
  HStack,
  Heading,
  KeyboardAvoidingView,
} from "native-base";
import axios from "axios";
import { Divider } from "@rneui/themed";
import MemberBottomDrawer from "./MemberBottomDrawer";
import { ActivityIndicator } from "react-native-paper";
import { ScrollView } from "react-native";

const FitnessCards = () => {
  const [loading, setLoading] = useState(true);
  const [fitness, setFitness] = useState("");

  const getDataMember = async () => {
    try {
      const data = await fetch(`${global.MyVar}/api/user_fitness_api/1`);
      const fitness = await data.json();
      setFitness(fitness);
      setLoading(false);
    } catch (e) {
      console.log({ e });
    } 
  };
  useEffect(() => {
    getDataMember();
  }, []);

  return (
    <NativeBaseProvider>
      <KeyboardAvoidingView
        behavior="height"
        style={[{ justifyContent: "center", height: "100%" }]}
      >
        <ScrollView>
          <Center>
            <View mt={20}>
              <HStack space={2}>
                <Card bgColor="#17a2b8" height={100} width={190}>
                  <Center>
                    <Text
                      fontSize={20}
                      fontWeight={800}
                      color={"white"}
                      opacity={0.9}
                    >
                      Calories Burnt
                    </Text>
                    <Text fontSize={17} fontWeight={"bold"} mt={3}>
                      {fitness.calories_burnt}
                    </Text>
                  </Center>
                </Card>
                <Card bgColor="#28a745" height={100} width={190}>
                  <Center>
                    <Text
                      fontSize={20}
                      fontWeight={800}
                      color={"white"}
                      opacity={0.9}
                    >
                      Steps Walked
                    </Text>
                    <Text fontSize={17} fontWeight={"bold"} mt={3}>
                      {fitness.steps_walked}
                    </Text>
                  </Center>
                </Card>
              </HStack>
              <HStack space={2} mt={3}>
                <Card bgColor="#ffc107" height={100} width={190}>
                  <Center>
                    <Text
                      fontSize={20}
                      fontWeight={800}
                      color={"black"}
                      opacity={0.9}
                    >
                      BMI
                    </Text>
                    <Text fontSize={17} fontWeight={"bold"} mt={3}>
                      {fitness.bmi}
                    </Text>
                  </Center>
                </Card>
                <Card bgColor="#dc3545" height={100} width={190}>
                  <Center>
                    <Text
                      fontSize={20}
                      fontWeight={800}
                      color={"black"}
                      opacity={0.9}
                    >
                      Fat percentage
                    </Text>
                    <Text fontSize={17} fontWeight={"bold"} mt={3}>
                      {fitness.fat_percent}
                    </Text>
                  </Center>
                </Card>
              </HStack>
              <HStack space={2} mt={3}>
                <Card bgColor="#28a745" height={100} width={190}>
                  <Center>
                    <Text
                      fontSize={20}
                      fontWeight={800}
                      color={"white"}
                      opacity={0.9}
                    >
                      BMI
                    </Text>
                    <Text fontSize={17} fontWeight={"bold"} mt={3}>
                      {fitness.bmi}
                    </Text>
                  </Center>
                </Card>
                <Card bgColor="#17a2b8" height={100} width={190}>
                  <Center>
                    <Text
                      fontSize={20}
                      fontWeight={800}
                      color={"white"}
                      opacity={0.9}
                    >
                      Fat percentage
                    </Text>
                    <Text fontSize={17} fontWeight={"bold"} mt={3}>
                      {fitness.fat_percent}
                    </Text>
                  </Center>
                </Card>
              </HStack>
              <HStack space={2} mt={3}>
                <Card bgColor="#dc3545" height={100} width={190}>
                  <Center>
                    <Text
                      fontSize={20}
                      fontWeight={800}
                      color={"black"}
                      opacity={0.9}
                    >
                      BMI
                    </Text>
                    <Text fontSize={17} fontWeight={"bold"} mt={3}>
                      {fitness.bmi}
                    </Text>
                  </Center>
                </Card>
                <Card bgColor="#ffc107" height={100} width={190}>
                  <Center>
                    <Text
                      fontSize={20}
                      fontWeight={800}
                      color={"black"}
                      opacity={0.9}
                    >
                      Fat percentage
                    </Text>
                    <Text fontSize={17} fontWeight={"bold"} mt={3}>
                      {fitness.fat_percent}
                    </Text>
                  </Center>
                </Card>
              </HStack>
            </View>
          </Center>
        </ScrollView>
        <MemberBottomDrawer />
      </KeyboardAvoidingView>
    </NativeBaseProvider>
  );
};

export default FitnessCards;
