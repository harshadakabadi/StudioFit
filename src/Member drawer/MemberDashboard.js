import React, { useEffect, useState } from "react";
import {
  Box,
  Center,
  View,
  ScrollView,
  Text,
  NativeBaseProvider,
  Card,
  HStack,
  Heading,
  KeyboardAvoidingView
} from "native-base";
import axios from "axios";
import { Divider } from "@rneui/themed";
import MemberBottomDrawer from "./MemberBottomDrawer";
import { ActivityIndicator } from "react-native-paper";


const MemberDashboard = () => {
  const [notification, setNotification] = useState([]);
  const [loading, setLoading] = useState(true);
  const getData = async () => {
    try {
      const data = await fetch(
        `http://${global.MyVar}/api/notification_api/`
      );
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
  useEffect(() => {
    getData();
  }, []);

  return (
    <NativeBaseProvider>
      <KeyboardAvoidingView
        behavior="height"
        style={[{ justifyContent: "center", height: 670 }]}
      >
        <ScrollView>
          <Center>
            <View mt={10}>
              <HStack space={2}>
                <Card bgColor="#e7f3fb" height={100} width={170}>
                  <Center>
                    <Text
                      fontSize={18}
                      fontWeight={"bold"}
                      color={"#7d5fff"}
                      opacity={0.9}
                    >
                      Calories Burnt
                    </Text>
                    <Text fontSize={17} fontWeight={"bold"} mt={3}>
                      2000
                    </Text>
                  </Center>
                </Card>
                <Card bgColor="#e7f3fb" height={100} width={170}>
                  <Center>
                    <Text
                      fontSize={18}
                      fontWeight={"bold"}
                      color={"#7d5fff"}
                      opacity={0.9}
                    >
                      Steps Walked
                    </Text>
                    <Text fontSize={17} fontWeight={"bold"} mt={3}>
                      2000
                    </Text>
                  </Center>
                </Card>
              </HStack>
              <HStack space={2} mt={3}>
                <Card bgColor="#e7f3fb" height={100} width={170}>
                  <Center>
                    <Text
                      fontSize={18}
                      fontWeight={"bold"}
                      color={"#7d5fff"}
                      opacity={0.9}
                    >
                      BMI
                    </Text>
                    <Text fontSize={17} fontWeight={"bold"} mt={3}>
                      40
                    </Text>
                  </Center>
                </Card>
                <Card bgColor="#e7f3fb" height={100} width={170}>
                  <Center>
                    <Text
                      fontSize={18}
                      fontWeight={"bold"}
                      color={"#7d5fff"}
                      opacity={0.9}
                    >
                      Fat percentage
                    </Text>
                    <Text fontSize={17} fontWeight={"bold"} mt={3}>
                      20%
                    </Text>
                  </Center>
                </Card>
              </HStack>
            </View>
          </Center>
          <Center>
            <Card bgColor="#e7f3fb" mt={4} style={{ width: 350, height: 500 }}>
              <ScrollView>
                {loading ? (
                  <ActivityIndicator size="small" />
                ) : (
                  <View>
                    <Center>
                      <Heading >Notifications</Heading>
                    </Center>
                    <Center>
                      <View>
                        {notification &&
                          notification.map((object) => (
                            <Box mt={10} key={object.id}>
                              <Heading color={"#7d5fff"}>
                                {object.title}
                              </Heading>
                              <Text fontSize={20} mt={3}>
                                {object.description}
                              </Text>
                              <Box mt={3}>
                                <Divider />
                              </Box>
                            </Box>
                          ))}
                      </View>
                    </Center>
                  </View>
                )}
              </ScrollView>
            </Card>
          </Center>
        </ScrollView>
        <MemberBottomDrawer />
      </KeyboardAvoidingView>
    </NativeBaseProvider>
  );
};

export default MemberDashboard;
