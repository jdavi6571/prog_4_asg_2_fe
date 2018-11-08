import React from 'react';
import { StyleSheet, Image, Text, View } from 'react-native';
import { WebBrowser } from 'expo';
import { Ionicons } from '@expo/vector-icons';
import Touchable from 'react-native-platform-touchable';
import mainStyles from '../styles/MainStyles';


export default class CryptoListItem extends React.Component {
  render() {
    const itemData = this.props.itemData;

    return (
      <Touchable
        style={styles.option}
        background={Touchable.Ripple('#ccc', false)}>
        <View style={{ flexDirection: 'row' }}>
          <View style={styles.optionIconContainer}>
            <Image
              source={require('../assets/images/robot-dev.png')}
              resizeMode="contain"
              fadeDuration={0}
              style={{ width: 20, height: 20, marginTop: 1 }}
            />
          </View>
          <View style={styles.optionTextContainer}>
            <Text style={styles.optionText}>
              {itemData.name}
            </Text>
          </View>
        </View>
      </Touchable>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
  },
  optionsTitleText: {
    fontSize: 16,
    marginLeft: 15,
    marginTop: 9,
    marginBottom: 12,
  },
  optionIconContainer: {
    marginRight: 9,
  },
  option: {
    backgroundColor: '#fdfdfd',
    paddingHorizontal: 15,
    paddingVertical: 15,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: '#EDEDED',
  },
  optionText: {
    fontSize: 15,
    marginTop: 1,
  },
});
