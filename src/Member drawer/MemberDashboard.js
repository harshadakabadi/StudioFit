import React from "react";
import {
  Box,
  Center,
  View,
  ScrollView,
  Text,
  NativeBaseProvider,
  Card,
  HStack
} from "native-base";

const MemberDashboard = () => {
  return (
    <NativeBaseProvider>
      <ScrollView>
        <Center>
          <View mt={20}>
            <HStack space={2}>
              <Card bgColor="#e7f3fb" height={100} width={160}>
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
              <Card bgColor="#e7f3fb" height={100} width={160}>
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
              <Card bgColor="#e7f3fb" height={100} width={160}>
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
              <Card bgColor="#e7f3fb" height={100} width={160}>
                <Center>
                  <Text
                    fontSize={18}
                    fontWeight={"bold"}
                    color={"#7d5fff"}
                    opacity={0.9}
                  >
                    Fat Percentage
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
          <Box mt={50}>
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

export default MemberDashboard;
