
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';
import { MaterialIcons } from "@expo/vector-icons"; 
import { Box, Center, Icon,NativeBaseProvider,Input,Button,Pressable,View, Text } from "native-base";
import { useNavigation } from '@react-navigation/native';

const ForgotPassword = () => {
    const [show, setShow] = React.useState(false);
    const navigation = useNavigation();
  return (
    <NativeBaseProvider>
      <SafeAreaView>
        <Center>
          <Icon
            mt={100}
            mb="1"
            as={<MaterialIcons name="error" size={24} color="black" />}
            color={"rgb(0,0,250)"}
            size="60"
          />
          <View mt={5}>
            <Text
              fontSize={21}
              textAlign={"center"}
              color={"grey"}
              mb={16}
              fontWeight={"bold"}
            >
              Forgot Password
            </Text>
          </View>
        </Center>
        <Box ml={70}>
          <Text color={"gray.400"}>Enter New Password</Text>
        </Box>
        <Input
          ml={68}
          borderRadius={15}
          mt={18}
          w={{
            base: "75%",
            md: "25%",
          }}
          type={show ? "text" : "password"}
          InputRightElement={
            <Pressable onPress={() => setShow(!show)}>
              <Icon
                as={
                  <MaterialIcons
                    name={show ? "visibility" : "visibility-off"}
                  />
                }
                size={5}
                mr="2"
                color="muted.400"
              />
            </Pressable>
          }
          placeholder="Password"
        />
        <Box ml={70} mt={50}>
          <Text color={"gray.400"}>Confirm Password</Text>
        </Box>
        <Input
          ml={68}
          borderRadius={15}
          mt={18}
          w={{
            base: "75%",
            md: "25%",
          }}
          type={show ? "text" : "password"}
          InputRightElement={
            <Pressable onPress={() => setShow(!show)}>
              <Icon
                as={
                  <MaterialIcons
                    name={show ? "visibility" : "visibility-off"}
                  />
                }
                size={5}
                mr="2"
                color="muted.400"
              />
            </Pressable>
          }
          placeholder="Password"
        />
        <Center>
          <Button
            mt={10}
            textAlign={"center"}
            justifyContent={"center"}
            alignItems={"center"}
            width={"50%"}
            height={50}
            borderRadius={20}
            bgColor={"#4CAF50"}
            onPress={() => navigation.navigate("Login")}
          >
            <Text>Reset Password</Text>
          </Button>
        </Center>
      </SafeAreaView>
    </NativeBaseProvider>
  );
}

export default ForgotPassword