import { View } from "react-native";
import React, { useLayoutEffect, useState, useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { MaterialIcons } from "@expo/vector-icons";
import { ActivityIndicator } from "react-native-paper";
import { useFocusEffect } from "@react-navigation/native";

import {
  Center,
  Text,
  Container,
  Card,
  NativeBaseProvider,
  HStack,
  KeyboardAvoidingView,
  Box,
} from "native-base";
import { ScrollView } from "react-native-gesture-handler";

const Centers= () => {
  const navigation = useNavigation();
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: true,
    });
  }, []);
  const [center, setCenter] = useState([]);
  const [loading, setLoading] = useState(true);

  const getData = async () => {
    try {
      const data = await fetch(
        `${global.MyVar}/api/branch/?status=Functioning`
      );
      const center = await data.json();
      setCenter(center);
      setLoading(false);
    } catch (e) {
      console.log({ e });
    } finally {
      console.log("done");
    }
  };
  useFocusEffect(
    React.useCallback(() => {
      getData();
    }, [])
  );

  return (
    <NativeBaseProvider>
      <KeyboardAvoidingView
        behavior="height"
        style={[{ justifyContent: "center", height: "100%" }]}
      >
        <ScrollView>
          <Center>
            <Container maxWidth="1000" mb={10}>
              {loading ? (
                <ActivityIndicator size="small" />
              ) : (
                <Box>
                  {center &&
                    center.map((object) => (
                      <Card
                        key={object.id}
                        style={{ width: 320 }}
                        bgColor={"#E8E8E8"}
                        mt={10}
                        styles={{ boxShadow: "2px 2px 2px grey" }}
                      >
                        <Center>
                          <Text fontSize={18} fontWeight="bold">
                            Branch Name : {object.locality_name}
                          </Text>
                          <Text fontSize={17} fontWeight="bold" mt={15}>
                            Status : {object.status}
                          </Text>
                          <Text fontSize={17} fontWeight="bold" mt={15}>
                            Address
                          </Text>
                          <Text fontSize={17} fontWeight="bold" mt={3}>
                            Locality name : {object.address}
                          </Text>
                          <Text fontSize={17} fontWeight="bold" mt={3}>
                            City : {object.city}
                          </Text>
                          <Text fontSize={17} fontWeight="bold" mt={15}>
                            State : {object.state}
                          </Text>
                          <Text fontSize={17} fontWeight="bold" mt={15}>
                            Pincode : {object.pincode}
                          </Text>
                          <Text fontSize={17} fontWeight="bold" mt={15}>
                            Mobile No. : {object.mobile}
                          </Text>
                          <Text fontSize={17} fontWeight="bold" mt={15} mb={10}>
                            Email : {object.email}
                          </Text>
                        </Center>
                      </Card>
                    ))}
                </Box>
              )}
            </Container>
          </Center>
        </ScrollView>
      </KeyboardAvoidingView>
    </NativeBaseProvider>
  );
};

export default Centers;
