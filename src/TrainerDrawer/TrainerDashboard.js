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



const TrainerDashboard = () => {
   const [notification, setNotification] = useState([]);
   const [loading, setLoading] = useState(true);
   const getData = async () => {
     try {
       const data = await fetch(`${global.MyVar}/api/view_notification_api/`);
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
                      <Box mt={10} key={object.pk}>
                        <Heading color={"#7d5fff"}>
                          {object.fields.title}
                        </Heading>
                        <Text fontSize={20} mt={3}>
                          {object.fields.description}
                        </Text>
                        <Text fontSize={12} mt={1} color={"gray.400"} mb={2}>
                          posted on :{" "}
                          {new Date(object.fields.updated_at).toGMTString()}
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
