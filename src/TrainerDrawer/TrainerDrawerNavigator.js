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
  const navigation = useNavigation();
  const getDataUser = async () => {
    const userId = await AsyncStorage.getItem("userId");
    try {
      const data = await fetch(`${global.MyVar}/api/staff/${userId}`);
      const profile = await data.json();
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
const ClearAsyncStorage = async () => {
  AsyncStorage.clear();
  navigation.navigate("Member Login");
};
  
  return (
    <DrawerContentScrollView {...props} safeArea>
      <VStack space="6" my="2" mx="1">
        <Center>
          <View>
            <Image
              style={{ width: 100, height: 100 }}
              borderRadius={100}
              source={Trainer1}
              alt="Alternate Text"
              bottom={10}
            />
          </View>
          <Text bold color="gray.700" fontSize={16}>
            {profile && profile.first_name}
          </Text>
          <Button
            bgColor={"#85C1E9"}
            onPress={() => navigation.navigate("Trainer Profile")}
          >
            <Text fontWeight={"bold"} fontSize={16}>
              View Profile
            </Text>
          </Button>
          <Text fontSize={16} fontWeight={"semibold"}>
            Trainer
          </Text>
        </Center>
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
          <Button bgColor={"#85C1E9"} onPress={ClearAsyncStorage} mr={110}>
            <HStack space={8}>
              <MaterialIcons name="logout" size={24} color="grey" />
              <Text fontWeight={"bold"} fontSize={16} color={"#36454F"}>
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

