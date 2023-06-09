import { View} from 'react-native'
import React from 'react'
import {
  NativeBaseProvider,
  Image,
  Center,
  Text,
  HStack,
  Container,
  Button,
  ScrollView,
} from "native-base";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useFocusEffect } from "@react-navigation/native";
import { ActivityIndicator } from "react-native-paper";
import { useNavigation } from '@react-navigation/native';
import { TextInput } from "react-native-paper";
import {
  MaterialIcons,
} from "@expo/vector-icons";
import { Trainer1 } from '../../assets';

const TrainerProfile = () => {
  const navigation = useNavigation();
  const [loading, setLoading] = React.useState(true);
 const [profile, setProfile] = React.useState(null);
 

 const getDataMember = async () => {
  const userId = await AsyncStorage.getItem("userId");
   try {
     const data = await fetch(`${global.MyVar}/api/staff/${userId}`);
     if (data.status === 200) {
       const profile = await data.json();
       setProfile(profile);
       setLoading(false);
       await AsyncStorage.setItem("trainer", JSON.stringify(profile));
       const branchId = JSON.stringify(profile.branch);
       await AsyncStorage.setItem("branchId", branchId[1]);
      
     } else {
       console.log("something wrong");
     }
   } catch (e) {
     console.log({ e });
   } finally {
     console.log("done");
   }
 };
 

 useFocusEffect(
   React.useCallback(() => {
     getDataMember();
   }, [])
 );

 return (
   <NativeBaseProvider>
     <ScrollView>
       {loading ? (
         <ActivityIndicator size="small" />
       ) : (
         <Container ml={4} width={1000}>
           <HStack space={99} ml={7}>
             <Image
               style={{ width: 120, height: 120 }}
               borderRadius={100}
               mt={63}
               source={Trainer1}
               alt="Alternate Text"
               bottom={10}
             />
             <Button
               mt={49}
               bgColor="blue.100"
               borderColor="black"
               variant="outline"
               width="40%"
               height="30%"
               onPress={() => navigation.navigate("Edit Trainer Profile")}
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
                   />
                 </HStack>
                 <HStack mt={5}>
                   <TextInput
                     width={340}
                     mode="outlined"
                     label="E-mail"
                     value={profile && profile.email}
                     textColor="grey"
                   />
                 </HStack>
                 <HStack mt={5}>
                   <TextInput
                     width={340}
                     mode="outlined"
                     type="number"
                     label="Contact No"
                     value={profile && profile.mobile.toString()}
                     textColor="grey"
                   />
                 </HStack>
                 <HStack mt={5}>
                   <TextInput
                     width={340}
                     mode="outlined"
                     label="Address"
                     value={profile && profile.address}
                     textColor="grey"
                   />
                   <Text></Text>
                 </HStack>
                 <HStack space="2" mt={5}>
                   <TextInput
                     width={170}
                     mode="outlined"
                     label="City"
                     value={profile && profile.city}
                     textColor="grey"
                   />
                   <TextInput
                     width={170}
                     mode="outlined"
                     label="State"
                     value={profile && profile.state}
                     textColor="grey"
                   />
                 </HStack>
                 <HStack space="2" mt={5}>
                   <TextInput
                     width={170}
                     mode="outlined"
                     label="Pin Code"
                     value={profile && profile.pincode.toString()}
                     textColor="grey"
                   />
                   <TextInput
                     width={170}
                     mode="outlined"
                     label="Gender"
                     value={profile && profile.gender}
                     textColor="grey"
                   />
                 </HStack>
               </Center>
             </View>
           </Container>
         </Container>
       )}
     </ScrollView>
   </NativeBaseProvider>
 );
};

export default TrainerProfile;