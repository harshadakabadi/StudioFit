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
  const [cards ,setCards] = useState("");
  const getDataDaily = async () => {
    try {
      const data = await fetch(`${global.MyVar}/api/daily_member_fitness/1/`);
      const cards = await data.json();
      setCards(cards);
      setLoading(false);
    } catch (e) {
      console.log({ e });
    } 
  };
  const getDataGeneral = async () => {
    try {
      const data = await fetch(`${global.MyVar}/api/general_member_fitness/1/`);
      const fitness = await data.json();
      setFitness(fitness);
      setLoading(false);
    } catch (e) {
      console.log({ e });
    }
  };
  useEffect(() => {
    getDataDaily();
    getDataGeneral();
  }, []);

  return (
    <NativeBaseProvider>
      <KeyboardAvoidingView
        behavior="height"
        style={[{ justifyContent: "center", height: "100%" }]}
      >
        <ScrollView>
          {loading ? (
            <ActivityIndicator size="small" />
          ) : (
            <View>
              <View mt={6} pl={20}>
                <Text fontSize={25}>Daily Member Fitness</Text>
              </View>
              <Center>
                <View>
                  <HStack space={2} mt={3}>
                    <Card bgColor="#17a2b8" height={120} width={190}>
                      <Center>
                        <Text
                          fontSize={18}
                          fontWeight={800}
                          color={"white"}
                          opacity={0.9}
                        >
                          Steps Walked
                        </Text>
                        <Text fontSize={17} fontWeight={"bold"} mt={5}>
                          {cards.steps_walked} steps
                        </Text>
                      </Center>
                    </Card>
                    <Card bgColor="#28a745" height={120} width={190}>
                      <Center>
                        <Text
                          fontSize={18}
                          fontWeight={800}
                          color={"white"}
                          opacity={0.9}
                        >
                          Distance Covered
                        </Text>
                        <Text fontSize={17} fontWeight={"bold"} mt={5}>
                          {cards.distance_covered} m
                        </Text>
                      </Center>
                    </Card>
                  </HStack>

                  <HStack space={2} mt={3}>
                    <Card bgColor="#ffc107" height={120} width={190}>
                      <Center>
                        <Text
                          fontSize={18}
                          fontWeight={800}
                          color={"white"}
                          opacity={0.9}
                        >
                          Calories Burnt by Walking
                        </Text>
                        <Text fontSize={17} fontWeight={"bold"} mt={1}>
                          {cards.calories_burnt_by_walking} calories
                        </Text>
                      </Center>
                    </Card>
                    <Card bgColor="#dc3545" height={120} width={190}>
                      <Center>
                        <Text
                          fontSize={18}
                          fontWeight={800}
                          color={"white"}
                          opacity={0.9}
                        >
                          Heart Rate
                        </Text>
                        <Text fontSize={17} fontWeight={"bold"} mt={8}>
                          {cards.heart_rate} bpm
                        </Text>
                      </Center>
                    </Card>
                  </HStack>
                  <HStack space={2} mt={3}>
                    <Card bgColor="#17a2b8" height={120} width={190}>
                      <Center>
                        <Text
                          fontSize={18}
                          fontWeight={800}
                          color={"white"}
                          opacity={0.9}
                        >
                          Calories Burnt
                        </Text>
                        <Text fontSize={17} fontWeight={"bold"} mt={4}>
                          {cards.calories_burnt} calories
                        </Text>
                      </Center>
                    </Card>
                  </HStack>
                  <View mt={6} pl={37}>
                    <Text fontSize={25}>General Member Fitness</Text>
                  </View>
                  <HStack space={2} mt={3}>
                    <Card bgColor="#17a2b8" height={120} width={190}>
                      <Center>
                        <Text
                          fontSize={18}
                          fontWeight={800}
                          color={"white"}
                          opacity={0.9}
                        >
                          Height
                        </Text>
                        <Text fontSize={17} fontWeight={"bold"} mt={5}>
                          {fitness.height} cm
                        </Text>
                      </Center>
                    </Card>
                    <Card bgColor="#28a745" height={120} width={190}>
                      <Center>
                        <Text
                          fontSize={18}
                          fontWeight={800}
                          color={"white"}
                          opacity={0.9}
                        >
                          Weight
                        </Text>
                        <Text fontSize={17} fontWeight={"bold"} mt={5}>
                          {fitness.weight} kg
                        </Text>
                      </Center>
                    </Card>
                  </HStack>
                  <HStack space={2} mt={3}>
                    <Card bgColor="#ffc107" height={120} width={190}>
                      <Center>
                        <Text
                          fontSize={18}
                          fontWeight={800}
                          color={"white"}
                          opacity={0.9}
                        >
                          Age
                        </Text>
                        <Text fontSize={17} fontWeight={"bold"} mt={5}>
                          {fitness.age} years
                        </Text>
                      </Center>
                    </Card>
                    <Card bgColor="#dc3545" height={120} width={190}>
                      <Center>
                        <Text
                          fontSize={18}
                          fontWeight={800}
                          color={"white"}
                          opacity={0.9}
                        >
                          BMI
                        </Text>
                        <Text fontSize={17} fontWeight={"bold"} mt={5}>
                          {parseInt(fitness.bmi)} kg/m2
                        </Text>
                      </Center>
                    </Card>
                  </HStack>
                  <HStack space={2} mt={3}>
                    <Card bgColor="#17a2b8" height={120} width={190}>
                      <Center>
                        <Text
                          fontSize={18}
                          fontWeight={800}
                          color={"white"}
                          opacity={0.9}
                        >
                          BMI Status
                        </Text>
                        <Text fontSize={17} fontWeight={"bold"} mt={5}>
                          {fitness.bmi_status}
                        </Text>
                      </Center>
                    </Card>
                    <Card bgColor="#28a745" height={120} width={190}>
                      <Center>
                        <Text
                          fontSize={18}
                          fontWeight={800}
                          color={"white"}
                          opacity={0.9}
                        >
                          Fat % Status
                        </Text>
                        <Text fontSize={17} fontWeight={"bold"} mt={5}>
                          {fitness.fat_percentage_status}
                        </Text>
                      </Center>
                    </Card>
                  </HStack>
                  <HStack space={2} mt={3}>
                    <Card bgColor="#dc3545" height={120} width={190}>
                      <Center>
                        <Text
                          fontSize={18}
                          fontWeight={800}
                          color={"white"}
                          opacity={0.9}
                        >
                          Distance covered
                        </Text>
                        <Text fontSize={17} fontWeight={"bold"} mt={5}>
                          {fitness.distance_covered} m
                        </Text>
                      </Center>
                    </Card>
                    <Card bgColor="#ffc107" height={120} width={190}>
                      <Center>
                        <Text
                          fontSize={18}
                          fontWeight={800}
                          color={"white"}
                          opacity={0.9}
                        >
                          Steps Taken
                        </Text>
                        <Text fontSize={17} fontWeight={"bold"} mt={5}>
                          {fitness.steps_taken} steps
                        </Text>
                      </Center>
                    </Card>
                  </HStack>
                  <HStack space={2} mt={3}>
                    <Card bgColor="#17a2b8" height={120} width={190}>
                      <Center>
                        <Text
                          fontSize={18}
                          fontWeight={800}
                          color={"white"}
                          opacity={0.9}
                        >
                          Stride Length
                        </Text>
                        <Text fontSize={17} fontWeight={"bold"} mt={8}>
                          {fitness.stride_length} m/step
                        </Text>
                      </Center>
                    </Card>
                    <Card bgColor="#28a745" height={120} width={190}>
                      <Center>
                        <Text
                          fontSize={18}
                          fontWeight={800}
                          color={"white"}
                          opacity={0.9}
                        >
                          Avg Calories Burnt
                        </Text>
                        <Text fontSize={17} fontWeight={"bold"} mt={1}>
                          {fitness.average_calories_burnt} calories
                        </Text>
                      </Center>
                    </Card>
                  </HStack>
                  <HStack space={2} mt={3}>
                    <Card bgColor="#ffc107" height={120} width={190}>
                      <Center>
                        <Text
                          fontSize={18}
                          fontWeight={800}
                          color={"black"}
                          opacity={0.9}
                        >
                          Avg Heart Rate
                        </Text>
                        <Text fontSize={17} fontWeight={"bold"} mt={5}>
                          {fitness.average_heart_rate} bpm
                        </Text>
                      </Center>
                    </Card>
                    <Card bgColor="#dc3545" height={120} width={190}>
                      <Center>
                        <Text
                          fontSize={18}
                          fontWeight={800}
                          color={"black"}
                          opacity={0.9}
                        >
                          Fat percentage
                        </Text>
                        <Text fontSize={17} fontWeight={"bold"} mt={5}>
                          {parseInt(fitness.fat_percentage)} %
                        </Text>
                      </Center>
                    </Card>
                  </HStack>
                </View>
              </Center>
            </View>
          )}
        </ScrollView>
        <MemberBottomDrawer />
      </KeyboardAvoidingView>
    </NativeBaseProvider>
  );
};

export default FitnessCards;
