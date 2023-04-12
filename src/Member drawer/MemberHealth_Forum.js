import React, { useEffect, useLayoutEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { EvilIcons } from "@expo/vector-icons"; 
import {
  Box,
  Center,
  Text,
  VStack,
  Divider,
  Heading,
  Input,
  Icon,
  Card,
  NativeBaseProvider,
  KeyboardAvoidingView
} from "native-base";
import { ActivityIndicator } from "react-native-paper";
import { ScrollView } from "react-native-gesture-handler";
import MemberBottomDrawer from "./MemberBottomDrawer";


const MemberHealth_Forum = () => {
  const navigation = useNavigation();
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: true,
    });
  }, []);

   const [blog, setBlog] = useState([]);
   const [loading, setLoading] = useState(true);
  
  const getData = async () => {
    try {
    const data = await fetch(
      `http://${global.MyVar}/api/blog_api/`
    );
    const blog = await data.json();
    console.log(blog);
    setBlog(blog);
    setLoading(false);
    }
    catch(e){
      console.log({e})
    }finally{
      console.log('done')
    }
  }
useEffect(()=>{
  getData();
},[])

  return (
    <NativeBaseProvider>
      <KeyboardAvoidingView
        behavior="height"
        style={[{ justifyContent: "center", height: "100%" }]}
      >
        <ScrollView>
          <Center>
            {loading ? (
              <ActivityIndicator size="small" />
            ) : (
              <Box mt={4}>
                {blog &&
                  blog.map((object) => (
                    <Card bgColor="#e7f3fb" key={object.id} width={350}>
                      <Heading>{object.title}</Heading>
                      <Text mt={2} fontWeight={"semibold"} fontSize={17}>
                        {object.category}
                      </Text>
                      <Text mt={1}>{object.content}</Text>
                      <Text fontSize={12} mt={1} color={"gray.400"}>
                        posted on : {new Date(object.updated_at).toGMTString()}
                      </Text>
                    </Card>
                  ))}
              </Box>
            )}
          </Center>
        </ScrollView>
        <MemberBottomDrawer />
      </KeyboardAvoidingView>
    </NativeBaseProvider>
  );
};

export default MemberHealth_Forum;
