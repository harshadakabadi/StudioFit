import React, { useLayoutEffect } from "react";
import {
  Box,
  Center,
  ScrollView,
  Text,
  NativeBaseProvider,
  Card,Heading, KeyboardAvoidingView
} from "native-base";
import { useEffect, useState } from "react";
import { Divider } from "@rneui/themed";
import TrainerBottomDrawer from "./TrainerBottomDrawer";
import { ActivityIndicator } from "react-native-paper";
import { useFocusEffect } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";


const TrainerDashboard = () => {
   const [notification, setNotification] = useState([]);
   const [loading, setLoading] = useState(true);
   const getData = async () => {
     try {
       const data = await fetch(
         `${global.MyVar}/api/notification/?is_active=true&ordering=-created_at`
       );
       const notification = await data.json();
       setNotification(notification);
       setLoading(false);
     } catch (e) {
       console.log({ e });
     } finally {
       console.log("done");
     }
   };
   const getDataBranchId = async () => {
     const userId = await AsyncStorage.getItem("userId");
     try {
       const data = await fetch(`${global.MyVar}/api/staff/${userId}/`);
       if (data.status === 200) {
         const profile = await data.json();
         await AsyncStorage.setItem("member", JSON.stringify(profile));
         const branchid = JSON.stringify(profile.branch[0]);
         await AsyncStorage.setItem("branchid", branchid[0]);
         console.log(branchid);
       } else {
         console.log("something wrong");
       }
     } catch (e) {
       console.log({ e });
     }
   };
  
useFocusEffect(
  React.useCallback(() => {
    getData();
    getDataBranchId();
  }, [])
);
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
            <Center>
              <Card bgColor="#e7f3fb" mt={4} style={{ width: 400 }}>
                <ScrollView>
                  <Center>
                    <Heading>Notifications</Heading>
                  </Center>

                  {notification &&
                    notification.map((object) => (
                      <Box mt={10} key={object.id}>
                        <Heading color={"#7d5fff"}>
                          {object && object.title}
                        </Heading>
                        <Text fontSize={20} mt={3}>
                          {object && object.description}
                        </Text>
                        <Text fontSize={12} mt={1} color={"gray.400"} mb={2}>
                          posted on :{" "}
                          {object && new Date(object.updated_at).toGMTString()}
                        </Text>
                        <Box mt={3}>
                          <Divider />
                        </Box>
                      </Box>
                    ))}
                </ScrollView>
              </Card>
            </Center>
          )}
        </ScrollView>
        <TrainerBottomDrawer />
      </KeyboardAvoidingView>
    </NativeBaseProvider>
  );
};

export default TrainerDashboard;
