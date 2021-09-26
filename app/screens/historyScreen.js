import React, { Component } from 'react'
import { Text, View, TouchableOpacity, FlatList, KeyboardAvoidingView, TextInput, Image } from 'react-native';
import styles from "../assets/styles/style";
import Api from '../api';

export default class historyScreen extends Component {

    async componentDidMount (city){
        try {
            const response = await Api.getWeatherHistory(city);
            
        } catch (e) {
            // saving error
            throw e;
        }
    }

    render() {
        return (
            <View>
                <Text> Weather History </Text>
            </View>
        )
    }
}
