import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import Home from "../screens/Home";
import Products from "../screens/Products";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Stock from "../screens/Stock";
import { Image, Text } from "react-native";
import Login from "../screens/Login";

const Tab = createBottomTabNavigator();

function LogoTitle() {
    return (
        <>
      <Image
        style={{ width: 50, height: 50, marginLeft:10 }}
        source={require('../../assets/img/Logotipo.png')}
      /></>
    );
  }

function MyNav() {
  return (
    <Tab.Navigator
      initialRouteName="Login"
      screenOptions={{
        tabBarActiveTintColor: "#F05742",
      }}
    >
      
      <Tab.Screen
        name="Productos"
        component={Home}
        options={{
          tabBarIcon: ({ focused }) => {
            return focused ? (
              <MaterialCommunityIcons
                name="format-list-bulleted"
                size={30}
                color="#F05742"
              />
            ) : (
              <MaterialCommunityIcons
                name="format-list-bulleted"
                size={30}
                color="gray"
              />
            );
          },
          title: "Productos",
          headerStyle: {
            backgroundColor: "white",
            borderBottomColor: "#F05742",
            borderBottomWidth:1
          },
          headerTintColor: "#F05742",
          headerLeft:(props) => <LogoTitle {...props}/> 
        }}
      />
      <Tab.Screen
        name="Recetas"
        component={Products}
        options={{
          tabBarIcon: ({ focused }) => {
            return focused ? (
              <MaterialCommunityIcons
                name="bowl-mix-outline"
                size={30}
                color="#F05742"
              />
            ) : (
              <MaterialCommunityIcons
                name="bowl-mix-outline"
                size={30}
                color="gray"
              />
            );
          },
          title: "Recetas",
          headerStyle: {
            backgroundColor: "white",
            borderBottomColor: "#F05742",
            borderBottomWidth:1
          },
          headerTintColor: "#F05742",
          headerLeft:(props) => <LogoTitle {...props}/> 
        }}
      />
      <Tab.Screen
        name="Proveedor"
        component={Stock}
        options={{
          tabBarIcon: ({ focused }) => {
            return focused ? (
              <MaterialCommunityIcons
                name="ballot-outline"
                size={30}
                color="#F05742"
              />
            ) : (
              <MaterialCommunityIcons
                name="ballot-outline"
                size={30}
                color="gray"
              />
            );
          },
          title: "Solicitud Proveedor",
          headerStyle: {
            backgroundColor: "white",
            borderBottomColor: "#F05742",
            borderBottomWidth:1
          },
          headerTintColor: "#F05742",
          headerLeft:(props) => <LogoTitle {...props}/> 
        }}
      />
      <Tab.Screen
        name="Login"
        component={Login}
        options={{
          tabBarIcon: ({ focused }) => {
            return focused ? (
              <MaterialCommunityIcons
                name="account"
                size={30}
                color="#F05742"
              />
            ) : (
              <MaterialCommunityIcons
                name="account"
                size={30}
                color="gray"
              />
            );
          },
          title: "Iniciar sesion",
          headerStyle: {
            backgroundColor: "white",
            borderBottomColor: "#F05742",
            borderBottomWidth:1
          },
          headerTintColor: "#F05742",
          tabBarStyle:{display:'none'},
          headerLeft:(props) => <LogoTitle {...props}
          /> 
          
        }}
      />
    </Tab.Navigator>
  );
}

export default function Navigation() {
  return (
    <NavigationContainer>
      <MyNav />
    </NavigationContainer>
  );
}
