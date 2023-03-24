import React, { useLayoutEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { FontAwesome5 } from "@expo/vector-icons";
import {
  Select,
  Box,
  Center,
  CheckIcon,
  Text,
  TextArea,
  Button,
  VStack,
  Divider,
  Heading,
  Input,
  Icon,
  Container,
  Header,
  Content,
  Card,
  NativeBaseProvider,
  HStack,
} from "native-base";
import { ScrollView } from "react-native-gesture-handler";

const Health_Status = () => {
  return (
    <NativeBaseProvider>
      <ScrollView>
        <Center>
          <Container mt={19}>
            <Box mt={10}>
              <Card style={{ width: 270, height: 150 }} bgColor="#e7f3fb">
                <Center>
                  <Text fontSize={25}> Step Walked </Text>
                  <HStack space={"4"} mt={"10"}>
                    <Icon
                      size="8"
                      color={"black"}
                      as={
                        <FontAwesome5 name="walking" size={24} color="black" />
                      }
                    />
                    <Text fontSize={20}>20000 steps </Text>
                  </HStack>
                </Center>
              </Card>
            </Box>
            <Box mt={19}>
              <Card style={{ width: 270, height: 150 }} bgColor="#e7f3fb">
                <Center>
                  <Text fontSize={25}> BMI </Text>
                  <HStack space={"4"} mt={"10"}>
                    <Icon
                      size="8"
                      color={"black"}
                      as={
                        <FontAwesome5 name="weight" size={24} color="black" />
                      }
                    />
                    <Text fontSize={20}>20000</Text>
                  </HStack>
                </Center>
              </Card>
            </Box>
            <Box mt={19}>
              <Card style={{ width: 270, height: 150 }} bgColor="#e7f3fb">
                <Center>
                  <Text fontSize={25}>Calories Burnt</Text>
                  <HStack space={"4"} mt={"10"}>
                    <Icon
                      size="8"
                      color={"black"}
                      as={<FontAwesome5 name="burn" size={24} color="black" />}
                    />
                    <Text fontSize={20}>20000 </Text>
                  </HStack>
                </Center>
              </Card>
            </Box>
          </Container>
        </Center>
      </ScrollView>
    </NativeBaseProvider>
  );
};

export default Health_Status;
