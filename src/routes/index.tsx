import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Home } from '../Pages/home';
import { GeraPass } from '../Pages/geraPass';


const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const HomeStack = () => {
    return (
        <Stack.Navigator 
        initialRouteName="Home"
        screenOptions={{headerShown: false}}>
                <Stack.Screen name="Home" component={Home} />
                <Stack.Screen name="GeraPass" component={GeraPass} />
            </Stack.Navigator>
    )
}

const Routes = () => {
    return (
        <NavigationContainer>
            <Tab.Navigator
            screenOptions={{headerShown: false}}
            >
                <Tab.Screen name="Home" component={HomeStack}/>
                <Tab.Screen name="GeraPass" component={GeraPass}/>
            </Tab.Navigator>
        </NavigationContainer>
    );
};

export  {Routes};