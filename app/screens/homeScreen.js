import React, { Component, createRef } from 'react';
import { Text, View, TouchableOpacity, FlatList, KeyboardAvoidingView, TextInput, Image } from 'react-native';
import styles from "../assets/styles/style";
import Api from '../api';

const cityList = [];

export default class homeScreen extends Component {
    state={
        defaultCity: "Paris",
        tempDefaultCityC: "",
        tempDefaultCityF: "",
        city: "",
        list:[],
        tempScale: "°C",
        Celcius: true,
    }

    constructor(props) {
        super(props);
        this.cityRef = createRef();
    }

    async componentDidMount (){
        try {
            const data = await Api.getWeather(this.state.defaultCity)
            this.setState({
                tempDefaultCityC: data.current.temp_c,
                tempDefaultCityF: data.current.temp_f,
            })
        } catch (err) {
            console.log(err)
        }
    };

    addCity = async (city) => {
        try {
            const response = await Api.getWeather(city);
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
            this.txtAddCity.clear()
        } catch (e) {
            // saving error
            throw e;
        }
    };

    deleteCity = (city) => {  
        const indice = this.state.list.findIndex((elemento, indice) => {
            if (elemento.city === city) {
                return true;
            }
        });
        console.log('indice: ', indice)
        this.state.list.splice(indice, 1);
        console.log('new list: ', this.state.list)
    };

    weatherHistory = (city) => {
        this.props.navigation.navigate('HistoryScreen', {
            city: city,
        })
    };

    convertToFarenheit = () => {
        this.setState({
            tempScale: "°F",
            Celcius: false,
        })
    };

    convertToCelcius = () => {
        this.setState({
            tempScale: "°C",
            Celcius: true,
        })
    };
    
    empty = () => <View style={{flex:1, justifyContent:'center', alignItems: 'center' }}>
    <Text>No cities added yet</Text>
    </View>

    renderIt = ({item}) => {
      return(
            <View style={styles.cityItem}>
            {this.state.Celcius ?
                <View style={styles.itemInfo}>
                    <Text style={styles.cityTitle}>{item.city}</Text>
                    <Text style={styles.tempTitle}>{item.tempC} {this.state.tempScale}</Text>
                </View>
            :
                <View style={styles.itemInfo}>
                    <Text style={styles.cityTitle}>{item.city}</Text>
                    <Text style={styles.tempTitle}>{item.tempF} {this.state.tempScale}</Text>
                </View>
            }
                <View style={styles.itemOptions}>
                    <TouchableOpacity
                            onPress={()=> {this.deleteCity(item.city)}} style={styles.btnAdd}>
                            <Image source={require('../assets/images/trash-icon.png')} style={styles.btnImage}/>
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={()=> {this.weatherHistory(item.city)}} style={styles.btnAdd}>
                            <Image source={require('../assets/images/clock-icon.png')} style={styles.btnImage}/>
                        </TouchableOpacity>
                </View>
            </View>
      )  
    };
    
    render() {
        return (
            <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'} keyboardVerticalOffset={20} style={{flex:1}}>
            <View style={styles.mainContainerHome}>
                <View style={styles.containerDefaultCity}>
                    <Text style={styles.defaultCityTitle}>{this.state.defaultCity}</Text>
                    {this.state.Celcius ?
                        <Text style={styles.defaultCityText}>{this.state.tempDefaultCityC} {this.state.tempScale}</Text>
                    :
                        <Text style={styles.defaultCityText}>{this.state.tempDefaultCityF} {this.state.tempScale}</Text>
                    }
                </View>
                <View style={styles.inputContainer}>
                    <TextInput
                        placeholder="Type City"
                        placeholderTextColor='lightgray'
                        style={styles.inputEnterCity}
                        onChangeText={text => this.setState(prevState => ({ ...prevState, city: text }))}
                        value={this.state.city}
                        blurOnSubmit={false}
                        ref={inputAdd => {this.txtAddCity = inputAdd}}
                        onSubmitEditing={() => this.cityRef.current?.focus()}
                    />
                    <View style={styles.viewBtnAdd}>
                        <TouchableOpacity
                            onPress={()=> {this.addCity(this.state.city)}} style={styles.btnAdd}>
                            <Image source={require('../assets/images/plus-icon.png')} style={styles.btnImage}/>
                        </TouchableOpacity>
                    </View>
                </View>
                {this.state.Celcius ?
                    <View style={styles.viewBtnTemps}>
                        <Text style={styles.textConvert}>Convert to</Text>
                        <TouchableOpacity
                            onPress={()=> {this.convertToCelcius(this.state.city)}} style={styles.btnTempActive}>
                            <Text style={styles.textTemp}>Celcius</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={()=> {this.convertToFarenheit(this.state.city)}} style={styles.btnTemp}>
                            <Text style={styles.textTemp}>Farenheit</Text>
                        </TouchableOpacity>
                    </View>
                :
                    <View style={styles.viewBtnTemps}>
                        <Text style={styles.textConvert}>Convert to</Text>
                        <TouchableOpacity
                            onPress={()=> {this.convertToCelcius(this.state.city)}} style={styles.btnTemp}>
                            <Text style={styles.textTemp}>Celcius</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={()=> {this.convertToFarenheit(this.state.city)}} style={styles.btnTempActive}>
                            <Text style={styles.textTemp}>Farenheit</Text>
                        </TouchableOpacity>
                    </View>
                }
                <View style={{ flex: 0.7 }}>
                    <FlatList
                        data={this.state.list}
                        keyExtractor={(item) => item.city.toString()}
                        ListEmptyComponent={this.empty}
                        renderItem={this.renderIt}
                    />
                </View>
            </View>
            </KeyboardAvoidingView>
        )
    }
}
