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
import { useFocusEffect } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";


const MemberDashboard = () => {
  const [notification, setNotification] = useState([]);
  const [loading, setLoading] = useState(true);
  const [fitness, setFitness] = useState("");
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
      const data = await fetch(`${global.MyVar}/api/general_member_fitness/1/`);
      const fitness = await data.json();
      setFitness(fitness);
      setLoading(false);
    } catch (e) {
      console.log({ e });
    } finally {
    }
  };
  useFocusEffect(
    React.useCallback(() => {
      getData();
      getDataMember();
    }, [])
  );

  return (
    <NativeBaseProvider>
      <KeyboardAvoidingView
        behavior="height"
        style={[{ justifyContent: "center", height: "100%" }]}
      >
        <Center>
          <View mt={10}>
            <HStack space={2} mt={10}>
              <Card bgColor="#E8A317" height={120} width={190}>
                <Center>
                  <Text
                    fontSize={20}
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
              <Card bgColor="#238C00" height={120} width={190}>
                <Center>
                  <Text
                    fontSize={20}
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
                  <Text fontSize={17} fontWeight={"bold"} mt={1}>
                    {fitness.average_calories_burnt}
                  </Text>
                </Center>
              </Card>
              <Card bgColor="#dc3545" height={120} width={190}>
                <Center>
                  <Text
                    fontSize={20}
                    fontWeight={800}
                    color={"white"}
                    opacity={0.9}
                  >
                    Avg Heart rate
                  </Text>
                  <Text fontSize={17} fontWeight={"bold"} mt={8}>
                    {fitness.average_heart_rate}
                  </Text>
                </Center>
              </Card>
            </HStack>
          </View>
        </Center>
        <View>
          <ScrollView>
            <Center>
              <Card
                bgColor="#E8E8E8"
                mt={4}
                style={{ width: 400, height: 400 }}
              >
                {loading ? (
                  <ActivityIndicator size="small" />
                ) : (
                  <ScrollView>
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
                  </ScrollView>
                )}
              </Card>
            </Center>
          </ScrollView>
        </View>
        <View mb={12}>
          <MemberBottomDrawer />
        </View>
      </KeyboardAvoidingView>
    </NativeBaseProvider>
  );
};

export default MemberDashboard;
