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
  openAlert = () => {
    alert("Successfull");
  };

  const [blog, setBlog] = useState([]);

  const [title, setTitle] = useState("");
  const [category, setCategory] = React.useState("");
  const [content, setContent] = useState("");
  const [created_by, setCreatedBy] = useState("");
  const [updated_by, setUpdatedBy] = useState("");

  const getData = async () => {
    try {
      const data = await fetch(
        "http://192.168.0.102:8000/api/blog_api/"
      );
      const blog = await data.json();
      console.log(blog);
      setBlog(blog);
    } catch (e) {
      console.log({ e });
    } finally {
      console.log("done");
    }
  };
  useEffect(() => {
    getData();
  }, []);

const postData = async () => {
  try {
    let result = await fetch("http://192.168.0.102:8000/api/blog_api/", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({
        title,
        category,
        content,
        created_by,
        updated_by,
      }),
    });

    console.log("Data saved");
  } catch (error) {
    console.log(error);
  } finally {
    console.log("Done");
  }
};
  
  

  return (
    <NativeBaseProvider>
      <Center>
        <Card width={"300"} height={"350"}>
          <ScrollView>
            <Center>
              <Box>
                <Input
                  bgColor="#e7f3fb"
                  mt={5}
                  fontSize={13}
                  minWidth="200"
                  placeholder="Title of Forum"
                  value={title}
                  onChangeText={(text) => setTitle(text)}
                />
              </Box>
              <Box maxW="300" mt={4}>
                <Select
                  bgColor="#e7f3fb"
                  selectedValue={category}
                  minWidth="200"
                  accessibilityLabel="select category"
                  placeholder="select category"
                  _selectedItem={{
                    bg: "teal.600",
                    endIcon: <CheckIcon size="3" />,
                  }}
                  _light={{
                    bg: "coolGray.100",
                    _hover: {
                      bg: "coolGray.200",
                    },
                    _focus: {
                      bg: "coolGray.200:alpha.70",
                    },
                  }}
                  _dark={{
                    bg: "coolGray.800",
                    _hover: {
                      bg: "coolGray.900",
                    },
                    _focus: {
                      bg: "coolGray.900:alpha.70",
                    },
                  }}
                  mt={1}
                  onValueChange={(itemValue) => setCategory(itemValue)}
                >
                  <Select.Item
                    shadow={2}
                    label="Health"
                    value={"Health"}
                    onChangeText={(text) => setCategory(text)}
                  />
                  <Select.Item
                    shadow={2}
                    label="Diet"
                    value={"Diet"}
                    onChangeText={(text) => setCategory(text)}
                  />
                  <Select.Item
                    shadow={2}
                    label="Motivation"
                    value={"Motivation"}
                    onChangeText={(text) => setCategory(text)}
                  />
                  <Select.Item
                    shadow={2}
                    label="Workout"
                    value={"Workout"}
                    onChangeText={(text) => setCategory(text)}
                  />
                  <Select.Item
                    shadow={2}
                    label="Clothing"
                    value={"Clothing"}
                    onChangeText={(text) => setCategory(text)}
                  />
                  <Select.Item
                    shadow={2}
                    label="Body building"
                    value={"Body building"}
                    onChangeText={(text) => setCategory(text)}
                  />
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
                    value={content}
                    onChangeText={(text) => setContent(text)}
                  />
                </Box>
              </Center>
              <Input
                mt={5}
                fontSize={16}
                bgColor="#e7f3fb"
                maxW="300"
                placeholder="Enter branch ID"
                value={created_by}
                onChangeText={(id) => setCreatedBy(id)}
              />
              <Input
                mt={5}
                fontSize={16}
                bgColor="#e7f3fb"
                maxW="300"
                placeholder="Enter created by"
                value={updated_by}
                onChangeText={(id) => setUpdatedBy(id)}
              />
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
                    onPress={postData}
                  >
                    <Text fontSize={15} textAlign={"center"} color={"white"}>
                      Post
                    </Text>
                  </Button>
                </Center>
              </View>
            </Center>
          </ScrollView>
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
