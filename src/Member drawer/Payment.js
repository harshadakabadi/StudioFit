import { View,  } from 'react-native'
import React from 'react'
import {
  Container,
  NativeBaseProvider,
  ScrollView,
  Card,
  Box,
  Text,
  Center,
  Select,CheckIcon,Button,
} from "native-base";
import MemberBottomDrawer from './MemberBottomDrawer';


const Payment = () => {
    const plans = [
      "Monthly Plan",
    ];
    const amount = [800];
    const discount=[200];
    const [category, setCategory] = React.useState("");
  return (
    <NativeBaseProvider>
      <ScrollView>
        <Center>
          <Container mt={50} maxWidth="1000">
            <Center>
              <Box>
                {plans.map((element, index) => (
                  <Card key={element}>
                    <Text underline fontWeight={"semibold"}>
                      Order Summary
                    </Text>
                    <Text>Plan Purchase : {element}</Text>
                    <Text>Plan Amount : {amount[index]}</Text>
                    <Text>Discount : {discount[index]}</Text>
                    <Text>
                      Total Amount : {amount[index] - discount[index]}
                    </Text>
                  </Card>
                ))}
              </Box>

              <Box mt={70}>
                <Select
                  bgColor="#e7f3fb"
                  selectedValue={category}
                  minWidth="329"
                  fontSize={16}
                  accessibilityLabel="Choose Payment mode"
                  placeholder="Choose Payment mode"
                  _selectedItem={{
                    endIcon: <CheckIcon size="1" />,
                  }}
                  mt={1}
                  onValueChange={(itemValue) => setCategory(itemValue)}
                >
                  <Select.Item label="Online" value="Online" />
                  <Select.Item label="Offline" value="Offline" />
                  <Select.Item label="Net banking" value="Net banking" />
                </Select>
              </Box>
              <Button
                mt={150}
                color="primary"
                textAlign={"center"}
                justifyContent={"center"}
                alignItems={"center"}
                onPress={() => {}}
                width={"300"}
              >
                <Text textAlign={"center"} color="white">
                  Pay
                </Text>
              </Button>
            </Center>
          </Container>
        </Center>
      </ScrollView>
      <MemberBottomDrawer/>
    </NativeBaseProvider>
  );
}

export default Payment