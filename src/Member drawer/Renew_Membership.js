import { View } from "react-native";
import React, { useLayoutEffect,useState ,useEffect} from "react";
import { useNavigation } from "@react-navigation/native";
import { MaterialIcons } from "@expo/vector-icons";
import { ActivityIndicator } from "react-native-paper";
import {
  Center,
  Text,
  Button,
  Icon,
  Container,
  Card,
  NativeBaseProvider,
  HStack,
  KeyboardAvoidingView,
  Box
} from "native-base";
import { ScrollView } from "react-native-gesture-handler";
import { FontAwesome } from "@expo/vector-icons"; 
import MemberBottomDrawer from "./MemberBottomDrawer";

const Renew_Membership = () => {
  const navigation = useNavigation();
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: true,
    });
  }, []);
  const [subscription, setSubscription] = useState([]);
  const [loading, setLoading] = useState(true);
  
  const getData = async () => {
    try {
    const data = await fetch(`http://${global.MyVar}/api/subscription_api/`);
    const subscription = await data.json();
    console.log(subscription);
    setSubscription(subscription);
    setLoading(false);
    }
    catch(e){
      console.log({e})
    }finally{
      console.log('done')
    }
  }
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
          <Center>
            <Container maxWidth="1000" mb={10}>
              {loading ? (
                <ActivityIndicator size="small" />
              ) : (
                <Box>
                  {subscription &&
                    subscription.map((object) => (
                      <Card
                        key={object.id}
                        style={{ height: 250, width: 250 }}
                        bgColor={"#e9f4fb"}
                        mt={10}
                        styles={{ boxShadow: "2px 2px 2px grey" }}
                      >
                        <Center>
                          <Text fontSize={18} fontWeight="bold">
                            {object.name}
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
                            {object.validity} Months
                          </Text>
                          <HStack>
                            <Icon
                              mt={5}
                              size="17"
                              as={
                                <FontAwesome
                                  name="rupee"
                                  size={17}
                                  color="black"
                                />
                              }
                            />
                            <Text fontSize={17} fontWeight="bold" mt={15}>
                              {object.plan_amount}
                            </Text>
                          </HStack>
                          <Text fontSize={17} fontWeight="bold" mt={15}>
                            {object.description}
                          </Text>
                        </Center>
                      </Card>
                    ))}
                </Box>
              )}
            </Container>
          </Center>
        </ScrollView>
        <MemberBottomDrawer />
      </KeyboardAvoidingView>
    </NativeBaseProvider>
  );
};

export default Renew_Membership