import 'react-native-gesture-handler';
import React, { Component } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from '../screens/homeScreen';
import HistoryScreen from '../screens/historyScreen';

const HomeStack = createStackNavigator();

export default class AppNavigator extends Component {
    constructor(props) {
      super(props);
    }
  
    render() {
        return (
            <NavigationContainer>
                <HomeStack.Navigator initialRouteName="HomeScreen" screenOptions={{ headerShown: false }}>
                    <HomeStack.Screen name="HomeScreen" component={HomeScreen} />
                    <HomeStack.Screen name="HistoryScreen" component={HistoryScreen} />
                </HomeStack.Navigator>
            </NavigationContainer>
        )
    }
}