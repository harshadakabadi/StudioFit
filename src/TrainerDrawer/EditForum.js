import { View } from 'react-native'
import React from 'react'
import { Modal } from 'react-native-paper';
import { NativeRouter } from 'react-router-native';
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
import { SafeAreaView } from 'react-native-safe-area-context';

const EditForum = (props) => {
  console.warn("props:"+props.match.params.id)
  return (
    <NativeBaseProvider>
      <SafeAreaView>
          <View>
            <Modal transparent={true} visible={true}>
              <View style={{ backgroundColor: "white" }}>
                <Center>
                  <Card width={"350"} height={"400"} mt={600} >
                    <ScrollView>
                      <Center>
                        <Box>
                          <Input
                            bgColor="#e7f3fb"
                            fontSize={13}
                            minWidth="200"
                            placeholder="Title of Forum"
                            // value={title}
                            //onChangeText={(text) => setTitle(text)}
                          />
                        </Box>
                        <Box maxW="300" mt={4}>
                          <Select
                            bgColor="#e7f3fb"
                            //  selectedValue={category}
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
                            // onValueChange={(itemValue) => setCategory(itemValue)}
                          >
                            <Select.Item
                              shadow={2}
                              label="Health"
                              value={"Health"}
                              //onChangeText={(text) => setCategory(text)}
                            />
                            <Select.Item
                              shadow={2}
                              label="Diet"
                              value={"Diet"}
                              //onChangeText={(text) => setCategory(text)}
                            />
                            <Select.Item
                              shadow={2}
                              label="Motivation"
                              value={"Motivation"}
                              //onChangeText={(text) => setCategory(text)}
                            />
                            <Select.Item
                              shadow={2}
                              label="Workout"
                              value={"Workout"}
                              //onChangeText={(text) => setCategory(text)}
                            />
                            <Select.Item
                              shadow={2}
                              label="Clothing"
                              value={"Clothing"}
                              //onChangeText={(text) => setCategory(text)}
                            />
                            <Select.Item
                              shadow={2}
                              label="Body building"
                              value={"Body building"}
                              //onChangeText={(text) => setCategory(text)}
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
                              // value={content}
                              //onChangeText={(text) => setContent(text)}
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
                              //onPress={postData}
                            >
                              <Text
                                fontSize={15}
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
            </Modal>
          </View>
      </SafeAreaView>
    </NativeBaseProvider>
  );
}

export default NativeRouter(EditForum)