import { View } from 'react-native'
import React from 'react'
import AsyncStorage from "@react-native-async-storage/async-storage";
import {
  Box,
  Center,
  CheckIcon,
  Text,
  Button,
  ScrollView,
  NativeBaseProvider,
  TextArea,
  Select,
  Card,
  Input,
} from "native-base";
import axios from 'axios';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from "@react-navigation/native";

const EditForum = () => {
  const navigation = useNavigation();
  const [title, setTitle] = React.useState("");
  const [category, setCategory] = React.useState("");
  const [content, setContent] = React.useState("");
  
    const edit =async () => { 
    const blogid = await AsyncStorage.getItem("blogId");
    blogid &&
      axios.get(`${global.MyVar}/api/blog/${blogid}`).then(
        (response) => {
          const blog = response.data;
          setTitle(blog.title);
          setCategory(blog.category);
          setContent(blog.content);
        },
        (error) => {
          console.log(error);
        }
      );
    }

  const formSubmit = async() => {
    const blogId = await AsyncStorage.getItem("blogId");
      axios
        .patch(
          `${global.MyVar}/api/blog/${blogId}/`,
          {
            title: title,
            category: category,
            content: content,
          },
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          }
        )
        .then(function (response) {
          //console.log(response);
          alert("Blog Details Edited Successfully");
          navigation.navigate("Trainer HomeScreen");
        })
        .catch(function (error) {
          console.log(error);
        });
      }
    React.useEffect(() => {
      edit();
    }, []);

  return (
    <NativeBaseProvider>
      <SafeAreaView>
        <View>
          <View style={{ backgroundColor: "white" }}>
            <Center>
              <Card width={"350"} height={"400"} mt={150}>
                <ScrollView>
                  <Center mt={10}>
                    <Box>
                      <Input
                        bgColor="#e7f3fb"
                        fontSize={14}
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
                        fontSize={14}
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
                          fontSize={14}
                          placeholder="Enter Your Content"
                          minWidth="200"
                          value={content}
                          onChangeText={(text) => setContent(text)}
                        />
                      </Box>
                    </Center>
                    <View>
                      <Center>
                        <Button
                          mt={10}
                          textAlign={"center"}
                          justifyContent={"center"}
                          alignItems={"center"}
                          width={"80%"}
                          height={45}
                          borderRadius={8}
                          bgColor={"#4CAF50"}
                          mb={0}
                          onPress={formSubmit}
                        >
                          <Text
                            fontSize={18}
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
          </View>
        </View>
      </SafeAreaView>
    </NativeBaseProvider>
  );
}


export default EditForum