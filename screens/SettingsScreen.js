import React from 'react';
//import { ExpoConfigView } from '@expo/samples';
import Converter from "../procedures/CoinConverter.js";

export default class SettingsScreen extends React.Component {
  static navigationOptions = {
    title: 'Coin Converter - Test',
  };

  render() {
    return (
      <Converter conversionRate='1.05'/>
    );
  }
}
