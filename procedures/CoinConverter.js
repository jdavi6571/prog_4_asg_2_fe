import React from 'react';
import { View, Text, TextInput, Image, Dimensions } from 'react-native';

export default class Converter extends React.Component {
  constructor (props) {
    super(props);
    this.state= { coin: 0, currency: 0, conversionRate: 1.05};
  };

  convertCoinToCurrency = () => {
    this.state.currency = this.state.coin * this.state.conversionRate;
  };

  convertCurrencyToCoin = () => {
    return currency / conversionRate;
  };

  render() {
    return (
      <View>
        <Text>Hello from coin coverter!</Text>
        <TextInput placeholder="Coins" onChangeText = {this.convertCoinToCurrency()}/>
        <Text placeholder="Crypto">
      </View>
    );
  };

}
