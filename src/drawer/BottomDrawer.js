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


export default function BottomDrawer() {
  const [selected, setSelected] = React.useState(1);
  const navigation = useNavigation();
  return (
    <HStack bg="#85C1E9" alignItems="center" pb={3}>
      <Pressable
        cursor="pointer"
        opacity={selected === 0 ? 1 : 0.5}
        py="3"
        flex={1}
        onPressOut={() => setSelected(0)}
        onPress={() => navigation.navigate("Home")}
      >
        <Center>
          <Icon
            mb="1"
            as={
              <MaterialCommunityIcons
                name={selected === 0 ? "home" : "home-outline"}
              />
            }
            color="white"
            size="sm"
          />
          <Text color="white" fontSize="12">
            Home
          </Text>
        </Center>
      </Pressable>
      <Pressable
        cursor="pointer"
        opacity={selected === 1 ? 1 : 0.5}
        py="2"
        flex={1}
        onPressOut={() => setSelected(1)}
        onPress={() => navigation.navigate("Contact")}
      >
        <Center>
          <Icon
            mb="1"
            as={<MaterialCommunityIcons name="contacts-outline" />}
            color="white"
            size="sm"
          />
          <Text color="white" fontSize="12">
            Contact
          </Text>
        </Center>
      </Pressable>
    </HStack>
  );
}
