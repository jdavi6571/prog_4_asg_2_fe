import React from 'react';
import { View, Text, Image, Dimensions } from 'react-native';
import { Card, ListItem, Button } from 'react-native-elements';
import { LineChart } from 'react-native-chart-kit';

//export default (props) => <Text>hmm {JSON.stringify(props, null, 2)}</Text>

export default class MoreDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {initialized: false};
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
        <Text>
          Current Price: {itemData.currentDollarValue}
        </Text>
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
      </Card>
    )
  }
}

/*
<Card title="CARD WITH DIVIDER">
  {
    users.map((u, i) => {
      return (
        <View key={i} style={styles.user}>
          <Image
            style={styles.image}
            resizeMode="cover"
            source={{ uri: u.avatar }}
          />
          <Text style={styles.name}>{u.name}</Text>
        </View>
      );
    })
  }
</Card>
*/
