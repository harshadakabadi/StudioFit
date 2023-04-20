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


const EditTrainerProfile = () => {
  const navigation = useNavigation();
  const [changeColor, setChangeColor] = React.useState("blue:100");
  const [loading, setLoading] = React.useState(true);
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
      // console.log(profile);
      setProfile(profile);
      setLoading(false);
    } catch (e) {
      console.log({ e });
    } finally {
      // console.log("done");
    }
  };

  React.useEffect(() => {
    getDataMember();
  }, []);

  
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
        return response.json();
      })
      .then(function (data) {
        console.log(data);
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
                mt={63}
                source={Trainer1}
                //source={profile && profile.profile_picture}
                alt="Alternate Text"
                bottom={10}
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
                  />
                </HStack>
                <HStack mt={5}>
                  <TextInput
                    width={340}
                    mode="outlined"
                    label="E-mail"
                    value={profile && profile.email}
                    textColor="grey"
                    onChangeText={(text) =>
                      setProfile({ ...profile, email: text })
                    }
                  />
                </HStack>
                <HStack mt={5}>
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
                  />
                </HStack>
                <HStack mt={5}>
                  <TextInput
                    width={340}
                    mode="outlined"
                    label="Address"
                    value={profile && profile.address}
                    textColor="grey"
                    onChangeText={(text) =>
                      setProfile({ ...profile, address: text })
                    }
                  />
                </HStack>
                <HStack space="2" mt={5}>
                  <TextInput
                    width={170}
                    mode="outlined"
                    label="City"
                    value={profile && profile.city}
                    textColor="grey"
                    onChangeText={(text) =>
                      setProfile({ ...profile, city: text })
                    }
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
                  />
                </HStack>
                <HStack space="2" mt={5}>
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

                <TouchableOpacity>
                  <Button
                    mt={45}
                    width="100%"
                    borderColor="black"
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
                      Save
                    </Text>
                  </Button>
                </TouchableOpacity>
              </Center>
            </View>
          </Container>
        )}
      </ScrollView>
    </NativeBaseProvider>
  );
};

export default EditTrainerProfile;
