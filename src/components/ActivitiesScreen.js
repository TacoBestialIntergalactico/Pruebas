import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Text, Image } from 'react-native';
import { NativeBaseProvider, Box, Heading, VStack, FormControl, HStack, Input, Button, Link, Center } from "native-base";

function Example() {
  return (
    <Center w="100%" flex={1}>

      <Image

        source={require('../../assets/images/Encrypt.png')}

        style={{ width: '100%', height: 200, marginBottom: 20 }}

        resizeMode="contain"

      />

      <Box safeArea p="2" py="8" w="90%" maxW="290">

        <Heading size="lg" fontWeight="600">

          Welcome

        </Heading>

        <Heading mt="1"  fontWeight="medium" size="xs">

          Sign in to continue!

        </Heading>



        <VStack space={3} mt="5" >

          <FormControl>

            <FormControl.Label>Email</FormControl.Label>

            <Input />

          </FormControl>

          <FormControl>

            <FormControl.Label>Password</FormControl.Label>

            <Input type="password"  />

            <Link _text={{

              fontSize: "xs",

              fontWeight: "1000",

            }} alignSelf="flex-end" mt="1">

              Forget Password?

            </Link>

          </FormControl>

          <Button mt="2" colorScheme="green" >

            Login

          </Button>

          <HStack mt="6" justifyContent="center">

            <Text fontSize="sm" >

              I'm a new user.

              <Button

                variant="link"

                colorScheme="green"

                >

                Register

              </Button>

            </Text>

          </HStack>

        </VStack>

      </Box>

    </Center>
  )
};

function ActivitiesScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <NativeBaseProvider>
          <Text>Activities Screen!</Text>
          <StatusBar style="auto" />

          <Button
            onPress={() => navigation.navigate('Resort - Royal Valley')}
            title="Go to Resort - Royal Valley"
          />

          <Button
            onPress={() => navigation.navigate('Mustang Mountains')}
            title="Go to Mustang Mountains"
          />

          <Button
            onPress={() => navigation.navigate('Ski - Alpine Heights')}
            title="Go to Ski - Alpine Heights"
          />

          <Button
            onPress={() => navigation.navigate('Sky Diving - Alpine Heights')}
            title="Go to Sky Diving - Alpine Heights"
          />

          <Example />
      </NativeBaseProvider>
    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default ActivitiesScreen;