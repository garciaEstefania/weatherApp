import React, { Component } from 'react'
import { Text, View, TouchableOpacity, FlatList, ActivityIndicator, Image } from 'react-native';
import styles from "../assets/styles/style";
import Api from '../api';

export default class historyScreen extends Component {
    state={
        maxwind_mph: "",
        totalprecip_in: "",
        list:[],
        city: this.props.route.params.city,
    }

    async componentDidMount () {
        try {
            const response = await Api.getWeatherHistory(this.state.city);
            const data = response.forecast.forecastday
            var array1 = new Array();
            var array2 = new Array();
            for (let i = 0; i < data.length; i++) {
                const date = data[i].date;
                const max_tempC = data[i].day.maxtemp_c;
                const min_tempC = data[i].day.mintemp_c;
                const weatherCondition = data[i].day.condition.text;
                const image = data[i].day.condition.icon;
                array2[i] = [{date: date, max_tempC: max_tempC, min_tempC: min_tempC, weatherCondition: weatherCondition, image: image}]
                array1 = array1.concat(array2[i]) //generamos el nuevo arreglo
                console.log(array1)
            }
            this.setState({
                list: array1,
            })
        } catch (e) {
            // saving error
            throw e;
        }
    }

    empty = () => <View style={{flex:1, justifyContent:'center', alignItems: 'center' }}>
    <ActivityIndicator size="small" color="#0000ff" />
    </View>

    renderIt = ({item}) => {
      return(
        <View style={styles.historyItem}>
            <Text style={styles.textDate}>{item.date}</Text>
            <View style={styles.row}>
                <Image source={{ uri: `https://${item.image}` }} style={styles.icon} />
                <View style={styles.column}>
                    <Text style={styles.textItem}>Max</Text>
                    <Text>{item.max_tempC} °C</Text>
                </View>
                <View style={styles.column}>
                    <Text style={styles.textItem}>Min</Text>
                    <Text>{item.min_tempC} °C</Text>
                </View>
                <View style={styles.column}>
                    <Text style={styles.textItem}>Weather Condition</Text>
                    <Text>{item.weatherCondition}</Text>
                </View>
            </View>
        </View>
      )  
    };

    render() {
        return (
            <View style={styles.mainContainerHistory}>
                <View style={styles.titleContainer}>
                    <Text style={styles.titleHistory}>Weather History</Text>
                    <Text style={styles.titleCity}>{this.state.city}</Text>
                </View>
                <View style={{ flex: 0.7 }}>
                    <FlatList
                        data={this.state.list}
                        keyExtractor={(item) => item.toString()}
                        ListEmptyComponent={this.empty}
                        renderItem={this.renderIt}
                    />
                </View>
            </View>
        )
    }
}
