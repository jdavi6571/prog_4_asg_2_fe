import React from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';

export default class CryptoScreen extends React.Component {
  static navigationOptions = {
    title: 'List of Cryptocurrencies',
  };

  render () {
    return (
      <ScrollView>
        <Text> This is text on the CryptoScreen.</Text>
        <Text> {this._testFunction()} </Text>
      </ScrollView>
    );
  }

  _testFunction() {
      return (
        <View>
          {currencyDetails.map(function (coin, i) {
              return (
                <Text key={i}>{coin.name}: {coin.price}</Text>
              )
            })
          }
        </View>
      );
    }
}

const currencyDetails = [
    { name: 'bitcoin', price: '$1'},
    { name: 'etherium', price: '$2'},
  ];

const styles = StyleSheet.create({
  // styles for elements go here
});
