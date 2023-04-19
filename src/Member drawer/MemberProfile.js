import { View,StyleSheet } from 'react-native'
import * as React from 'react'
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
import {
  MaterialIcons,
} from "@expo/vector-icons";
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from "@react-navigation/native";
import { ActivityIndicator } from "react-native-paper";
import { Trainer1 } from '../../assets';
import { SafeAreaView } from 'react-native-safe-area-context';
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useFocusEffect } from "@react-navigation/native";

const MemberProfile = () => {
 const navigation = useNavigation();
 const [changeColor, setChangeColor] = React.useState("blue:400");
 const [loading, setLoading] = React.useState(true);
 const handleButtonClick = () => {
   const newColor = changeColor === "blue:100" ? "red" : "blue:100";
   setChangeColor(newColor);
 };
  
  const [profile, setProfile] = React.useState(null);
 
  const getDataMember = async () => {
    const userId =await AsyncStorage.getItem("userId");
      try {
        const data = await fetch(`${global.MyVar}/api/member/${userId}/`);
        if (data.status === 200) {
        const profile = await data.json();
        setProfile(profile);
        setLoading(false);
        await AsyncStorage.setItem("member", JSON.stringify(profile));
        //console.log("Member data stored:", data);
        const branchId = JSON.stringify(profile.branch);
        await AsyncStorage.setItem("branchId", branchId);
        //console.log("branchId : "+branchId);
        }
        else
        {
          console.log("something wrong");
        }
      } catch (e) {
        console.log({ e });
      } finally {
        console.log("done");
      }
    };
    useFocusEffect(React.useCallback(() => {
        getDataMember();
    }, []));

  return (
    <NativeBaseProvider>
      <SafeAreaView>
        <ScrollView>
          {loading ? (
            <ActivityIndicator size="small" />
          ) : (
            <Container ml={4} width={1000} mt={8}>
              <HStack space={99} ml={7}>
                <Image
                  style={{ width: 100, height: 100 }}
                  borderRadius={100}
                  mt={63}
                  //source={profile && profile.profile_picture}
                  source={Trainer1}
                  alt="Alternate Text"
                  bottom={10}
                />
                <Button
                  mt={49}
                  borderColor="black"
                  variant="outline"
                  width="40%"
                  height="30%"
                  color={changeColor}
                  onPressIn={handleButtonClick}
                  onPress={() => navigation.navigate("Edit Member Profile")}
                >
                  <HStack space={1}>
                    <MaterialIcons name="edit" size={18} color="black" />
                    <Text>Edit Profile</Text>
                  </HStack>
                </Button>
              </HStack>
              <Container ml={4}>
                <View>
                  <Center>
                    <HStack>
                      <TextInput
                        width={340}
                        mode="outlined"
                        label="Full Name"
                        value={profile && profile.first_name}
                        textColor="grey"
                        editable={false}
                      />
                    </HStack>
                    <HStack mt={5}>
                      <TextInput
                        width={340}
                        mode="outlined"
                        label="E-mail"
                        value={profile && profile.email}
                        textColor="grey"
                        editable={false}
                      />
                    </HStack>
                    <HStack mt={5}>
                      <TextInput
                        width={340}
                        mode="outlined"
                        keyboardType="numeric"
                        label="Contact No"
                        type="number"
                        value={profile && profile.mobile.toString()}
                        textColor="grey"
                        editable={false}
                      />
                    </HStack>
                    <HStack mt={5}>
                      <TextInput
                        width={340}
                        mode="outlined"
                        label="Address"
                        value={profile && profile.address}
                        textColor="grey"
                        editable={false}
                      />
                    </HStack>
                    <HStack space="2" mt={5}>
                      <TextInput
                        width={170}
                        mode="outlined"
                        label="City"
                        value={profile && profile.city}
                        textColor="grey"
                        editable={false}
                      />
                      <TextInput
                        width={170}
                        mode="outlined"
                        label="State"
                        value={profile && profile.state}
                        textColor="grey"
                        editable={false}
                      />
                    </HStack>
                    <HStack space="2" mt={5}>
                      <TextInput
                        width={170}
                        mode="outlined"
                        label="Pin Code"
                        value={profile && profile.pincode.toString()}
                        textColor="grey"
                        editable={false}
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
                </View>
              </Container>
            </Container>
          )}
        </ScrollView>
      </SafeAreaView>
    </NativeBaseProvider>
  );
};


export default MemberProfile;