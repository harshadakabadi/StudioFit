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
import AsyncStorage from "@react-native-async-storage/async-storage";
import { profile, profile1, Trainer1 } from "../../assets";
import Renew_Membership from "./Renew_Membership";
import MemberBottomDrawer from "./MemberBottomDrawer";
import MemberDashboard from "./MemberDashboard";
import MemberFeedback from "./MemberFeedback";
import MemberHealth_Forum from "./MemberHealth_Forum";
import MemberReport_Issue from "./MemberReport_Issue";
import MemberLogin from "../screens/MemberLogin"
import FitnessTracker from "./FitnessTracker";

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
    case "Fitness Tracker":
      return "fitness-center";
    case "Logout":
      return "logout";
    default:
      return undefined;
  }
};

function CustomDrawerContent(props) {
  const [profile,setProfile]= React.useState(null)
  const getDataUser = async () => {
    const userId = await AsyncStorage.getItem("userId");
    try {
      const data = await fetch(`${global.MyVar}/api/member_api/${userId}/`);
      const profile = await data.json();
      console.log(profile);
      setProfile(profile);
    } catch (e) {
      console.log({ e });
    } finally {
      console.log("done");
    }
  };

  React.useEffect(() => {
    getDataUser();
  }, []);

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
              source={Trainer1}
              alt="Alternate Text"
              bottom={10}
            />
          </View>
          <Text left={10} bold color="gray.700" fontSize={16}>
            {profile && profile.first_name}
          </Text>
          <Button
            mr={12}
            bgColor={"#FF92A5"}
            onPress={() => navigation.navigate("Member Profile")}
          >
            <Text fontWeight={"bold"} fontSize={16}>
              View Profile
            </Text>
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
                bg={index === props.state.index ? "#FF647F" : "transparent"}
                onPress={() => {
                  props.navigation.navigate(name);
                }}
              >
                <HStack space="7" alignItems="center">
                  <Icon
                    color={index === props.state.index ? "black" : "gray.500"}
                    size="25"
                    as={<MaterialIcons name={getIcon(name)} />}
                  />
                  <Text
                    fontWeight="500"
                    color={index === props.state.index ? "black" : "gray.700"}
                    fontSize={16}
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
          <CustomDrawerContent {...props} backgroundColor={"#FF92A5"} />
        )}
      >
        <Drawer.Screen
          name="Dashboard"
          component={MemberDashboard}
          options={{
            headerStyle: {
              backgroundColor: "#FF92A5",
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
              backgroundColor: "#FF92A5",
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
              backgroundColor: "#FF92A5",
              height: 80,
            },
            headerTitleStyle: {
              fontSize: 20,
            },
          }}
        />
        <Drawer.Screen
          name="Health Forum"
          component={MemberHealth_Forum}
          options={{
            headerStyle: {
              backgroundColor: "#FF92A5",
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
              backgroundColor: "#FF92A5",
              height: 80,
            },
            headerTitleStyle: {
              fontSize: 20,
            },
          }}
        />
        <Drawer.Screen
          name="Fitness Tracker"
          component={FitnessTracker}
          options={{
            headerStyle: {
              backgroundColor: "#FF92A5",
              height: 80,
            },
            headerTitleStyle: {
              fontSize: 20,
            },
          }}
        />
        <Drawer.Screen
          name="Logout"
          component={MemberLogin}
          options={{
            headerShown: false,
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

