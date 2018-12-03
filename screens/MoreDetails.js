import React from 'react';
import { View, Text, Image, Dimensions, ScrollView } from 'react-native';
import { Card, ListItem, Button } from 'react-native-elements';
import { LineChart } from 'react-native-chart-kit';

//export default (props) => <Text>hmm {JSON.stringify(props, null, 2)}</Text>

export default class MoreDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      initialized: false,
      price: 0,
      changePct: 0,
      volume24: 0
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
    var coinID =  this.props.navigation.state.params.itemData.marketName;
    fetch('https://min-api.cryptocompare.com/data/pricemultifull?fsyms='+coinID+'&tsyms=CDN&api_key=584fd3b43d00f3e846f51724756eed798b5814d35ce60374a210dd2277baeb48')
      .then((response) => response.json() )
      .then((responseJSON) => {
        var results = eval('responseJSON.RAW.'+coinID+'.CDN');

        this.setState({
          price: results.PRICE.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,'),
          changePct: results.CHANGEPCT24HOUR.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,'),
          volume24: results.TOTALVOLUME24H.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')
        });
      })
      .catch((error) => console.log(error) );
  }

  render() {

    const { itemData } = this.props.navigation.state.params;
    const currentPrice = itemData.currentDollarValue;
    const parsed = Number(currentPrice.replace(/[^0-9.-]+/g,""));

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


    return (
      <Card title={itemData.name}>
        <ScrollView>
          <View>
            <View>
              <View style={{flexDirection: 'row'}}>
                <Text style={{flex: '1'}}>Current Price</Text>
                <Text style={{flex: '1'}}>Change %</Text>
              </View>
              <View style={{ flexDirection: 'row'}}>
                <Text style={{flex: '1'}}>${this.state.price}</Text>
                <Text style={{flex: '1'}}>{this.state.changePct}%</Text>
              </View>
              <View style={{flexDirection: 'row'}}>
                <Text style={{flex: '1'}}>Volume</Text>
                <Text style={{flex: '1'}}>Other</Text>
              </View>
              <View style={{flexDirection: 'row'}}>
                <Text style={{flex: '1'}}>{this.state.volume24}</Text>
                <Text style={{flex: '1'}}>???</Text>
              </View>
            </View>
          </View>
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
          </ScrollView>
      </Card>
    )
  }
}
