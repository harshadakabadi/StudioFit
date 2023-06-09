import { View } from "react-native";
import * as React from "react";
import { useNavigation } from "@react-navigation/native";
import {
  NativeBaseProvider,
  Image,
  Center,
  Text,
  HStack,
  Container,
  Button,
} from "native-base";
import { TextInput } from "react-native-paper";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import { ActivityIndicator } from "react-native-paper";
import { profile1, Trainer1 } from "../../assets";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { MaterialIcons, AntDesign } from "@expo/vector-icons";

const EditTrainerProfile = () => {
  const navigation = useNavigation();
  const [changeColor, setChangeColor] = React.useState("blue:100");
  const [loading, setLoading] = React.useState(true);
  const [hasStartedTyping, setHasStartedTyping] = React.useState(false);

  const handleButtonClick = () => {
    const newColor = changeColor === "blue:100" ? "grey.100" : "blue:100";
    setChangeColor(newColor);
  };
  const [profile, setProfile] = React.useState({
    first_name: "",
    email: "",
    mobile: 0,
    address: "",
    address: "",
    city: "",
    state: "",
    pincode: 0,
  });

  const getDataMember = async () => {
    const userId = await AsyncStorage.getItem("userId");
    try {
      const data = await fetch(`${global.MyVar}/api/staff/${userId}`);
      const profile = await data.json();
      setProfile(profile);
      setLoading(false);
    } catch (e) {
      console.log({ e });
    }
  };

  React.useEffect(() => {
    getDataMember();
  }, []);

  const handleCancel = () => {
    setHasStartedTyping(false);
    navigation.navigate("Dashboard");
  };
  const handleInputChange = () => {
    setHasStartedTyping(true);
  };

  const UpdateDataMember = async() => {
    const userId = await AsyncStorage.getItem("userId");
    fetch(`${global.MyVar}/api/staff/${userId}/`, {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      method: "PATCH",

      body: JSON.stringify({
        first_name: profile.first_name,
        email: profile.email,
        mobile: profile.mobile,
        address: profile.address,
        city: profile.city,
        state: profile.state,
        pincode: profile.pincode,
      }),
    })
      .then(function (response) {
        alert("Updated successfully..");
         setHasStartedTyping(false);
        return response.json();
      })
      .then(function (data) {
        navigation.navigate("Trainer Profile");
      })
      .catch((error) => {
        alert("Something wrong..");
        console.log(error);
      });
  };
  return (
    <NativeBaseProvider>
      <ScrollView>
        {loading ? (
          <ActivityIndicator size="small" />
        ) : (
          <Container ml={4} width={1000}>
            <Center ml={120}>
              <Image
                style={{ width: 120, height: 120 }}
                borderRadius={100}
                mt={60}
                source={Trainer1}
                //source={profile && profile.profile_picture}
                alt="Alternate Text"
                bottom={5}
              />
            </Center>
            <View>
              <Center ml={18}>
                <HStack>
                  <TextInput
                    width={340}
                    mode="outlined"
                    label="Full Name"
                    value={profile && profile.first_name}
                    textColor="grey"
                    onChangeText={(text) =>
                      setProfile({ ...profile, first_name: text })
                    }
                    onChange={handleInputChange}
                  />
                </HStack>
                <HStack mt={3}>
                  <TextInput
                    width={340}
                    mode="outlined"
                    label="E-mail"
                    value={profile && profile.email}
                    textColor="grey"
                    onChangeText={(text) =>
                      setProfile({ ...profile, email: text })
                    }
                    onChange={handleInputChange}
                  />
                </HStack>
                <HStack mt={3}>
                  <TextInput
                    width={340}
                    mode="outlined"
                    keyboardType="numeric"
                    label="Contact No"
                    maxLength={10}
                    value={profile && profile.mobile.toString()}
                    textColor="grey"
                    onChangeText={(text) =>
                      setProfile({ ...profile, mobile: text })
                    }
                    onChange={handleInputChange}
                  />
                </HStack>
                <HStack mt={3}>
                  <TextInput
                    width={340}
                    mode="outlined"
                    label="Address"
                    value={profile && profile.address}
                    textColor="grey"
                    onChangeText={(text) =>
                      setProfile({ ...profile, address: text })
                    }
                    onChange={handleInputChange}
                  />
                </HStack>
                <HStack space="2" mt={3}>
                  <TextInput
                    width={170}
                    mode="outlined"
                    label="City"
                    value={profile && profile.city}
                    textColor="grey"
                    onChangeText={(text) =>
                      setProfile({ ...profile, city: text })
                    }
                    onChange={handleInputChange}
                  />
                  <TextInput
                    width={170}
                    mode="outlined"
                    label="State"
                    value={profile && profile.state}
                    textColor="grey"
                    onChangeText={(text) =>
                      setProfile({ ...profile, state: text })
                    }
                    onChange={handleInputChange}
                  />
                </HStack>
                <HStack space="2" mt={3}>
                  <TextInput
                    width={170}
                    mode="outlined"
                    label="Pin Code"
                    keyboardType="numeric"
                    maxLength={6}
                    value={profile && profile.pincode.toString()}
                    textColor="grey"
                    onChangeText={(text) =>
                      setProfile({ ...profile, pincode: text })
                    }
                    onChange={handleInputChange}
                  />
                  <TextInput
                    width={170}
                    mode="outlined"
                    label="Gender"
                    value={profile && profile.gender}
                    textColor="grey"
                    editable={false}
                  />
                </HStack>
              </Center>
              <HStack space={6}>
                <TouchableOpacity>
                  <Button
                    mt={30}
                    ml={5}
                    width="70%"
                    borderColor="black"
                    bgColor={"#28a745"}
                    color={changeColor}
                    onPressIn={handleButtonClick}
                    onPress={UpdateDataMember}
                  >
                    <Text
                      fontSize={20}
                      fontWeight={"bold"}
                      color={"white"}
                      textAlign={"center"}
                    >
                      Edit
                    </Text>
                  </Button>
                </TouchableOpacity>

                {hasStartedTyping && (
                  <TouchableOpacity>
                    <Button
                      borderColor="black"
                      width="70%"
                      mt={30}
                      onPress={handleCancel}
                    >
                      <Text
                        fontSize={20}
                        fontWeight={"bold"}
                        color={"white"}
                        textAlign={"center"}
                      >
                        Cancel
                      </Text>
                    </Button>
                  </TouchableOpacity>
                )}
              </HStack>
            </View>
          </Container>
        )}
      </ScrollView>
    </NativeBaseProvider>
  );
};

export default EditTrainerProfile;
