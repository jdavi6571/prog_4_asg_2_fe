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
                <View>
                  <Text key={i}>{coin.name}: {coin.price}</Text>
                </View>
              )
            })
          }
        </View>
      );
    }
}

const currencyDetails = [
    { name: 'bitcoin', price: '$1', favourite: true},
    { name: 'etherium', price: '$2', favourite: false},
  ];

const styles = StyleSheet.create({
  // styles for elements go here
});
