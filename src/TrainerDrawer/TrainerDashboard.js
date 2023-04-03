import React, { useLayoutEffect } from "react";
import {
  Box,
  Center,
  ScrollView,
  Text,
  NativeBaseProvider,
  Card,Heading
} from "native-base";
import { useEffect, useState } from "react";
import { Divider } from "@rneui/themed";


const TrainerDashboard = () => {
   const [notification, setNotification] = useState([]);
   const getData = async () => {
     try {
       const data = await fetch(
         "http://192.168.0.102:8000/api/notification_api"
       );
       const notification = await data.json();
       console.log(notification);
       setNotification(notification);
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
      <ScrollView>
        <Center>
          <Card bgColor="#e7f3fb" mt={4} style={{ width: 350 }}>
            <ScrollView>
              <Center>
                <Heading>Notifications</Heading>
              </Center>

              {notification &&
                notification.map((object) => (
                  <Box mt={10} key={object.id}>
                    <Heading>{object.title}</Heading>
                    <Text mt={3}>{object.description}</Text>
                    <Box mt={3}>
                      <Divider />
                    </Box>
                  </Box>
                ))}
            </ScrollView>
          </Card>
        </Center>
      </ScrollView>
    </NativeBaseProvider>
  );
};

export default TrainerDashboard;
