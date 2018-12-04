import React from 'react';
import { StyleSheet, View, Text, TextInput } from 'react-native';

export default class Converter extends React.Component {
  constructor (props) {
    super(props);
    this.state= { coin: 0, currency: 0};
  };

  updateCoin = (text) => {
    this.setState({coin: text });
  }

  updateCurrency = (text) => {
    this.setState({currency: text });
  }

  convertCoinToCurrency = () => {
    this.setState({
      currency: (this.state.coin * this.props.conversionRate).toFixed(2)
    });
  };

  convertCurrencyToCoin = () => {
    this.setState({
      coin: (this.state.currency / this.props.conversionRate).toFixed(2)
    });
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.row}>
          <Text style={styles.label}>Coins</Text>
          <TextInput
            style={styles.numberField}
            keyboardType="numeric"
            returnKeyType='done'
            onChangeText={this.updateCoin}
            onEndEditing={this.convertCoinToCurrency}
            placeholder="0"
            value={ this.state.coin }
            />
        </View>
        <View style={styles.row} >
          <Text style={styles.label}>$CAD</Text>
          <TextInput
            style={styles.numberField}
            keyboardType="numeric"
            returnKeyType='done'
            onChangeText={this.updateCurrency}
            onEndEditing={this.convertCurrencyToCoin}
            placeholder="0"
            value={ this.state.currency }
            />
        </View>

      </View>
    );
  };


}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  row: {
    flexDirection: 'row',
    marginLeft: 40,
    marginRight: 40,
    marginTop: 10
  },
  label: {
    flex: 1,
    padding: 10,
    margin: 2,
    textAlign: 'center',
    backgroundColor: '#fdfdfd'
  },
  numberField: {
    flex: 2,
    margin: 2,
    backgroundColor: '#d2d4d8',
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center'
  }
});
