import React, { useLayoutEffect } from "react";
import {
  Box,
  Center,
  ScrollView,
  Text,
  NativeBaseProvider,
  Card
} from "native-base";


const TrainerDashboard = () => {
  return (
    <NativeBaseProvider>
      <ScrollView>
        <Center>
          <Box mt={150}>
            <Card style={{ width: 270, height: 130 }} bgColor="#e7f3fb">
              <Text fontWeight={"bold"}>Holiday </Text>
              <Text>
                There is a Holiday on 26th January on the occasion of republic
                day..
              </Text>
            </Card>
          </Box>
        </Center>
      </ScrollView>
    </NativeBaseProvider>
  );
};

export default TrainerDashboard;
