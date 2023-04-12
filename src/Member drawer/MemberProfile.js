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
      try {
        const data = await fetch(`http://${global.MyVar}/api/member_api/7/`);
        const profile = await data.json();
        console.log(profile);
        setProfile(profile);
        setLoading(false);
      } catch (e) {
        console.log({ e });
      } finally {
        console.log("done");
      }
    };
    
    React.useEffect(() => {
      getDataMember();
    }, []);

  return (
    <NativeBaseProvider>
      <ScrollView>
      {loading ? (
              <ActivityIndicator size="small"/>
            ) : (
        <Container ml={4} width={1000}>
          <HStack space={99} ml={3}>
            <Image
              style={{ width: 90, height: 90 }}
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
          <View>
            <Center>
              <HStack>
                <TextInput
                  width={310}
                  mode="outlined"
                  label="Full Name"
                  value={profile && profile.first_name}
                  textColor="grey"
                  editable={false}
                />
              </HStack>
              <HStack mt={3}>
                <TextInput
                  width={310}
                  mode="outlined"
                  label="E-mail"
                  value={profile && profile.email}
                  textColor="grey"
                  editable={false}
                />
              </HStack>
              <HStack mt={3}>
                <TextInput
                  width={310}
                  mode="outlined"
                  keyboardType="numeric"
                  label="Contact No"
                  type="number"
                  value={profile && profile.mobile.toString()}
                  textColor="grey"
                  editable={false}
                />
              </HStack>
              <HStack mt={3}>
                <TextInput
                  width={310}
                  mode="outlined"
                  label="Address"
                  value={profile && profile.address}
                  textColor="grey"
                  editable={false}
                />
                <Text></Text>
              </HStack>
              <HStack space="2" mt={3}>
                <TextInput
                  width={150}
                  mode="outlined"
                  label="City"
                  value={profile && profile.city}
                  textColor="grey"
                  editable={false}
                />
                <TextInput
                  width={150}
                  mode="outlined"
                  label="State"
                  value={profile && profile.state}
                  textColor="grey"
                  editable={false}
                />
              </HStack>
              <HStack space="2" mt={3}>
                <TextInput
                  width={150}
                  mode="outlined"
                  label="Pin Code"
                  value={profile && profile.pincode.toString()}
                  textColor="grey"
                  editable={false}
                />
                <TextInput
                  width={150}
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
            )}
      </ScrollView>
    </NativeBaseProvider>
  );
};


export default MemberProfile;