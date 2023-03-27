import { View } from "react-native";
import React, { useLayoutEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { MaterialIcons } from "@expo/vector-icons";
import {
  Select,
  Box,
  Center,
  CheckIcon,
  Text,
  Button,
  Icon,
  Container,
  Card,
  NativeBaseProvider,
  HStack,
} from "native-base";
import { ScrollView } from "react-native-gesture-handler";
import { FontAwesome } from "@expo/vector-icons"; 

const Renew_Membership = () => {
  const navigation = useNavigation();
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: true,
    });
  }, []);
const type = [
  "Monthly Plan",
  "Three Months Plan",
  "Semi-annual Plan",
  "Annual Plan",
];
const duration = [1, 3, 6, 12];
const price = [800, 2200, 4000, 7000];
const description = [
  "Perfect for beginners!",
  "Great for those who take wellness seriously",
  "Great for those who take wellness seriously",
  "Great for those who take wellness seriously",
];
  return (
    <NativeBaseProvider>
      <ScrollView>
        <Center>
          <Container maxWidth="1000">
            {type.map((element, index) => (
              <Card
                key={element}
                style={{ height: 400, width: 250 }}
                bgColor={"#e9f4fb"}
                mt={10}
                styles={{ boxShadow: "2px 2px 2px grey" }}
              >
                <Center>
                  <Text fontSize={18} fontWeight="bold">
                    {element}
                  </Text>
                  <HStack space="3">
                    <Icon
                      mt={3}
                      size="8"
                      as={
                        <MaterialIcons
                          name="local-offer"
                          size={24}
                          color="black"
                        />
                      }
                    />
                  </HStack>
                  <Text fontSize={17} fontWeight="bold" mt={15}>
                    {duration[index]}
                  </Text>
                  <HStack>
                    <Icon
                      mt={5}
                      size="17"
                      as={<FontAwesome name="rupee" size={17} color="black" />}
                    />
                    <Text fontSize={17} fontWeight="bold" mt={15}>
                      {price[index]}
                    </Text>
                  </HStack>
                  <Text fontSize={17} fontWeight="bold" mt={15}>
                    {description[index]}
                  </Text>

                  <Button
                    mt={100}
                    mb={6}
                    color="primary"
                    borderColor="white"
                    borderWidth={1}
                    width={"100%"}
                    onPress={() => navigation.navigate("Payment")}
                  >
                    <Text borderRadius={8} color="white">
                      Purchase
                    </Text>
                  </Button>
                </Center>
              </Card>
            ))}

            {/* <Card
              style={{ height: 300, width: 250 }}
              mt={10}
              bgColor={"#e9f4fb"}
              borderWidth={3}
            >
              <Center>
                <Text fontSize={18} fontWeight="bold">
                  Six Months Plan
                </Text>
                <HStack space="3">
                  <Icon
                    mt={3}
                    size="8"
                    as={
                      <MaterialIcons
                        name="local-offer"
                        size={24}
                        color="black"
                      />
                    }
                  />
                  <Text fontSize={17} fontWeight="bold" mt={15}>
                    Rs 2500
                  </Text>
                </HStack>
                <Button
                  mt={20}
                  mb={6}
                  bgColor={"primary"}
                  borderWidth={1}
                  borderColor="white"
                >
                  <Text borderRadius={8} color="white">
                    Purchase
                  </Text>
                </Button>
              </Center>
            </Card>
            <Card
              style={{ height: 300, width: 250 }}
              mt={10}
              bgColor={"#e9f4fb"}
              borderWidth={3}
            >
              <Center>
                <Text fontSize={18} fontWeight="bold">
                  One Year Plan
                </Text>
                <HStack space="3">
                  <Icon
                    mt={3}
                    size="8"
                    as={
                      <MaterialIcons
                        name="local-offer"
                        size={24}
                        color="black"
                      />
                    }
                  />
                  <Text fontSize={17} fontWeight="bold" mt={15}>
                    Rs 5000
                  </Text>
                </HStack>
                <Button
                  mt={20}
                  mb={6}
                  bgColor={"primary"}
                  borderColor="white"
                  borderWidth={1}
                >
                  <Text borderRadius={8} color="white">
                    Purchase
                  </Text>
                </Button>
              </Center>
            </Card> */}
          </Container>
        </Center>
      </ScrollView>
    </NativeBaseProvider>
  );
};

export default Renew_Membership