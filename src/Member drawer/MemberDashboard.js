import React, { useEffect, useState} from "react";
import StyleSheet from "react-native";
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
import { useFocusEffect } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";

const MemberDashboard = () => {
  const [notification, setNotification] = useState([]);
  const [loading, setLoading] = useState(true);
  const [fitness, setFitness] = useState("");
  const [dailyfitness, setDailyFitness] = useState("");
  const getData = async () => {
    try {
      const data = await fetch(`${global.MyVar}/api/view_notification/`);
      const notification = await data.json();
      console.log(notification);
      setNotification(notification);
      setLoading(false);
    } catch (e) {
      console.log({ e });
    } finally {
      console.log("done");
    }
  };
  const getDataMember = async () => {
    const userId = await AsyncStorage.getItem("userId");
    try {
      const data = await fetch(`${global.MyVar}/api/general_member_fitness/${userId}/`);
      const fitness = await data.json();
      setFitness(fitness);
      setLoading(false);
    } catch (e) {
      console.log({ e });
    } finally {
    }
  };
  const getDailyFitness = async () => {
    const userId = await AsyncStorage.getItem("userId");
    try {
      const data = await fetch(
        `${global.MyVar}/api/daily_member_fitness/${userId}/`
      );
      const dailyfitness = await data.json();
      setDailyFitness(dailyfitness);
      setLoading(false);
    } catch (e) {
      console.log({ e });
    } finally {
    }
  };
  const getCardColor_BMI_status = (category) => {
    switch (category) {
      case "Healthy":
        return "green";
      case "Severly underweight":
        return "red";
      case "Underweight":
        return "#ffa700";
      case "Overweight":
        return "#ffa700";
      case "Obesse (Class I obesity)":
        return "orange";
      case "Obesse (Class II obesity)":
        return "#ff0000";
      case "Severly obesse (Class III obesity)":
        return "red";
      case "Height or weight cannot be zero or negative":
        return "gray";
        default:
          return "gray";
    }
  };
  const getCardColorFat_status = (category) => {
    switch (category) {
      case "Dangerously low":
        return "red";
      case "Excellent":
        return "green";
      case "Good":
        return "#ffa700";
      case "Fair":
        return "orange";
      case "Poor":
        return "#ff0000";
      default:
        return "gray";
    }
  };
  useFocusEffect(
    React.useCallback(() => {
      getData();
      getDataMember();
      getDailyFitness();
    }, [])
  );

  return (
    <NativeBaseProvider>
      <KeyboardAvoidingView
        behavior="height"
        style={[{ justifyContent: "center", height: "100%" }]}
      >
        <ScrollView>
          <Center>
            <View mt={10}>
              <HStack space={2}>
                <Card bgColor="#17a2b8" height={120} width={190}>
                  <Center>
                    <Text
                      fontSize={20}
                      fontWeight={800}
                      color={"white"}
                      opacity={0.9}
                    >
                      Step Walked
                    </Text>
                    <Text fontSize={17} fontWeight={"bold"} mt={5}>
                      {dailyfitness.steps_walked}
                    </Text>
                  </Center>
                </Card>
                <Card bgColor="#17a2b8" height={120} width={190}>
                  <Center>
                    <Text
                      fontSize={20}
                      fontWeight={800}
                      color={"white"}
                      opacity={0.9}
                    >
                      Calories Burnt
                    </Text>
                    <Text fontSize={17} fontWeight={"bold"} mt={5}>
                      {dailyfitness.calories_burnt}
                    </Text>
                  </Center>
                </Card>
              </HStack>
              <HStack space={2} mt={3}>
                <Card bgColor="#17a2b8" height={120} width={190}>
                  <Center>
                    <Text
                      fontSize={20}
                      fontWeight={800}
                      color={"white"}
                      opacity={0.9}
                    >
                      Heart Rate
                    </Text>
                    <Text fontSize={17} fontWeight={"bold"} mt={5}>
                      {dailyfitness.heart_rate}
                    </Text>
                  </Center>
                </Card>
                <Card bgColor="#17a2b8" height={120} width={190}>
                  <Center>
                    <Text
                      fontSize={20}
                      fontWeight={800}
                      color={"white"}
                      opacity={0.9}
                    >
                      Weight Loss
                    </Text>
                    <Text fontSize={17} fontWeight={"bold"} mt={5}>
                      {Math.round(dailyfitness.weight_loss)}
                    </Text>
                  </Center>
                </Card>
              </HStack>
              <HStack space={2} mt={3}>
                <Card bgColor="#17a2b8" height={120} width={190}>
                  <Center>
                    <Text
                      fontSize={20}
                      fontWeight={800}
                      color={"white"}
                      opacity={0.9}
                    >
                      Avg Calories Burnt
                    </Text>
                    <Text fontSize={17} fontWeight={"bold"} mt={5}>
                      {fitness.average_calories_burnt}
                    </Text>
                  </Center>
                </Card>
                <Card bgColor="#17a2b8" height={120} width={190}>
                  <Center>
                    <Text
                      fontSize={20}
                      fontWeight={800}
                      color={"white"}
                      opacity={0.9}
                    >
                      Avg Heart rate
                    </Text>
                    <Text fontSize={17} fontWeight={"bold"} mt={5}>
                      {fitness.average_heart_rate}
                    </Text>
                  </Center>
                </Card>
              </HStack>
              <HStack space={2} mt={3}>
                <Card
                  bgColor="#17a2b8"
                  height={120}
                  width={190}
                  style={[
                    {
                      backgroundColor: getCardColor_BMI_status(
                        fitness.bmi_status
                      ),
                    },
                  ]}
                >
                  <Center>
                    <Text
                      fontSize={20}
                      fontWeight={800}
                      color={"white"}
                      opacity={0.9}
                    >
                      BMI
                    </Text>
                    <Text fontSize={17} fontWeight={"bold"} mt={1}>
                      {Math.round(fitness.bmi)}
                    </Text>
                    <Text fontSize={16} fontWeight={"semibold"}>{fitness.bmi_status}</Text>
                  </Center>
                </Card>
                <Card
                  bgColor="#dc3545"
                  height={120}
                  width={190}
                  style={[
                    {
                      backgroundColor: getCardColorFat_status(
                        fitness.fat_percentage_status
                      ),
                    },
                  ]}
                >
                  <Center>
                    <Text
                      fontSize={20}
                      fontWeight={800}
                      color={"white"}
                      opacity={0.9}
                    >
                      Fat %
                    </Text>
                    <Text fontSize={17} fontWeight={"bold"} mt={1}>
                      {Math.round(fitness.fat_percentage)}
                    </Text>
                    <Text fontSize={16} fontWeight={"semibold"}>{fitness.fat_percentage_status}</Text>
                  </Center>
                </Card>
              </HStack>
            </View>
          </Center>
          <Center>
            <Card bgColor="#E8E8E8" mt={4} style={{ width: 400, height: 400 }}>
              {loading ? (
                <ActivityIndicator size="small" />
              ) : (
                <View bgColor={"black"}>
                  <Center mt={2} mb={3}>
                    <Heading color={"white"}>Notifications</Heading>
                  </Center>
                  {notification &&
                    notification.map((object) => (
                      <Box key={object.pk} bgColor={"grey"}>
                        <Heading mt={2} color={"lightblue"}>
                          {object.fields.title}
                        </Heading>
                        <Text fontSize={20} mt={3} color={"white"}>
                          {object.fields.description}
                        </Text>
                        <Text fontSize={12} mt={1} color={"white"} mb={2}>
                          posted on :
                          {new Date(object.fields.updated_at).toGMTString()}
                        </Text>
                        <Box mt={3}>
                          <Divider />
                        </Box>
                      </Box>
                    ))}
                </View>
              )}
            </Card>
          </Center>
        </ScrollView>

        <View>
          <MemberBottomDrawer />
        </View>
      </KeyboardAvoidingView>
    </NativeBaseProvider>
  );
};

export default MemberDashboard;
