import React from "react";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {NavigationContainer} from "@react-navigation/native";
import Home from "../screens/Home";
import Products from "../screens/Products";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Stock from "../screens/Stock";

const Tab = createBottomTabNavigator();

function MyNav(){

    return(
        <Tab.Navigator
        initialRouteName="Home"
        screenOptions={{
            tabBarActiveTintColor:'#F05742'
        }}>
            <Tab.Screen name='Productos' component={Home}
            options={{
                tabBarIcon:({})=>{
                    
                    return(<MaterialCommunityIcons name="format-list-bulleted" size={30} color="#F05742" />)
                }
            }}/>
            <Tab.Screen name='Recetas' component={Products}
            options={{
                tabBarIcon:({})=>{
                    
                    return(<MaterialCommunityIcons name="bowl-mix-outline" size={30} color="#F05742" />)
                }
            }}/>
            <Tab.Screen name='Proveedor' component={Stock}
            options={{
                tabBarIcon:({})=>{
                    
                    return(<MaterialCommunityIcons name="ballot-outline" size={30} color="#F05742" />)
                }
            }}/>
        </Tab.Navigator>
    )
}

export default function Navigation(){
    return(
        <NavigationContainer>
            <MyNav/>
        </NavigationContainer>
    )
}