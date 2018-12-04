import React from 'react';
import { View, Text, Image, StyleSheet, Dimensions, ScrollView } from 'react-native';
import { Card, ListItem, Button } from 'react-native-elements';
import { LineChart } from 'react-native-chart-kit';
import Converter from '../procedures/CoinConverter.js';

export default class MoreDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      initialized: false,
      coinID: '',
      price: 0,
      changePct: 0,
      volume24: 0,
      tempConversionRate: 1.05
    };
    this.getSingleDetails();
  }
  onLayout = (e) => {
    this.setState({
      initialized: true,
      width: e.nativeEvent.layout.width,
      height: e.nativeEvent.layout.height,
      x: e.nativeEvent.layout.x,
      y: e.nativeEvent.layout.y
    })
  }

  getSingleDetails() {
    var id = this.props.navigation.state.params.marketKey;

    fetch('https://min-api.cryptocompare.com/data/pricemultifull?fsyms='+id+'&tsyms=CAD&api_key=584fd3b43d00f3e846f51724756eed798b5814d35ce60374a210dd2277baeb48')
      .then((response) => response.json() )
      .then((responseJSON) => {
        var results = eval('responseJSON.RAW.'+id+'.CAD');

        this.setState({
          coinID: id,
          price: results.PRICE,
          changePct: results.CHANGEPCT24HOUR.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,'),
          volume24: results.TOTALVOLUME24H.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')
        });
      })
      .catch((error) => console.log(error) );
  }

  render() {
    return (
      <Card title={this.state.coinID}>
        <ScrollView>
          <View>
            <View>
              <View style={{flexDirection: 'row'}}>
                <Text style={styles.detailHeader}>Current Price</Text>
                <Text style={styles.detailHeader}>Change %</Text>
              </View>
              <View style={{ flexDirection: 'row'}}>
                <Text style={styles.detailData}>${this.state.price.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,') }</Text>
                <Text style={styles.detailData}>{this.state.changePct}%</Text>
              </View>
              <View style={{flexDirection: 'row'}}>
                <Text style={styles.detailHeader}>Volume</Text>
                <Text style={styles.detailHeader}>Other</Text>
              </View>
              <View style={{flexDirection: 'row'}}>
                <Text style={styles.detailData}>{this.state.volume24}</Text>
                <Text style={styles.detailData}>???</Text>
              </View>
            </View>
          </View>

          <Converter conversionRate={this.state.price} />

          </ScrollView>
      </Card>
    )
  }
}

const styles = StyleSheet.create({
  detailHeader: {
    flex: 1,
    marginTop: 10,
    textAlign: 'center',
    fontWeight: 'bold'
  },
  detailData: {
    flex: 1,
    textAlign: 'center'
  }
});

/*
const parsed = Number(this.state.price.replace(/[^0-9.-]+/g,""));

const fakeValues = [
  Math.random() * 5,
  Math.random() * 5,
  Math.random() * 5,
  Math.random() * 5,
  Math.random() * 5,
  Math.random() * 5
].map(randomValue =>
  parsed + randomValue
).concat(parsed);

<View onLayout={this.onLayout}>
  {this.state.initialized &&
    <LineChart
      data={{
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June'],
        datasets: [{
          data: fakeValues
        }]
      }}
      width={this.state.width} // from react-native
      height={220}
      chartConfig={{
        backgroundColor: '#e26a00',
        backgroundGradientFrom: '#fb8c00',
        backgroundGradientTo: '#ffa726',
        decimalPlaces: 2, // optional, defaults to 2dp
        color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
        style: {
          borderRadius: 16
        }
      }}
      style={{
        marginVertical: 8,
        borderRadius: 16
      }}
    />
  }
</View>
*/
