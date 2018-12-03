import React from 'react';
import { View, Text } from 'react-native';
import { getSingleDetails } from "../procedures/scrapeList.js";

export default class SettingsScreen extends React.Component {
  constructor (props) {
    super(props);

    this.loadDetails();
  }

  static navigationOptions = {
    title: 'Coin Converter - Test',
  };

  loadDetails = async () => {
    try {
      var temp = await getSingleDetails();

      if (temp !== null) {
        alert(temp);
        this.setState(temp);
      }
    }
    catch (error) {
      alert(error);
    }
  }

  render() {
    return (
      <View>
        <View>
          <Text>
            Nothing to see here!
          </Text>
        </View>
      </View>


    );
  }
}
