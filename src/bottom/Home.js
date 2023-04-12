import { View, StyleSheet } from "react-native";
import React from "react";
import {
  Card,
  Center,
  HStack,
  Icon,
  NativeBaseProvider,
  ScrollView,
  Text,
} from "native-base";
import { ImageBackground } from "react-native";
import { Divider } from "@rneui/themed";
import { SafeAreaView } from "react-native-safe-area-context";
import { Gym } from "../../assets";


const Home = () => {
  return (
    <NativeBaseProvider>
      <SafeAreaView>
        <ScrollView>
          <View  
            style={{ flex:1 ,width: "100%", height: "100%" }}
          >
            <ImageBackground source={Gym}>
              <Center>
                <HStack space={4} mt={40}>
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
                      <Text fontWeight="semibold" color={"white"} fontSize={20}>
                        Gym Count
                      </Text>
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
                      <Text fontWeight="semibold" color={"white"} fontSize={20}>
                        States Count
                      </Text>
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
                      <Text fontWeight="semibold" color={"white"} fontSize={20}>
                        Cities Count
                      </Text>
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
                        <Text
                          fontWeight="semibold"
                          color={"white"}
                          fontSize={20}
                        >
                          Trainer Count
                        </Text>
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
                        <Text
                          fontWeight="semibold"
                          color={"white"}
                          fontSize={20}
                        >
                          Member Count
                        </Text>
                      </Center>
                    </View>
                  </HStack>
                </SafeAreaView>
              </Center>
              <View height={210}>

              </View>
            </ImageBackground>
          </View>
        </ScrollView>
      </SafeAreaView>
    </NativeBaseProvider>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    justifyContent: "center",
    resizeMode: "cover",
  },
});
export default Home;
