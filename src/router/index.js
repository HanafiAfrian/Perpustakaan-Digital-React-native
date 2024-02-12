import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
// import {BottomNavigator} from '../components/';

import Home from '../Pages/Home';
import Splash from '../Pages/Splash';
import Buku from '../Pages/Buku';
import BukuDetail from '../Pages/BukuDetail';
import Login from '../Pages/Login';
import Authotp from '../Pages/Authotp';
import Daftar from '../Pages/Daftar';
import Auth from '../Pages/Auth';
import Kategoribuku from '../Pages/Kategoribuku';
import Caribuku from '../Pages/Caribuku';
import Pesanan from '../Pages/Pesanan';
import Notifikasi from '../Pages/Notifikasi';
import Profil from '../Pages/Profil';


const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const MainApp = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name=" " component={Home} options={{headerShown: false}} />
    </Tab.Navigator>
  );
};

const Router = () => {
  return (
    <Stack.Navigator initialRouteName="Splash">
      <Stack.Screen
        name="MainApp"
        component={MainApp}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Splash"
        component={Splash}
        options={{headerShown: false}}
      />  
	  <Stack.Screen
        name="Login"
        component={Login}
        options={{headerShown: false}}
      />  
	  <Stack.Screen
        name="Authotp"
        component={Authotp}
        options={{headerShown: false}}
      /> 
	  <Stack.Screen
        name="Auth"
        component={Auth}
        options={{headerShown: false}}
      />  
	  <Stack.Screen
        name="Daftar"
        component={Daftar}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Home"
        component={Home}
        options={{headerShown: false}}
      />
        <Stack.Screen
        name="Buku"
        component={Buku}
        options={{headerShown: false}}
      />  
	  <Stack.Screen
        name="BukuDetail"
        component={BukuDetail}
        options={{headerShown: false}}
      />  
	  <Stack.Screen
        name="Kategoribuku"
        component={Kategoribuku}
        options={{headerShown: false}}
      /> 	 
	  <Stack.Screen
        name="Caribuku"
        component={Caribuku}
        options={{headerShown: false}}
      />   
	  <Stack.Screen
        name="Profil"
        component={Profil}
        options={{headerShown: false}}
      /> 
	  <Stack.Screen
        name="Notifikasi"
        component={Notifikasi}
        options={{headerShown: false}}
      /> 
	  <Stack.Screen
        name="Pesanan"
        component={Pesanan}
        options={{headerShown: false}}
      /> 
	

      	  
      {/* ktp-sbs */}
    </Stack.Navigator>
  );
};

export default Router;

const styles = StyleSheet.create({});
