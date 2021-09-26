import React, { Component } from 'react'
import { Text, View, TouchableOpacity, FlatList, KeyboardAvoidingView, TextInput, Image } from 'react-native';
import styles from "../assets/styles/style";
import Api from '../api';

export default class historyScreen extends Component {

    async componentDidMount (){
        try {
            const response = await Api.getWeatherHistory(city);
            cityList.push(
                {
                    city: city,
                    tempC: response.current.temp_c,
                    tempF: response.current.temp_f,
                },
            )
            this.setState(prevState => ({
                ...prevState,
                list: cityList,
            }));
            
            console.log('ciudad: ', this.state.list)
        } catch (e) {
            // saving error
            throw e;
        }
    }

    render() {
        return (
            <View>
                <Text> textInComponent </Text>
            </View>
        )
    }
}
