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
import axios from 'axios';
import { profile1 } from '../../assets';

const MemberProfile = () => {

  const [profile, setProfile] = React.useState(null);
  const [Userprofile, setUserProfile] = React.useState(null);
  const getDataMember = async () => {
      try {
        const data = await fetch("http://192.168.0.101:8000/api/member_api/");
        const profile = await data.json();
        console.log(profile);
        setProfile(profile);
      } catch (e) {
        console.log({ e });
      } finally {
        console.log("done");
      }
    };
    const getDataUser = async () => {
      try {
        const data = await fetch(`http://192.168.0.101:8000/api/user_api/`);
        const profile = await data.json();
        console.log(profile);
        setUserProfile(profile);
      } catch (e) {
        console.log({ e });
      } finally {
        console.log("done");
      }
    };

    React.useEffect(() => {
      getDataMember();
      getDataUser();
    }, []);

  return (
    <NativeBaseProvider>
      <ScrollView>
        <Container ml={4} width={1000}>
          <HStack space={99}>
            <Image
              style={{ width: 90, height: 90 }}
              borderRadius={100}
              mt={63}
              source={profile && profile.profile_picture}
              alt="Alternate Text"
              bottom={10}
            />
            <Button
              mt={49}
              borderColor="black"
              bgColor="blue.100"
              variant="outline"
              width="40%"
              height="30%"
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
                  value={Userprofile && Userprofile.first_name}
                  textColor="grey"
                />
              </HStack>
              <HStack mt={3}>
                <TextInput
                  width={310}
                  mode="outlined"
                  label="E-mail"
                  value={Userprofile && Userprofile.email}
                  textColor="grey"
                />
              </HStack>
              <HStack mt={3}>
                <TextInput
                  width={310}
                  mode="outlined"
                  inputMode="tel"
                  keyboardType="numeric"
                  label="Contact No"
                  value={profile && profile.mobile}
                  textColor="grey"
                />
              </HStack>
              <HStack mt={3}>
                <TextInput
                  width={310}
                  mode="outlined"
                  label="Address"
                  value={profile && profile.address}
                  textColor="grey"
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
                />
                <TextInput
                  width={150}
                  mode="outlined"
                  label="State"
                  value={profile && profile.state}
                  textColor="grey"
                />
              </HStack>
              <HStack space="2" mt={3}>
                <TextInput
                  width={150}
                  mode="outlined"
                  label="Pin Code"
                  value={profile && profile.pincode}
                  textColor="grey"
                />
                <TextInput
                  width={150}
                  mode="outlined"
                  label="Gender"
                  value={profile && profile.gender}
                  textColor="grey"
                />
              </HStack>
            </Center>
          </View>
        </Container>
      </ScrollView>
    </NativeBaseProvider>
  );
};


export default MemberProfile;