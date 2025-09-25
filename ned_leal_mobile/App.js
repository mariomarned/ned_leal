import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { useCallback } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import RegisterScreen1 from './screens/Auth/RegisterScreen1';
import LoginScreen from './screens/Auth/LoginScreen';
import ForgotPasswordScreen from './screens/Auth/ForgotPasswordScreen';
import RegisterScreen3 from './screens/Auth/RegisterScreen3';
import RegisterScreen4 from './screens/Auth/RegisterScreen4';
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
      <Stack.Navigator initialRouteName="Register1">
        <Stack.Screen name="Register1" component={RegisterScreen1} options={{ headerShown: false }} />
        <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
        <Stack.Screen name="ForgotPassword" component={ForgotPasswordScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Register3" component={RegisterScreen3} options={{ headerShown: false }} />
        <Stack.Screen name="Register4" component={RegisterScreen4} options={{ headerShown: false }} />
        <Stack.Screen name="BusinessHome" component={BusinessHomeScreen} options={{ headerShown: false }} />
        <Stack.Screen name="CreateDynamic" component={CreateDynamicScreen} options={{ headerShown: false }} />
        <Stack.Screen name="OwnerInfo" component={OwnerInfoScreen} options={{ headerShown: false }} />
        <Stack.Screen name="YourDynamics" component={YourDynamicsScreen} options={{ headerShown: false }} />
        <Stack.Screen name="BusinessInfo" component={BusinessInfoScreen} options={{ headerShown: false }} />
        <Stack.Screen name="ProductList" component={ProductListScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Chat" component={ChatScreen} options={{ headerShown: false }} />
        <Stack.Screen name="FollowersAndRewards" component={FollowersAndRewardsScreen} options={{ headerShown: false }} />
        <Stack.Screen name="FollowerInfo" component={FollowerInfoScreen} options={{ headerShown: false }} />
        <Stack.Screen name="ContactUs" component={ContactUsScreen} options={{ headerShown: false }} />
        <Stack.Screen name="AboutNED" component={AboutNEDScreen} options={{ headerShown: false }} />
        <Stack.Screen name="NewConsumerDynamic" component={NewConsumerDynamicScreen} options={{ headerShown: false }} />
        <Stack.Screen name="TwoForOneDynamic" component={TwoForOneDynamicScreen} options={{ headerShown: false }} />
        <Stack.Screen name="CreateTwoForOneDynamic" component={CreateTwoForOneDynamicScreen} options={{ headerShown: false }} />
        <Stack.Screen name="AdDynamic" component={AdDynamicScreen} options={{ headerShown: false }} />
        <Stack.Screen name="CreateAdDynamic" component={CreateAdDynamicScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Discount" component={DiscountScreen} options={{ headerShown: false }} />
        <Stack.Screen name="CreateDiscountDynamic" component={CreateDiscountDynamicScreen} options={{ headerShown: false }} />
        <Stack.Screen name="ConsumerHome" component={ConsumerHomeScreen} options={{ headerShown: false }} />
        <Stack.Screen name="ConsumerHome1" component={ConsumerHomeScreen1} options={{ headerShown: false }} />
        <Stack.Screen name="ConsumerAccount" component={ConsumerAccountScreen} options={{ headerShown: false }} />
        <Stack.Screen name="ConsumerSearch" component={ConsumerSearchScreen} options={{ headerShown: false }} />
        <Stack.Screen name="ConsumerBusinessSearch" component={ConsumerBusinessSearchScreen} options={{ headerShown: false }} />
        <Stack.Screen name="ConsumerYourBusinesses" component={ConsumerYourBusinessesScreen} options={{ headerShown: false }} />
        <Stack.Screen name="ConsumerChat" component={ConsumerChatScreen} options={{ headerShown: false }} />
        <Stack.Screen name="ConsumerAboutNed" component={ConsumerAboutNedScreen} options={{ headerShown: false }} />
        <Stack.Screen name="ConsumerYourRewards" component={ConsumerYourRewardsScreen} options={{ headerShown: false }} />
        <Stack.Screen name="ConsumerBusinessDetail" component={ConsumerBusinessDetailScreen} options={{ headerShown: false }} />
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
