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
import { useFocusEffect } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { profile, profile1, Trainer1 } from "../../assets";
import Renew_Membership from "./Renew_Membership";
import MemberBottomDrawer from "./MemberBottomDrawer";
import MemberDashboard from "./MemberDashboard";
import MemberFeedback from "./MemberFeedback";
import MemberHealth_Forum from "./MemberHealth_Forum";
import MemberReport_Issue from "./MemberReport_Issue";
import MemberLogin from "../screens/MemberLogin"
import FitnessTracker from "./DailyTracker";
import FitnessCards from "./DisplayFitness";
import DailyTracker from "./DailyTracker";
import GeneralFitness from "./GeneralFitness";

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
    case "Fitness Blogs":
      return "amp-stories";
    case "Subscription Plans":
      return "wallet-membership";
    case "Daily Fitness":
      return "fitness-center";
    case "General Fitness":
      return "fitness-center";
    case "Fitness Tracker":
      return "accessibility";
    case "Logout":
      return "logout";
    default:
      return undefined;
  }
};

function CustomDrawerContent(props) {
  const [profile,setProfile]= React.useState(null)
  const navigation = useNavigation();
  const getDataUser = async () => {
    const userId = await AsyncStorage.getItem("userId");
    try {
      const data = await fetch(`${global.MyVar}/api/member/${userId}/`);
      const profile = await data.json();
      //console.log(profile);
      setProfile(profile);
    } catch (e) {
      console.log({ e });
    } 
  };
  useFocusEffect(
    React.useCallback(() => {
      getDataUser();
    }, [])
  );

  const ClearAsyncStorage = async () => {
    AsyncStorage.clear();
    navigation.navigate("Member Login");
  };
  return (
    <DrawerContentScrollView {...props} safeArea>
      <VStack space="6" my="2" mx="1">
        <Box px="4" left={30}>
          <View>
            <Image
              style={{ width: 110, height: 110 }}
              borderRadius={100}
              left={50}
              source={Trainer1}
              alt="profile"
              bottom={10}
            />
          </View>
          <Text left={10} bold color={"white"} fontSize={16}>
            {profile && profile.first_name}
          </Text>

          <Button
            mr={12}
            bgColor={"#343a40"}
            onPress={() => navigation.navigate("Member Profile")}
          >
            <Text fontWeight={"bold"} fontSize={16} color={"white"}>
              View Profile
            </Text>
          </Button>
          <Text left={62} fontSize={16} color={"white"}>
            Member
          </Text>
        </Box>
        <VStack divider={<Divider />} space="4">
          <VStack space="3">
            {props.state.routeNames.map((name, index) => (
              <Pressable
                key={name}
                px="5"
                py="3"
                rounded="md"
                bg={index === props.state.index ? "white" : "transparent"}
                onPress={() => {
                  props.navigation.navigate(name);
                }}
              >
                <HStack space="7" alignItems="center">
                  <Icon
                    color={index === props.state.index ? "black" : "white"}
                    size="25"
                    as={<MaterialIcons name={getIcon(name)} />}
                  />
                  <Text
                    fontWeight="500"
                    color={index === props.state.index ? "black" : "white"}
                    fontSize={16}
                  >
                    {name}
                  </Text>
                </HStack>
              </Pressable>
            ))}
          </VStack>
          <Button bgColor={"#343a40"} onPress={ClearAsyncStorage} mr={106}>
            <HStack space={8}>
              <MaterialIcons name="logout" size={24} color="white" />
              <Text fontWeight={"bold"} fontSize={16} color={"white"}>
                Logout
              </Text>
            </HStack>
          </Button>
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
          <CustomDrawerContent {...props} backgroundColor={"#343a40"} />
        )}
      >
        <Drawer.Screen
          name="Dashboard"
          component={MemberDashboard}
          options={{
            headerStyle: {
              backgroundColor: "#E8E8E8",
              height: 80,
            },
            headerTitleStyle: {
              fontSize: 20,
            },
          }}
        />
        <Drawer.Screen
          name="Feedback"
          component={MemberFeedback}
          options={{
            headerStyle: {
              backgroundColor: "#E8E8E8",
              height: 80,
            },
            headerTitleStyle: {
              fontSize: 20,
            },
          }}
        />
        <Drawer.Screen
          name="Report Issue"
          component={MemberReport_Issue}
          options={{
            headerStyle: {
              backgroundColor: "#E8E8E8",
              height: 80,
            },
            headerTitleStyle: {
              fontSize: 20,
            },
          }}
        />
        <Drawer.Screen
          name="Fitness Blogs"
          component={MemberHealth_Forum}
          options={{
            headerStyle: {
              backgroundColor: "#E8E8E8",
              height: 80,
            },
            headerTitleStyle: {
              fontSize: 20,
            },
          }}
        />
        <Drawer.Screen
          name="Subscription Plans"
          component={Renew_Membership}
          options={{
            headerStyle: {
              backgroundColor: "#E8E8E8",
              height: 80,
            },
            headerTitleStyle: {
              fontSize: 20,
            },
          }}
        />
        <Drawer.Screen
          name="Daily Fitness"
          component={DailyTracker}
          options={{
            headerStyle: {
              backgroundColor: "#E8E8E8",
              height: 80,
            },
            headerTitleStyle: {
              fontSize: 20,
            },
          }}
        />
        <Drawer.Screen
          name="General Fitness"
          component={GeneralFitness}
          options={{
            headerStyle: {
              backgroundColor: "#E8E8E8",
              height: 80,
            },
            headerTitleStyle: {
              fontSize: 20,
            },
          }}
        />
        <Drawer.Screen
          name="Fitness Tracker"
          component={FitnessCards}
          options={{
            headerStyle: {
              backgroundColor: "#E8E8E8",
              height: 80,
            },
            headerTitleStyle: {
              fontSize: 20,
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

