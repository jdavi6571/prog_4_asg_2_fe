import React from 'react';
import { StyleSheet, Image, Text, View, Button } from 'react-native';
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
              source={itemData.logo}
              resizeMode="contain"
              fadeDuration={0}
              style={{ width: 30, height: 30, marginTop: 3 }}
            />
          </View>
          <View style={styles.optionTextContainer}>
            <Text style={styles.optionText}>
              {itemData.name}
            </Text>
            <Text style={styles.optionSubText}>
              {itemData.marketName}
            </Text>
          </View>
          <View style={styles.valueTextContainer}>
            <Text style={styles.optionDollarText}>
              {itemData.currentDollarValue}
            </Text>
            <Button
              title="Favourite"
            />
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
  valueTextContainer: {
    flex: 1,
    alignItems: 'flex-end'
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
  optionDollarText: {
    fontSize: 15,
  },
  optionSubText: {
    fontSize: 10,
    color: 'rgba(96,100,109, 1)',
    marginTop: 1,
  },
});
