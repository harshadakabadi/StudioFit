import * as React from "react";
import { useNavigation } from "@react-navigation/native";
import { MaterialCommunityIcons, Foundation } from "@expo/vector-icons";
import {
  Pressable,
  Text,
  Center,
  HStack,
  Icon,
} from "native-base";

export default function TrainerBottomDrawer() {
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
          <Text color="white" fontSize="14">
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
        onPress={() => navigation.navigate("Contact Us")}
      >
        <Center>
          <Icon
            mb="1"
            as={<MaterialCommunityIcons name="contacts-outline" />}
            color="white"
            size="sm"
          />
          <Text color="white" fontSize="14">
            Contact
          </Text>
        </Center>
      </Pressable>
      <Pressable
        cursor="pointer"
        opacity={selected === 1 ? 1 : 0.5}
        py="2"
        flex={1}
        onPressOut={() => setSelected(1)}
        onPress={() => navigation.navigate("Centers ")}
      >
        <Center>
          <Icon
            mb="1"
            as={<Foundation name="social-game-center" />}
            color="grey"
            size="sm"
          />
          <Text color="grey" fontSize="12">
            Centers
          </Text>
        </Center>
      </Pressable>
    </HStack>
  );
}
