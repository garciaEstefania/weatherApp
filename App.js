import 'react-native-gesture-handler';
import React, { Component } from 'react';
import AppNavigator from './app/navigation/appNavigator';

export default class App extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <AppNavigator/>
    )
  }
}