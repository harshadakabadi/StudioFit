import {View} from "react-native";
import React, { useLayoutEffect,useState,useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { ActivityIndicator } from "react-native-paper";
import { MaterialIcons, AntDesign } from "@expo/vector-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {
  Box,
  Center,
  HStack,
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
  KeyboardAvoidingView,
} from "native-base";
import TrainerBottomDrawer from "./TrainerBottomDrawer";
import axios from "axios";


const TrainerHealth_Forum = () => {
  const navigation = useNavigation();
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: true,
    });
  }, []);
  
  const [blog, setBlog] = useState([]);

  const [title, setTitle] = useState("");
  const [category, setCategory] = React.useState("");
  const [content, setContent] = useState("");
  const [loading, setLoading] = useState(true);
  
  const getData = async () => {
    try {
      const data = await fetch(`${global.MyVar}/api/blog_api/`);
      const blog = await data.json();
      console.log(blog);
      setBlog(blog);
      setLoading(false);
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
  const userId = await AsyncStorage.getItem("userId");
  try {
    let result = await fetch(`${global.MyVar}/api/blog_api/`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({
        title,
        category,
        content,
        created_by: userId,
        updated_by: userId,
      }),
    });
    getData();
    alert("Submitted Successfully..");
    handleClick();
    console.log("Data saved");
  } catch (error) {
    alert("Something wrong!");
    console.log(error);
  } finally {
    console.log("Done");
  }
};
const handleClick = () => {
  setContent("");
  setTitle("");
  setCategory("");
  setBlog("");
};
const handleEditBtn =async (Id) => {
  console.log(JSON.stringify(Id));
  await AsyncStorage.setItem("blogId", JSON.stringify(Id));
  navigation.navigate("Edit Forum")
};
const handleDeleteBtn = async (Id) => {
  try {
    const res = await axios.delete(`${global.MyVar}/api/blog_api/${Id}/`);
    console.log("Item successfully deleted.",res.data);
  } catch (error) {
    alert(error);
  }
};

  return (
    <NativeBaseProvider>
      <KeyboardAvoidingView
        behavior="height"
        style={[{ justifyContent: "center", height: "100%" }]}
      >
        <ScrollView>
          <Center>
            <Card width={"400"} height={"350"}>
              <ScrollView>
                <Center>
                  <Box>
                    <Input
                      bgColor="#e7f3fb"
                      mt={5}
                      fontSize={14}
                      minWidth="250"
                      placeholder="Title of Forum"
                      value={title}
                      onChangeText={(text) => setTitle(text)}
                    />
                  </Box>
                  <Box maxW="300" mt={4}>
                    <Select
                      bgColor="#e7f3fb"
                      selectedValue={category}
                      minWidth="250"
                      fontSize={14}
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
                        fontSize={14}
                        placeholder="Enter Your Content"
                        minWidth="250"
                        value={content}
                        onChangeText={(text) => setContent(text)}
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
                        width={"80%"}
                        height={45}
                        borderRadius={8}
                        bgColor={"#4CAF50"}
                        mb={0}
                        onPress={postData}
                      >
                        <Text
                          fontSize={20}
                          fontWeight={"bold"}
                          textAlign={"center"}
                          color={"white"}
                        >
                          Post
                        </Text>
                      </Button>
                    </Center>
                  </View>
                </Center>
              </ScrollView>
            </Card>
          </Center>
          <Center>
            {loading ? (
              <ActivityIndicator size="small" />
            ) : (
              <Box mt={3}>
                {blog &&
                  blog.map((object) => (
                    <Card bgColor="#e7f3fb" key={object.id} width={"400"}>
                      <HStack space={6}>
                        <Heading color={"#7d5fff"}>{object.title}</Heading>
                        <HStack>
                          <Button
                            bgColor={"#e7f3fb"}
                            onPress={() => handleEditBtn(object.id)}
                          >
                            <MaterialIcons
                              name="edit"
                              size={20}
                              color="black"
                            />
                          </Button>
                          <Button
                            bgColor={"#e7f3fb"}
                            onPress={() => handleDeleteBtn(object.id)}
                          >
                            <MaterialIcons
                              name="delete"
                              size={20}
                              color="black"
                            />
                          </Button>
                        </HStack>
                      </HStack>
                      <Text fontSize={20} mt={2} fontWeight={"semibold"}>
                        {object.category}
                      </Text>
                      <Text fontSize={18} mt={1}>
                        {object.content}
                      </Text>
                      <Text fontSize={13} mt={1} color={"gray.400"}>
                        posted on : {new Date(object.created_at).toGMTString()}
                      </Text>
                    </Card>
                  ))}
              </Box>
            )}
          </Center>
        </ScrollView>
        <TrainerBottomDrawer />
      </KeyboardAvoidingView>
    </NativeBaseProvider>
  );
};

export default TrainerHealth_Forum;
