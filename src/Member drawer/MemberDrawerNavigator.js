import * as React from "react";
import {  useNavigation } from "@react-navigation/native";
import {
  createDrawerNavigator,
  DrawerContentScrollView,
} from "@react-navigation/drawer";
import { MaterialIcons } from "@expo/vector-icons";
import { View, Image } from "react-native";
import {
  Button,
  Box,
  Pressable,
  VStack,
  Text,
  HStack,
  Divider,
  Icon,
 
} from "native-base";
import { profile, profile1 } from "../../assets";
import Renew_Membership from "./Renew_Membership";
import MemberBottomDrawer from "./MemberBottomDrawer";
import MemberDashboard from "./MemberDashboard";
import MemberFeedback from "./MemberFeedback";
import MemberHealth_Forum from "./MemberHealth_Forum";
import MemberReport_Issue from "./MemberReport_Issue";
import MemberLogin from "../screens/MemberLogin"

global.__reanimatedWorkletInit = () => {};
const Drawer = createDrawerNavigator();

const getIcon = (screenName) => {
  switch (screenName) {
    case "Dashboard":
      return "dashboard";
    case "Feedback":
      return "feedback";
    case "Report Issue":
      return "report-problem";
    case "Health Forum":
      return "amp-stories";
    case "Subscription Plans":
      return "wallet-membership";
    case "Logout":
      return "logout";
    default:
      return undefined;
  }
};

function CustomDrawerContent(props) {
  const navigation= useNavigation();
  return (
    <DrawerContentScrollView {...props} safeArea>
      <VStack space="6" my="2" mx="1">
        <Box px="4" left={30}>
          <View>
            <Image
              style={{ width: 90, height: 90 }}
              borderRadius={100}
              left={50}
              source={profile1}
              alt="Alternate Text"
              bottom={10}
            />
          </View>
          <Text left={10} bold color="gray.700">
            Harshada Kabadi
          </Text>
          <Button
            mr={10}
            bgColor={"#85C1E9"}
            onPress={() => navigation.navigate("Member Profile")}
          >
            <Text fontWeight={"bold"}>View Profile</Text>
          </Button>
        </Box>
        <VStack divider={<Divider />} space="4">
          <VStack space="3">
            {props.state.routeNames.map((name, index) => (
              <Pressable
                key={name}
                px="5"
                py="3"
                rounded="md"
                bg={
                  index === props.state.index
                    ? "rgba(6, 182, 212, 0.1)"
                    : "transparent"
                }
                onPress={() => {
                  props.navigation.navigate(name);
                }}
              >
                <HStack space="7" alignItems="center">
                  <Icon
                    color={
                      index === props.state.index ? "primary.500" : "gray.500"
                    }
                    size="5"
                    as={<MaterialIcons name={getIcon(name)} />}
                  />
                  <Text
                    fontWeight="500"
                    color={
                      index === props.state.index ? "primary.500" : "gray.700"
                    }
                  >
                    {name}
                  </Text>
                </HStack>
              </Pressable>
            ))}
          </VStack>
        </VStack>
      </VStack>
    </DrawerContentScrollView>
  );
}
function MyDrawer() {
  return (
    <Box safeArea flex={1}>
      <Drawer.Navigator
        drawerContent={(props) => (
          <CustomDrawerContent {...props} backgroundColor={"#85C1E9"} />
        )}
      >
        <Drawer.Screen
          name="Dashboard"
          component={MemberDashboard}
          options={{
            headerStyle: {
              backgroundColor: "#85C1E9",
            },
          }}
        />
        <Drawer.Screen
          name="Feedback"
          component={MemberFeedback}
          options={{
            headerStyle: {
              backgroundColor: "#85C1E9",
            },
          }}
        />
        <Drawer.Screen
          name="Report Issue"
          component={MemberReport_Issue}
          options={{
            headerStyle: {
              backgroundColor: "#85C1E9",
            },
          }}
        />
        <Drawer.Screen
          name="Health Forum"
          component={MemberHealth_Forum}
          options={{
            headerStyle: {
              backgroundColor: "#85C1E9",
            },
          }}
        />
        <Drawer.Screen
          name="Subscription Plans"
          component={Renew_Membership}
          options={{
            headerStyle: {
              backgroundColor: "#85C1E9",
            },
          }}
        />
        <Drawer.Screen
          name="Logout"
          component={MemberLogin}
          options={{
            headerShown:false,
            headerStyle: {
              backgroundColor: "#85C1E9",
            },
          }}
        />
      </Drawer.Navigator>
    </Box>
  );
}
const MemberDrawerNavigator = () => {
  return (
    <>
      <MyDrawer />
    </>
  );
};
export default MemberDrawerNavigator;

