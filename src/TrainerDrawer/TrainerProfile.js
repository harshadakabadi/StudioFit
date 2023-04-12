import { View,Prompt } from 'react-native'
import React from 'react'
import {
  NativeBaseProvider,
  VStack,
  Box,
  Image,
  Center,
  Text,
  HStack,
  Icon,Container,Button
} from "native-base";
import { ActivityIndicator } from "react-native-paper";
import { useNavigation } from '@react-navigation/native';
import { TextInput } from "react-native-paper";
import {
  MaterialIcons,
} from "@expo/vector-icons";
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import { Trainer1, profile1 } from '../../assets';

const TrainerProfile = () => {
  const navigation = useNavigation();
  const [loading, setLoading] = React.useState(true);
 const [profile, setProfile] = React.useState(null);
 

 const getDataMember = async () => {
   try {
     const data = await fetch(`http://${global.MyVar}/api/staff_api/6`);
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
         <ActivityIndicator size="small" />
       ) : (
         <Container ml={4} width={1000}>
           <HStack space={99} ml={3}>
             <Image
               style={{ width: 90, height: 90 }}
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
           <View>
             <Center>
               <HStack>
                 <TextInput
                   width={310}
                   mode="outlined"
                   label="Full Name"
                   value={profile && profile.first_name}
                   textColor="grey"
                 />
               </HStack>
               <HStack mt={3}>
                 <TextInput
                   width={310}
                   mode="outlined"
                   label="E-mail"
                   value={profile && profile.email}
                   textColor="grey"
                 />
               </HStack>
               <HStack mt={3}>
                 <TextInput
                   width={310}
                   mode="outlined"
                   type="number"
                   label="Contact No"
                   value={profile && profile.mobile.toString()}
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
                   value={profile && profile.pincode.toString()}
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
       )}
     </ScrollView>
   </NativeBaseProvider>
 );
};

export default TrainerProfile;