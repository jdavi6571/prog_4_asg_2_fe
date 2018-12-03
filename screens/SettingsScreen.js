import React from 'react';
import { View, Text } from 'react-native';
import { getSingleDetails } from "../procedures/scrapeList.js";

export default class SettingsScreen extends React.Component {
  constructor (props) {
    super(props);

    this.state = {
      name: '',
      changePct: 0,
      volume24: 0
    };

    this.getSingleDetails();
  }

  static navigationOptions = {
    title: 'Coin Converter - Test',
  };

  getSingleDetails() {
    var coinID = 'BTC';
    fetch('https://min-api.cryptocompare.com/data/pricemultifull?fsyms='+coinID+'&tsyms=CDN&api_key=584fd3b43d00f3e846f51724756eed798b5814d35ce60374a210dd2277baeb48')
      .then((response) => response.json() )
      .then((responseJSON) => {
        alert(JSON.stringify(
          eval('responseJSON.RAW.'+coinID+'.CDN')
        ));
        var results = eval('responseJSON.RAW.'+coinID+'.CDN');

        this.setState({
          name: results.FROMSYMBOL,
          changePct: results.CHANGEPCT24HOUR,
          volume24: results.TOTALVOLUME24H
        });
      })
      .catch((error) => console.log(error) );
  }


  render() {
    return (
      <View>
        <View>
          <Text>
            Nothing to see here!
          </Text>
          <Text>{this.state.name}</Text>
          <Text>{this.state.changePct}</Text>
          <Text>{this.state.volume24}</Text>
        </View>
      </View>


    );
  }
}
