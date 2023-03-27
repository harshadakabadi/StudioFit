
import React, { useLayoutEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { Select, Box, Center,View,CheckIcon,ScrollView, Text ,TextArea,Button, NativeBaseProvider, Container} from "native-base";
import StarRating from "react-native-star-rating-widget";
import { useState } from 'react';

const MemberFeedback = () => {
  const navigation = useNavigation();
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: true,
    });
  }, []);
  const [category, setCategory] = React.useState("");
  const [rating, setRating] = useState(0);
  return (
    <NativeBaseProvider>
      <ScrollView>
        <Container alignItems={"center"} m={10} width={"800"}>
          <Center>
            <Box maxW="500" mt={10}>
              <Select
                bgColor="#e7f3fb"
                selectedValue={category}
                minWidth="329"
                fontSize={16}
                accessibilityLabel="Select feedback category"
                placeholder="Select feedback category"
                _selectedItem={{
                  endIcon: <CheckIcon size="1" />,
                }}
                mt={1}
                onValueChange={(itemValue) => setCategory(itemValue)}
              >
                <Select.Item label="Positive feedback" value="positive" />
                <Select.Item label="Negative feedback" value="negative" />
                <Select.Item label="None" value="None" />
              </Select>
            </Box>
          </Center>

          <Center>
            <Text mt={30} fontSize={18}>
              Enter Your Feedback
            </Text>
            <Box>
              <TextArea
                bgColor="#e7f3fb"
                mt={15}
                height={40}
                fontSize={15}
                placeholder="Enter Your Feedback"
                width={"50%"}
                maxW="329"
              />
            </Box>
            <Text mt={30} fontSize={18}>
              Rate Us
            </Text>

            <Box alignItems="center" w="100%" mt={10}>
              <StarRating rating={rating} onChange={setRating} />
            </Box>
            <View>
              <Center>
                <Button
                  mt={20}
                  textAlign={"center"}
                  justifyContent={"center"}
                  alignItems={"center"}
                  width={300}
                  height={50}
                  borderRadius={8}
                  bgColor={"#4CAF50"}
                >
                  <Text fontSize={18} textAlign={"center"} color={"white"}>
                    Submit
                  </Text>
                </Button>
              </Center>
            </View>
          </Center>
        </Container>
      </ScrollView>
    </NativeBaseProvider>
  );
};

export default MemberFeedback;