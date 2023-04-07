import { View} from "react-native";
import * as React from "react";
import {
  NativeBaseProvider,

  Image,
  Center,
  Text,
  HStack,
  Container,
  Button,
} from "native-base";
import { ActivityIndicator } from "react-native-paper";
import { TextInput } from "react-native-paper";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import { profile1, Trainer1 } from "../../assets";

const EditMemberProfile = () => {
  const [changeColor, setChangeColor] = React.useState("blue:100");
  const [loading, setLoading] = React.useState(true);
  const handleButtonClick = () => {
    const newColor = changeColor === "blue:100" ? "red" : "blue:100";
    setChangeColor(newColor);
  };
  const [profile, setProfile] = React.useState({
    mobile: 0,
    address: "",
    address: "",
    city: "",
    state: "",
    pincode: 0,
  });
  const [Userprofile, setUserProfile] = React.useState({
    first_name:"",
    email:"",
  });
  

  const getDataMember = async () => {
    try {
      const data = await fetch(`http://${global.MyVar}/api/member_api/1`);
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
  const getDataUser = async () => {
    try {
      const data = await fetch(`http://${global.MyVar}/api/user_api/2`);
      const profile = await data.json();
      //console.log(profile);
      setUserProfile(profile);
      setLoading(false);
    } catch (e) {
      console.log({ e });
    } finally {
     // console.log("done");
    }
  };

  React.useEffect(() => {
    getDataUser();
    getDataMember();
  }, []);

const UpdateDataUser = () =>{
  fetch(`http://${global.MyVar}/api/user_api/2/`, {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    method: "PATCH",
    body: JSON.stringify({
      first_name: Userprofile.first_name,
      email: Userprofile.email,
    }),
  })
    .then(function (response) {
      UpdateDataMember();
      return response.json();
    })
    .catch((error) => {
      console.log(error);
    });
};
const UpdateDataMember = () => {
  fetch(`http://${global.MyVar}/api/member_api/1/`, {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    method: "PATCH",

    body: JSON.stringify({
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
          <Center ml={100}>
            <Image
              style={{ width: 120, height: 120 }}
              borderRadius={100}
              mt={63}
              //source={profile && profile.profile_picture}
              source={Trainer1}
              alt="Alternate Text"
              bottom={10}
            />
          </Center>
          <View>
            <Center>
              <HStack>
                <TextInput
                  width={310}
                  mode="outlined"
                  label="Full Name"
                  value={Userprofile && Userprofile.first_name}
                  textColor="grey"
                  onChangeText={(text) =>
                    setUserProfile({ ...Userprofile, first_name: text })
                  }
                />
              </HStack>
              <HStack mt={3}>
                <TextInput
                  width={310}
                  mode="outlined"
                  label="E-mail"
                  value={Userprofile && Userprofile.email}
                  textColor="grey"
                  onChangeText={(text) =>
                    setUserProfile({ ...Userprofile, email: text })
                  }
                />
              </HStack>
              <HStack mt={3}>
                <TextInput
                  width={310}
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
              <HStack mt={3}>
                <TextInput
                  width={310}
                  mode="outlined"
                  label="Address"
                  value={profile && profile.address}
                  textColor="grey"
                  onChangeText={(text) =>
                    setProfile({ ...profile, address: text })
                  }
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
                  onChangeText={(text) =>
                    setProfile({ ...profile, city: text })
                  }
                />
                <TextInput
                  width={150}
                  mode="outlined"
                  label="State"
                  value={profile && profile.state}
                  textColor="grey"
                  onChangeText={(text) =>
                    setProfile({ ...profile, state: text })
                  }
                />
              </HStack>
              <HStack space="2" mt={3}>
                <TextInput
                  width={150}
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
                  width={150}
                  mode="outlined"
                  label="Gender"
                  value={profile && profile.gender}
                  textColor="grey"
                  editable={false}
                />
              </HStack>
            </Center>
            <TouchableOpacity>
              <Button
                mt={45}
                borderColor="black"
                color={changeColor}
                onPressIn={handleButtonClick}
                onPress={UpdateDataUser}
              >
                <Text>Save</Text>
              </Button>
            </TouchableOpacity>
          </View>
        </Container>
         )}
      </ScrollView>
    </NativeBaseProvider>
  );
};

export default EditMemberProfile;
