import { View, StyleSheet } from "react-native";
import React from "react";
import {
  Card,
  Center,
  HStack,
  Icon,
  Image,
  NativeBaseProvider,
  ScrollView,
  Text,
} from "native-base";
import { Divider } from "@rneui/themed";
import { SafeAreaView } from "react-native-safe-area-context";

const Home = () => {
  return (
    <NativeBaseProvider>
      <ScrollView>
        <Image
          height={400}
          source={require("../../assets/gym.jpg")}
          alt="Gym image"
        />
        <Divider />
        <Center>
          <HStack space={4}>
            <View>
              <Center>
                <Card
                  mt={20}
                  width="100"
                  height="100"
                  bgColor="#e99265"
                  borderRadius={100}
                >
                  <Center>
                    <Text mt={15} fontWeight="bold" fontSize={25}>
                      50
                    </Text>
                  </Center>
                </Card>
                <Text fontWeight="semibold">Gym Count</Text>
              </Center>
            </View>
            <View>
              <Center>
                <Card
                  mt={5}
                  width="100"
                  height="100"
                  bgColor="#e99265"
                  borderRadius={100}
                >
                  <Center>
                    <Text mt={15} fontWeight="bold" fontSize={25}>
                      2
                    </Text>
                  </Center>
                </Card>
                <Text fontWeight="semibold">States Count</Text>
              </Center>
            </View>
            <View>
              <Center>
                <Card
                  mt={20}
                  width="100"
                  height="100"
                  bgColor="#e99265"
                  borderRadius={100}
                >
                  <Center>
                    <Text mt={15} fontWeight="bold" fontSize={25}>
                      10
                    </Text>
                  </Center>
                </Card>
                <Text fontWeight="semibold">Cities Count</Text>
              </Center>
            </View>
          </HStack>
          <SafeAreaView>
            <HStack space={47} mb={5}>
              <View>
                <Center>
                  <Card
                    mt={5}
                    width="100"
                    height="100"
                    bgColor="#e99265"
                    borderRadius={100}
                  >
                    <Center>
                      <Text mt={15} fontWeight="bold" fontSize={25}>
                        30
                      </Text>
                    </Center>
                  </Card>
                  <Text fontWeight="semibold">Trainer Count</Text>
                </Center>
              </View>
              <View>
                <Center>
                  <Card
                    mt={5}
                    width="100"
                    height="100"
                    bgColor="#e99265"
                    borderRadius={100}
                  >
                    <Center>
                      <Text mt={15} fontWeight="bold" fontSize={25}>
                        200
                      </Text>
                    </Center>
                  </Card>
                  <Text fontWeight="semibold">Member Count</Text>
                </Center>
              </View>
            </HStack>
          </SafeAreaView>
        </Center>
      </ScrollView>
    </NativeBaseProvider>
  );
};

export default Home;
