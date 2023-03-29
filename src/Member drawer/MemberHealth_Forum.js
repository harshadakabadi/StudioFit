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
  NativeBaseProvider
} from "native-base";
import { ScrollView } from "react-native-gesture-handler";
import axios from "axios";


const MemberHealth_Forum = () => {
  const navigation = useNavigation();
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: true,
    });
  }, []);

   const [blog, setBlog] = useState([]);
  
  //  axios
  //    .get("http://127.0.0.1:8000/api/blog_api/?format=json")
  //    .then((response) => {
  //      setBlog(response.data);
  //    })
  //    .catch(function (error) {
  //      // handle error
  //      setBlog(null);
  //      alert(error.message);
  //    });
 
  const getData = async () => {
    try {
    const data = await fetch("http://192.168.0.103:8000/api/blog_api/");
    const blog = await data.json();
    console.log(blog);
    setBlog(blog);
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
      <ScrollView>
        <Center>
          <Box mt={4}>
            {blog &&
              blog.map((object) => (
                <Card bgColor="#e7f3fb" key={object.id}>
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
        </Center>
      </ScrollView>
    </NativeBaseProvider>
  );
};

export default MemberHealth_Forum;
