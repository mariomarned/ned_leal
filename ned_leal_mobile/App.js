import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { useCallback } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Ionicons } from '@expo/vector-icons'; // Importar Ionicons
import { TouchableOpacity } from 'react-native'; // Importar TouchableOpacity

import RegisterScreen1 from './screens/Auth/RegisterScreen1';
import RegisterScreen2 from './screens/Auth/RegisterScreen2';
import LoginScreen from './screens/Auth/LoginScreen';
import ForgotPasswordScreen from './screens/Auth/ForgotPasswordScreen';
import RegisterScreen3 from './screens/Auth/RegisterScreen3';
import RegisterScreen4 from './screens/Auth/RegisterScreen4';
import WelcomeScreen1 from './screens/Auth/WelcomeScreen1';
import WelcomeScreen2 from './screens/Auth/WelcomeScreen2';
import WelcomeScreen3 from './screens/Auth/WelcomeScreen3';
import WelcomeScreen4 from './screens/Auth/WelcomeScreen4';
import WelcomeScreen5 from './screens/Auth/WelcomeScreen5';
import BusinessHomeScreen from './screens/Business/BusinessHomeScreen';
import CreateDynamicScreen from './screens/Business/CreateDynamicScreen';
import OwnerInfoScreen from './screens/Business/OwnerInfoScreen';
import YourDynamicsScreen from './screens/Business/YourDynamicsScreen';
import BusinessInfoScreen from './screens/Business/BusinessInfoScreen';
import ProductListScreen from './screens/Business/ProductListScreen';
import ChatScreen from './screens/Business/ChatScreen';
import FollowersAndRewardsScreen from './screens/Business/FollowersAndRewardsScreen';
import FollowerInfoScreen from './screens/Business/FollowerInfoScreen';
import ContactUsScreen from './screens/Business/ContactUsScreen';
import AboutNEDScreen from './screens/Business/AboutNEDScreen';
import NewConsumerDynamicScreen from './screens/Business/NewConsumerDynamicScreen';
import TwoForOneDynamicScreen from './screens/Business/TwoForOneDynamicScreen';
import CreateTwoForOneDynamicScreen from './screens/Business/CreateTwoForOneDynamicScreen';
import AdDynamicScreen from './screens/Business/AdDynamicScreen';
import CreateAdDynamicScreen from './screens/Business/CreateAdDynamicScreen';
import DiscountScreen from './screens/Business/DiscountScreen';
import CreateDiscountDynamicScreen from './screens/Business/CreateDiscountDynamicScreen';
import ConsumerHomeScreen from './screens/Consumer/ConsumerHomeScreen';
import ConsumerHomeScreen1 from './screens/Consumer/ConsumerHomeScreen1';
import ConsumerAccountScreen from './screens/Consumer/ConsumerAccountScreen';
import ConsumerSearchScreen from './screens/Consumer/ConsumerSearchScreen';
import ConsumerBusinessSearchScreen from './screens/Consumer/ConsumerBusinessSearchScreen';
import ConsumerYourBusinessesScreen from './screens/Consumer/ConsumerYourBusinessesScreen';
import ConsumerChatScreen from './screens/Consumer/ConsumerChatScreen';
import ConsumerAboutNedScreen from './screens/Consumer/ConsumerAboutNedScreen';
import ConsumerYourRewardsScreen from './screens/Consumer/ConsumerYourRewardsScreen';
import ConsumerBusinessDetailScreen from './screens/Consumer/ConsumerBusinessDetailScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  const [fontsLoaded] = useFonts({
    'Nunito': require('./assets/fonts/Nunito-Regular.ttf'),
    'Alto Sans': require('./assets/fonts/Aalto Sans Pro Bold.otf'),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Welcome1">
        <Stack.Screen name="Welcome1" component={WelcomeScreen1} options={{ headerShown: false }} />
        <Stack.Screen name="Welcome2" component={WelcomeScreen2} options={{ headerShown: false }} />
        <Stack.Screen name="Welcome3" component={WelcomeScreen3} options={{ headerShown: false }} />
        <Stack.Screen name="Welcome4" component={WelcomeScreen4} options={{ headerShown: false }} />
        <Stack.Screen name="Welcome5" component={WelcomeScreen5} options={{ headerShown: false }} />
        <Stack.Screen name="Login" component={LoginScreen} options={({ navigation }) => ({
          headerShown: true,
          title: '',
          headerLeft: () => (
            <TouchableOpacity onPress={() => navigation.goBack()} style={{ marginLeft: 10 }}>
              <Ionicons name="arrow-back" size={24} color="black" />
            </TouchableOpacity>
          ),
        })} />
        <Stack.Screen name="Register1" component={RegisterScreen1} options={({ navigation }) => ({
          headerShown: true,
          title: '',
          headerLeft: () => (
            <TouchableOpacity onPress={() => navigation.goBack()} style={{ marginLeft: 10 }}>
              <Ionicons name="arrow-back" size={24} color="black" />
            </TouchableOpacity>
          ),
        })} />
        <Stack.Screen name="Register2" component={RegisterScreen2} options={({ navigation }) => ({
          headerShown: true,
          title: '',
          headerLeft: () => (
            <TouchableOpacity onPress={() => navigation.goBack()} style={{ marginLeft: 10 }}>
              <Ionicons name="arrow-back" size={24} color="black" />
            </TouchableOpacity>
          ),
        })} />
        <Stack.Screen name="Register3" component={RegisterScreen3} options={({ navigation }) => ({
          headerShown: true,
          title: '',
          headerLeft: () => (
            <TouchableOpacity onPress={() => navigation.goBack()} style={{ marginLeft: 10 }}>
              <Ionicons name="arrow-back" size={24} color="black" />
            </TouchableOpacity>
          ),
        })} />
        <Stack.Screen name="Register4" component={RegisterScreen4} options={({ navigation }) => ({
          headerShown: true,
          title: '',
          headerLeft: () => (
            <TouchableOpacity onPress={() => navigation.goBack()} style={{ marginLeft: 10 }}>
              <Ionicons name="arrow-back" size={24} color="black" />
            </TouchableOpacity>
          ),
        })} />
        <Stack.Screen name="BusinessHome" component={BusinessHomeScreen} options={{ headerShown: false }} />
        <Stack.Screen name="BusinessInfo" component={BusinessInfoScreen} options={{ headerShown: false }} />
        <Stack.Screen name="FollowersAndRewards" component={FollowersAndRewardsScreen} options={{ headerShown: false }} />
        <Stack.Screen name="ProductList" component={ProductListScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Chat" component={ChatScreen} options={{ headerShown: false }} />
        <Stack.Screen name="YourDynamics" component={YourDynamicsScreen} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
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
