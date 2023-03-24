import * as React from "react";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import {
  createDrawerNavigator,
  DrawerContentScrollView,
} from "@react-navigation/drawer";
import { MaterialIcons, MaterialCommunityIcons } from "@expo/vector-icons";
import { View, Image } from "react-native";
import {
  Button,
  Box,
  Pressable,
  Heading,
  VStack,
  Text,
  Center,
  HStack,
  Divider,
  Icon,
  NativeBaseProvider,
  Overlay,
} from "native-base";
import { profile } from "../../assets";
import Feedback from './Feedback';
import Report_Issue from "./Report_Issue";
import Health_Forum from "./Health_Forum";
import Health_Status from "./Health_Status";
import { NativeScreenContainer } from "react-native-screens";
import Renew_Membership from "./Renew_Membership";
import Logout from "./Logout";
import Dashboard from './Dashboard'
import BottomDrawer from "./BottomDrawer";
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
    case "Renew Membership":
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
      <VStack space="6" my="2" mx="1" >
        <Box px="4" left={30}>
          <View>
            <Image
              style={{ width: 90, height: 90 }}
              borderRadius={100}
              left={50}
              source={profile}
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
            onPress={() => navigation.navigate("Profile")}
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
          component={Dashboard}
          options={{
            headerStyle: {
              backgroundColor: "#85C1E9",
            },
          }}
        />
        <Drawer.Screen
          name="Feedback"
          component={Feedback}
          options={{
            headerStyle: {
              backgroundColor: "#85C1E9",
            },
          }}
        />
        <Drawer.Screen
          name="Report Issue"
          component={Report_Issue}
          options={{
            headerStyle: {
              backgroundColor: "#85C1E9",
            },
          }}
        />
        <Drawer.Screen
          name="Health Forum"
          component={Health_Forum}
          options={{
            headerStyle: {
              backgroundColor: "#85C1E9",
            },
          }}
        />
        <Drawer.Screen
          name="Renew Membership"
          component={Renew_Membership}
          options={{
            
            headerStyle: {
              backgroundColor: "#85C1E9",
            },
          }}
        />
        <Drawer.Screen
          name="Logout"
          component={Logout}
          options={{
            headerStyle: {
              backgroundColor: "#85C1E9",
            },
          }}
        />
      </Drawer.Navigator>
    </Box>
  );
}
const DrawerNavigator = () => {
  return (
    <>
        <MyDrawer/>
        <BottomDrawer/>
    </>
  );
};
export default DrawerNavigator

