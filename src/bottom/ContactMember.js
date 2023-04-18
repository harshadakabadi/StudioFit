import { View } from "react-native";
import React from "react";
import {
  NativeBaseProvider,
  ScrollView,
  Center,
  HStack,
  Card,
  Text,
  Box,
} from "native-base";
import { Divider } from "@rneui/themed";

const ContactMember = () => {
  return (
    <NativeBaseProvider>
      <ScrollView mt={50}>
        <Text ml={3} fontSize={20} fontWeight="bold">
          WHO WE ARE, WHAT WE DO
        </Text>
        <Box mt={3}>
          <Divider />
        </Box>
        <Text ml={3} mr={3} mt={3}>
          Before diving into the practical gym tips for beginners, remember that
          the most important exercise catalyst is confidence. Whether you're
          lifting 100 pounds or 1 pound, you should be proud of yourself for
          showing up at the gym at all! Don't be intimidated by others or scared
          to ask for help.
        </Text>

        <Text ml={3} fontSize={20} fontWeight="bold" mt={3}>
          CONTACT US
        </Text>
        <Box mt={3}>
          <Divider />
        </Box>

        <Text ml={5} mt={3} fontWeight="semibold">
          Main Office Address
        </Text>
        <Text ml={5} fontStyle={"italic"} color={"gray.500"}>
          Prime Rose Mall Ln,
          {"\n"} Baner,
          {"\n"} Pune,
          {"\n"} Maharashtra 411045
        </Text>
        <Text ml={5} mt={3} fontWeight="semibold">
          Email Address
        </Text>
        <Text ml={5} color={"gray.500"}>
          harshadakabadi159@gmail.com
        </Text>
        <Text ml={5} mt={3} fontWeight="semibold">
          Telephone Number
        </Text>
        <Text ml={5} color={"gray.500"} mb={3}>
          1800-78-5689
        </Text>
      </ScrollView>
    </NativeBaseProvider>
  );
};

export default ContactMember;
