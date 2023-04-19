import { View, StyleSheet } from "react-native";
import React, { useState,useEffect } from "react";
import {
  Card,
  Center,
  HStack,
  NativeBaseProvider,
  ScrollView,
  Text,
} from "native-base";
import { ImageBackground } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Gym } from "../../assets";


const HomeMember = () => {
  const [home , setHome] = useState('');
  const getData = async () => {
    try {
      const data = await fetch(`http://192.168.1.11:8000/api/homepage/`);
      const home = await data.json();
      setHome(home);
      setLoading(false);
    } catch (e) {
      console.log({ e });
    } finally {
      // console.log("done");
    }
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <NativeBaseProvider>
      <SafeAreaView>
        <ScrollView>
          <View style={{ flex: 1, width: "100%", height: "100%" }}>
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
                            {home.state_count}
                          </Text>
                        </Center>
                      </Card>
                      <Text fontWeight="semibold" color={"white"} fontSize={20}>
                        States
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
                            {home.branch_count}
                          </Text>
                        </Center>
                      </Card>
                      <Text fontWeight="semibold" color={"white"} fontSize={20}>
                        Branches
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
                            {home.city_count}
                          </Text>
                        </Center>
                      </Card>
                      <Text fontWeight="semibold" color={"white"} fontSize={20}>
                        Cities
                      </Text>
                    </Center>
                  </View>
                </HStack>
                <SafeAreaView>
                  <HStack space={4} mb={5}>
                    <View>
                      <Center>
                        <Card
                          mt={3}
                          width="100"
                          height="100"
                          bgColor="#e99265"
                          borderRadius={100}
                        >
                          <Center>
                            <Text mt={15} fontWeight="bold" fontSize={25}>
                              {home.trainer_count}
                            </Text>
                          </Center>
                        </Card>
                        <Text
                          fontWeight="semibold"
                          color={"white"}
                          fontSize={20}
                        >
                          Trainers
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
                              {home.member_count}
                            </Text>
                          </Center>
                        </Card>
                        <Text
                          fontWeight="semibold"
                          color={"white"}
                          fontSize={20}
                        >
                          Members
                        </Text>
                      </Center>
                    </View>
                    <View>
                      <Center>
                        <Card
                          mt={3}
                          width="100"
                          height="100"
                          bgColor="#e99265"
                          borderRadius={100}
                        >
                          <Center>
                            <Text mt={15} fontWeight="bold" fontSize={25}>
                              {home.average_rating}
                            </Text>
                          </Center>
                        </Card>
                        <Text
                          fontWeight="semibold"
                          color={"white"}
                          fontSize={20}
                        >
                          Ratings
                        </Text>
                      </Center>
                    </View>
                  </HStack>
                </SafeAreaView>
              </Center>
              <View height={210}></View>
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
export default HomeMember;
