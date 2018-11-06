import React from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import { getList} from '../procedures/scrapeList.js';

const currencyDetails = getList();

export default class CryptoScreen extends React.Component {
  static navigationOptions = {
    title: 'List of Cryptocurrencies',
  };

  render () {
    return (
      <ScrollView>
        <Text id="test1">Hello!</Text>
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

currencyDetails

const styles = StyleSheet.create({
  // styles for elements go here
});
