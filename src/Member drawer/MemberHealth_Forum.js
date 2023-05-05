import React, { useEffect, useLayoutEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { Pressable } from "react-native";
import { Entypo } from "@expo/vector-icons";
import moment from "moment";
import {
  Box,
  Center,
  Text,
  Heading,
  Card,
  NativeBaseProvider,
  KeyboardAvoidingView
} from "native-base";
import { ActivityIndicator } from "react-native-paper";
import { ScrollView } from "react-native-gesture-handler";
import MemberBottomDrawer from "./MemberBottomDrawer";
import { useFocusEffect } from "@react-navigation/native";
import { StyleSheet, View, Platform } from "react-native";


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
    const data = await fetch(`${global.MyVar}/api/blog/?ordering=-created_at`);
    const blog = await data.json();
    //console.log(blog);
    setBlog(blog);
    setLoading(false);
    }
    catch(e){
      console.log({e})
    }finally{
      console.log('done')
    }
  }
useFocusEffect(
  React.useCallback(() => {
    getData();
  }, [])
);

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
                    <Card
                      bgColor="#B0B7C0"
                      key={object.id}
                      width={400}
                      mt={4}
                      mb={2}
                    >
                      <Heading color="#282828">{object.title}</Heading>
                      <Text mt={2} fontWeight={"semibold"} fontSize={17}>
                        {object.category}
                      </Text>
                      <Text mt={1} fontSize={16}>
                        {object.content}
                      </Text>
                      <Text fontSize={12} mt={1}>
                        Posted by {object.created_by}
                      </Text>
                      <Text fontSize={12} mt={1} color={"white"} mb={2}>
                        posted on{" "}
                        {moment(new Date(object.updated_at)).format(
                          "MMMM d, YYYY"
                        )}
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
const styles = StyleSheet.create({
  card: {
    backgroundColor: "#fff",
    borderRadius: 8,
    elevation: 2,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.3,
    shadowRadius: 2,
  },
});

export default MemberHealth_Forum;
