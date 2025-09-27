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
        <Stack.Screen
          name="Register1"
          component={RegisterScreen1}
          options={({ navigation }) => ({
            headerShown: true, // Mostrar el encabezado
            title: 'Registro', // Título de la pantalla
            headerLeft: () => (
              <TouchableOpacity onPress={() => navigation.goBack()}>
                <Ionicons name="arrow-back" size={24} color="black" />
              </TouchableOpacity>
            ),
          })}
        />
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={({ navigation }) => ({
            headerShown: true,
            title: 'Iniciar Sesión',
            headerLeft: () => (
              <TouchableOpacity onPress={() => navigation.goBack()}>
                <Ionicons name="arrow-back" size={24} color="black" />
              </TouchableOpacity>
            ),
          })}
        />
        <Stack.Screen
          name="ForgotPassword"
          component={ForgotPasswordScreen}
          options={({ navigation }) => ({
            headerShown: true,
            title: 'Recuperar Contraseña',
            headerLeft: () => (
              <TouchableOpacity onPress={() => navigation.goBack()}>
                <Ionicons name="arrow-back" size={24} color="black" />
              </TouchableOpacity>
            ),
          })}
        />
        <Stack.Screen
          name="Register3"
          component={RegisterScreen3}
          options={({ navigation }) => ({
            headerShown: true,
            title: 'Registro (3/4)',
            headerLeft: () => (
              <TouchableOpacity onPress={() => navigation.goBack()}>
                <Ionicons name="arrow-back" size={24} color="black" />
              </TouchableOpacity>
            ),
          })}
        />
        <Stack.Screen
          name="Register4"
          component={RegisterScreen4}
          options={({ navigation }) => ({
            headerShown: true,
            title: 'Registro (4/4)',
            headerLeft: () => (
              <TouchableOpacity onPress={() => navigation.goBack()}>
                <Ionicons name="arrow-back" size={24} color="black" />
              </TouchableOpacity>
            ),
          })}
        />
        <Stack.Screen
          name="BusinessHome"
          component={BusinessHomeScreen}
          options={{ headerShown: false }} // Esta pantalla no tendrá botón de retroceso
        />
        <Stack.Screen
          name="CreateDynamic"
          component={CreateDynamicScreen}
          options={({ navigation }) => ({
            headerShown: true,
            title: 'Crear Dinámica',
            headerLeft: () => (
              <TouchableOpacity onPress={() => navigation.goBack()}>
                <Ionicons name="arrow-back" size={24} color="black" />
              </TouchableOpacity>
            ),
          })}
        />
        <Stack.Screen
          name="OwnerInfo"
          component={OwnerInfoScreen}
          options={({ navigation }) => ({
            headerShown: true,
            title: 'Información del Propietario',
            headerLeft: () => (
              <TouchableOpacity onPress={() => navigation.goBack()}>
                <Ionicons name="arrow-back" size={24} color="black" />
              </TouchableOpacity>
            ),
          })}
        />
        <Stack.Screen
          name="YourDynamics"
          component={YourDynamicsScreen}
          options={({ navigation }) => ({
            headerShown: true,
            title: 'Tus Dinámicas',
            headerLeft: () => (
              <TouchableOpacity onPress={() => navigation.goBack()}>
                <Ionicons name="arrow-back" size={24} color="black" />
              </TouchableOpacity>
            ),
          })}
        />
        <Stack.Screen
          name="BusinessInfo"
          component={BusinessInfoScreen}
          options={({ navigation }) => ({
            headerShown: true,
            title: 'Información del Negocio',
            headerLeft: () => (
              <TouchableOpacity onPress={() => navigation.goBack()}>
                <Ionicons name="arrow-back" size={24} color="black" />
              </TouchableOpacity>
            ),
          })}
        />
        <Stack.Screen
          name="ProductList"
          component={ProductListScreen}
          options={({ navigation }) => ({
            headerShown: true,
            title: 'Lista de Productos',
            headerLeft: () => (
              <TouchableOpacity onPress={() => navigation.goBack()}>
                <Ionicons name="arrow-back" size={24} color="black" />
              </TouchableOpacity>
            ),
          })}
        />
        <Stack.Screen
          name="Chat"
          component={ChatScreen}
          options={({ navigation }) => ({
            headerShown: true,
            title: 'Chat',
            headerLeft: () => (
              <TouchableOpacity onPress={() => navigation.goBack()}>
                <Ionicons name="arrow-back" size={24} color="black" />
              </TouchableOpacity>
            ),
          })}
        />
        <Stack.Screen
          name="FollowersAndRewards"
          component={FollowersAndRewardsScreen}
          options={({ navigation }) => ({
            headerShown: true,
            title: 'Seguidores y Recompensas',
            headerLeft: () => (
              <TouchableOpacity onPress={() => navigation.goBack()}>
                <Ionicons name="arrow-back" size={24} color="black" />
              </TouchableOpacity>
            ),
          })}
        />
        <Stack.Screen
          name="FollowerInfo"
          component={FollowerInfoScreen}
          options={({ navigation }) => ({
            headerShown: true,
            title: 'Información del Seguidor',
            headerLeft: () => (
              <TouchableOpacity onPress={() => navigation.goBack()}>
                <Ionicons name="arrow-back" size={24} color="black" />
              </TouchableOpacity>
            ),
          })}
        />
        <Stack.Screen
          name="ContactUs"
          component={ContactUsScreen}
          options={({ navigation }) => ({
            headerShown: true,
            title: 'Contáctanos',
            headerLeft: () => (
              <TouchableOpacity onPress={() => navigation.goBack()}>
                <Ionicons name="arrow-back" size={24} color="black" />
              </TouchableOpacity>
            ),
          })}
        />
        <Stack.Screen
          name="AboutNED"
          component={AboutNEDScreen}
          options={({ navigation }) => ({
            headerShown: true,
            title: 'Acerca de NED',
            headerLeft: () => (
              <TouchableOpacity onPress={() => navigation.goBack()}>
                <Ionicons name="arrow-back" size={24} color="black" />
              </TouchableOpacity>
            ),
          })}
        />
        <Stack.Screen
          name="NewConsumerDynamic"
          component={NewConsumerDynamicScreen}
          options={({ navigation }) => ({
            headerShown: true,
            title: 'Nueva Dinámica de Consumidor',
            headerLeft: () => (
              <TouchableOpacity onPress={() => navigation.goBack()}>
                <Ionicons name="arrow-back" size={24} color="black" />
              </TouchableOpacity>
            ),
          })}
        />
        <Stack.Screen
          name="TwoForOneDynamic"
          component={TwoForOneDynamicScreen}
          options={({ navigation }) => ({
            headerShown: true,
            title: 'Dinámica 2x1',
            headerLeft: () => (
              <TouchableOpacity onPress={() => navigation.goBack()}>
                <Ionicons name="arrow-back" size={24} color="black" />
              </TouchableOpacity>
            ),
          })}
        />
        <Stack.Screen
          name="CreateTwoForOneDynamic"
          component={CreateTwoForOneDynamicScreen}
          options={({ navigation }) => ({
            headerShown: true,
            title: 'Crear Dinámica 2x1',
            headerLeft: () => (
              <TouchableOpacity onPress={() => navigation.goBack()}>
                <Ionicons name="arrow-back" size={24} color="black" />
              </TouchableOpacity>
            ),
          })}
        />
        <Stack.Screen
          name="AdDynamic"
          component={AdDynamicScreen}
          options={({ navigation }) => ({
            headerShown: true,
            title: 'Dinámica de Anuncio',
            headerLeft: () => (
              <TouchableOpacity onPress={() => navigation.goBack()}>
                <Ionicons name="arrow-back" size={24} color="black" />
              </TouchableOpacity>
            ),
          })}
        />
        <Stack.Screen
          name="CreateAdDynamic"
          component={CreateAdDynamicScreen}
          options={({ navigation }) => ({
            headerShown: true,
            title: 'Crear Dinámica de Anuncio',
            headerLeft: () => (
              <TouchableOpacity onPress={() => navigation.goBack()}>
                <Ionicons name="arrow-back" size={24} color="black" />
              </TouchableOpacity>
            ),
          })}
        />
        <Stack.Screen
          name="Discount"
          component={DiscountScreen}
          options={({ navigation }) => ({
            headerShown: true,
            title: 'Descuento',
            headerLeft: () => (
              <TouchableOpacity onPress={() => navigation.goBack()}>
                <Ionicons name="arrow-back" size={24} color="black" />
              </TouchableOpacity>
            ),
          })}
        />
        <Stack.Screen
          name="CreateDiscountDynamic"
          component={CreateDiscountDynamicScreen}
          options={({ navigation }) => ({
            headerShown: true,
            title: 'Crear Dinámica de Descuento',
            headerLeft: () => (
              <TouchableOpacity onPress={() => navigation.goBack()}>
                <Ionicons name="arrow-back" size={24} color="black" />
              </TouchableOpacity>
            ),
          })}
        />
        <Stack.Screen
          name="ConsumerHome"
          component={ConsumerHomeScreen}
          options={{ headerShown: false }} // Esta pantalla no tendrá botón de retroceso
        />
        <Stack.Screen
          name="ConsumerHome1"
          component={ConsumerHomeScreen1}
          options={{ headerShown: false }} // Esta pantalla no tendrá botón de retroceso
        />
        <Stack.Screen
          name="ConsumerAccount"
          component={ConsumerAccountScreen}
          options={({ navigation }) => ({
            headerShown: true,
            title: 'Cuenta de Consumidor',
            headerLeft: () => (
              <TouchableOpacity onPress={() => navigation.goBack()}>
                <Ionicons name="arrow-back" size={24} color="black" />
              </TouchableOpacity>
            ),
          })}
        />
        <Stack.Screen
          name="ConsumerSearch"
          component={ConsumerSearchScreen}
          options={({ navigation }) => ({
            headerShown: true,
            title: 'Buscar Negocios',
            headerLeft: () => (
              <TouchableOpacity onPress={() => navigation.goBack()}>
                <Ionicons name="arrow-back" size={24} color="black" />
              </TouchableOpacity>
            ),
          })}
        />
        <Stack.Screen
          name="ConsumerBusinessSearch"
          component={ConsumerBusinessSearchScreen}
          options={({ navigation }) => ({
            headerShown: true,
            title: 'Buscar Negocios',
            headerLeft: () => (
              <TouchableOpacity onPress={() => navigation.goBack()}>
                <Ionicons name="arrow-back" size={24} color="black" />
              </TouchableOpacity>
            ),
          })}
        />
        <Stack.Screen
          name="ConsumerYourBusinesses"
          component={ConsumerYourBusinessesScreen}
          options={({ navigation }) => ({
            headerShown: true,
            title: 'Tus Negocios',
            headerLeft: () => (
              <TouchableOpacity onPress={() => navigation.goBack()}>
                <Ionicons name="arrow-back" size={24} color="black" />
              </TouchableOpacity>
            ),
          })}
        />
        <Stack.Screen
          name="ConsumerChat"
          component={ConsumerChatScreen}
          options={({ navigation }) => ({
            headerShown: true,
            title: 'Chat de Consumidor',
            headerLeft: () => (
              <TouchableOpacity onPress={() => navigation.goBack()}>
                <Ionicons name="arrow-back" size={24} color="black" />
              </TouchableOpacity>
            ),
          })}
        />
        <Stack.Screen
          name="ConsumerAboutNed"
          component={ConsumerAboutNedScreen}
          options={({ navigation }) => ({
            headerShown: true,
            title: 'Acerca de NED',
            headerLeft: () => (
              <TouchableOpacity onPress={() => navigation.goBack()}>
                <Ionicons name="arrow-back" size={24} color="black" />
              </TouchableOpacity>
            ),
          })}
        />
        <Stack.Screen
          name="ConsumerYourRewards"
          component={ConsumerYourRewardsScreen}
          options={({ navigation }) => ({
            headerShown: true,
            title: 'Tus Recompensas',
            headerLeft: () => (
              <TouchableOpacity onPress={() => navigation.goBack()}>
                <Ionicons name="arrow-back" size={24} color="black" />
              </TouchableOpacity>
            ),
          })}
        />
        <Stack.Screen
          name="ConsumerBusinessDetail"
          component={ConsumerBusinessDetailScreen}
          options={({ navigation }) => ({
            headerShown: true,
            title: 'Detalle del Negocio',
            headerLeft: () => (
              <TouchableOpacity onPress={() => navigation.goBack()}>
                <Ionicons name="arrow-back" size={24} color="black" />
              </TouchableOpacity>
            ),
          })}
        />
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
