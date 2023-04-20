import * as React from "react";
import {useNavigation } from "@react-navigation/native";
import {
  createDrawerNavigator,
  DrawerContentScrollView,
} from "@react-navigation/drawer";
import { MaterialIcons, MaterialCommunityIcons } from "@expo/vector-icons";
import { View, Image } from "react-native";
import { useFocusEffect } from "@react-navigation/native";

import {
  Button,
  Box,
  Pressable,
  VStack,
  Text,
  Center,
  HStack,
  Divider,
  Icon,
} from "native-base";

import { profile1, Trainer1 } from "../../assets";
import TrainerDashboard from "./TrainerDashboard";
import TrainerHealth_Forum from "./TrainerHealth_Forum";
import TrainerReport_Issue from "./TrainerReport_Issue";
import TrainerLogin from "../screens/TrainerLogin";
import AsyncStorage from "@react-native-async-storage/async-storage";
import MemberLogin from "../screens/MemberLogin";

const Drawer = createDrawerNavigator();

const getIcon = (screenName) => {
  switch (screenName) {
    case "Dashboard":
      return "dashboard";
    case "Report Issue":
      return "report-problem";
    case "Fitness Blogs":
      return "amp-stories";
    case "Logout":
      return "logout";
    default:
      return undefined;
  }
};

function CustomDrawerContent(props) {
  const [profile, setProfile] = React.useState(null);
  const getDataUser = async () => {
    const userId = await AsyncStorage.getItem("userId");
    console.log("I have :"+userId);
    try {
      const data = await fetch(`${global.MyVar}/api/staff/${userId}`);
      const profile = await data.json();
      console.log(profile);
      setProfile(profile);
    } catch (e) {
      console.log({ e });
    } finally {
      console.log("done");
    }
  };
useFocusEffect(
  React.useCallback(() => {
    getDataUser();
  }, [])
);
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
            mr={10}
            bgColor={"#85C1E9"}
            onPress={() => navigation.navigate("Trainer Profile")}
          >
            <Text fontWeight={"bold"} fontSize={16} right={2}>
              View Profile
            </Text>
          </Button>
          <Text left={5} fontSize={16}>
            Logged In As Trainer
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
                bg={index === props.state.index ? "#1aa7ec" : "transparent"}
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
                    fontSize={16}
                    color={index === props.state.index ? "black" : "gray.700"}
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
        screenOptions={{
          headerStyle: {
            height: 10,
          },
        }}
      >
        <Drawer.Screen
          name="Dashboard"
          component={TrainerDashboard}
          options={{
            headerStyle: {
              backgroundColor: "#85C1E9",
              height: 80,
            },
            headerTitleStyle: {
              fontSize: 20,
            },
          }}
        />
        <Drawer.Screen
          name="Report Issue"
          component={TrainerReport_Issue}
          options={{
            headerStyle: {
              backgroundColor: "#85C1E9",
              height: 80,
            },
            headerTitleStyle: {
              fontSize: 20,
            },
          }}
        />
        <Drawer.Screen
          name="Fitness Blogs"
          component={TrainerHealth_Forum}
          options={{
            headerStyle: {
              backgroundColor: "#85C1E9",
              height: 80,
            },
            headerTitleStyle: {
              fontSize: 20,
              alignItems: "center",
            },
          }}
        />
        <Drawer.Screen
          name="Logout"
          component={MemberLogin}
          options={{
            headerShown: false,
            headerStyle: {
              backgroundColor: "#85C1E9",
            },
          }}
        />
      </Drawer.Navigator>
    </Box>
  );
}

const TrainerDrawerNavigator = () => {
  return (
    <>
      <MyDrawer />
    </>
  );
};
export default TrainerDrawerNavigator;

