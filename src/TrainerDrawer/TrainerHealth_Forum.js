import { View } from "react-native";
import React, { useLayoutEffect,useState,useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import {
  Box,
  Center,
  VStack,
  CheckIcon,
  Text,
  Button,
  Heading,
  ScrollView,
  NativeBaseProvider,
  TextArea,
  Select,
  Card,
  Input,
  HStack,

} from "native-base";
import { Divider } from "@rneui/themed";
import axios from "axios";


const TrainerHealth_Forum = () => {
  const navigation = useNavigation();
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: true,
    });
  }, []);
  const [isLoading, setIsLoading] = useState(false);
  const [category, setCategory] = React.useState("");
  const [blog, setBlog] = useState([]);

  // const getData = async () => {
  axios
    .get("http://192.168.0.103:8000/api/blog_api/")
    .then((response) => {
      setBlog(response.data);
    })
    .catch(function (error) {
      // handle error
      setBlog(null);
      alert(error.message);
    });

  // const getData = async () => {
  //   try {
  //     const data = await fetch("http://192.168.0.103:8000/api/blog_api/");
  //     const blog = await data.json();
  //     console.log(blog);
  //     setBlog(blog);
  //   } catch (e) {
  //     alert({ e });
  //   } finally {
  //     console.log("done");
  //   }
  // };
  //useEffect(() => {
    //getData();
  //}, []);

  return (
    <NativeBaseProvider>
      <Center>
        <Card width={"300"} height={"350"}>
          <Center>
            <Box>
              <Input
                bgColor="#e7f3fb"
                mt={5}
                fontSize={13}
                minWidth="200"
                placeholder="Title of Forum"
              />
            </Box>
            <Box mt={5}>
              <Select
                bgColor="#e7f3fb"
                selectedValue={category}
                minWidth="200"
                fontSize={13}
                accessibilityLabel="Select Forum category"
                placeholder="Select Forum category"
                _selectedItem={{
                  endIcon: <CheckIcon size="1" />,
                }}
                mt={1}
                onValueChange={(itemValue) => setCategory(itemValue)}
              >
                <Select.Item label="Positive" value="positive" />
                <Select.Item label="Negative" value="negative" />
                <Select.Item label="None" value="None" />
              </Select>
            </Box>
            <Center>
              <Box>
                <TextArea
                  bgColor="#e7f3fb"
                  mt={5}
                  fontSize={13}
                  placeholder="Enter Your Content"
                  minWidth="200"
                />
              </Box>
            </Center>
            <View>
              <Center>
                <Button
                  mt={5}
                  textAlign={"center"}
                  justifyContent={"center"}
                  alignItems={"center"}
                  width={"100%"}
                  height={45}
                  borderRadius={8}
                  bgColor={"#4CAF50"}
                  mb={0}
                >
                  <Text fontSize={15} textAlign={"center"} color={"white"}>
                    Post
                  </Text>
                </Button>
              </Center>
            </View>
          </Center>
        </Card>
      </Center>
      <ScrollView>
        <Center>
          <Box mt={3}>
            {blog &&
              blog.map((object) => (
                <Card bgColor="#e7f3fb" key={object.id}>
                  <Heading>{object.title}</Heading>
                  <Text mt={2} fontWeight={"semibold"} fontSize={17}>
                    {object.category}
                  </Text>
                  <Text mt={1}>{object.content}</Text>
                  <Text fontSize={12} mt={1} color={"gray.400"}>
                    posted on : {new Date(object.created_at).toGMTString()}
                  </Text>
                </Card>
              ))}
          </Box>
        </Center>
      </ScrollView>
    </NativeBaseProvider>
  );
};

export default TrainerHealth_Forum;
