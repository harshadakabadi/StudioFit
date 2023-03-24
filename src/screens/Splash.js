import { View } from 'react-native'
import React, { useEffect } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';
import { Center, NativeBaseProvider,Box, Container,Text } from 'native-base';

const Splash = ({navigation}) => {
    useEffect(() =>{
        setTimeout(()=>{
navigation.navigate('Login')
        },2000)
    },[]);
  return (
    <NativeBaseProvider>
      <SafeAreaView>
        <Center>
          <Box mt={350}>
            <Text
              fontSize={42}
              textAlign={"center"}
              fontWeight={"bold"}
              color={"#7d5fff"}
              opacity={0.9}
            >
              Get Started
            </Text>
          </Box>
        </Center>
      </SafeAreaView>
    </NativeBaseProvider>
  );
}

export default Splash