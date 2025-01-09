import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Home } from '../Pages/home';
import { GeraPass } from '../Pages/geraPass';
import Feather from "react-native-vector-icons/Feather"


const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const HomeStack = () => {
    return (
        <Stack.Navigator 
        initialRouteName="Home"
        screenOptions={{headerShown: false}}>
                <Stack.Screen name="Home" component={Home} />
                <Stack.Screen name="GeraPasss" component={GeraPass} />
            </Stack.Navigator>
    )
}

const Routes = () => {
    return (
        <NavigationContainer>
            <Tab.Navigator
             screenOptions={{
                headerShown: false,
                tabBarHideOnKeyboard: true,
                tabBarShowLabel: false,
                tabBarActiveTintColor: '#FFF',

                tabBarStyle:{
                    backgroundColor: '#202225',
                    borderTopWidth: 0,
                }
            }}
            >
                <Tab.Screen
                 name="Home" 
                 component={HomeStack}
                 options={{
                    tabBarIcon: ({ color, size}) => {
                        return <Feather name= "home" color={color} size={size} />
                    }
                  }}

                 />
                <Tab.Screen
                name="GeraPass" 
                component={GeraPass}
                options={{
                    tabBarIcon: ({ color, size}) => {
                        return <Feather name= "key" color={color} size={size} />
                    }
                  }}
                />
            </Tab.Navigator>
        </NavigationContainer>
    );
};

export  {Routes};