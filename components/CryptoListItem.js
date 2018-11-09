import React from 'react';
import { StyleSheet, Image, Text, View } from 'react-native';
import { Button, Icon } from 'react-native-elements';
import { WebBrowser } from 'expo';
import { Ionicons } from '@expo/vector-icons';
import Touchable from 'react-native-platform-touchable';
import mainStyles from '../styles/MainStyles';


export default class CryptoListItem extends React.Component {

  constructor(props) {
    super(props);
    this.state = {favourited: false};
    this.handleToggleClick = this.handleToggleClick.bind(this);
  }

  handleToggleClick() {
    this.setState(state => ({
      favourited: !state.favourited
    }));
  }
  render() {
    const itemData = this.props.itemData;

    return (
      <Touchable
        style={styles.rowContainer}
        background={Touchable.Ripple('#ccc', false)}>
        <View style={{ flexDirection: 'row', paddingTop: 12}}>
          <View style={styles.iconContainer}>
            <Image
              source={itemData.logo}
              resizeMode="contain"
              fadeDuration={0}
              style={{ width: 40, height: 40, marginTop: 3 }}
            />
          </View>
          <View style={styles.container}>
            <Text style={styles.nameText}>
              {itemData.name}
            </Text>
            <Text style={styles.subText}>
              {itemData.marketName}
            </Text>
          </View>
          <View style={styles.valueTextContainer}>
            <Text style={styles.dollarText}>
              {itemData.currentDollarValue}
            </Text>
            <Icon
              raised
              name=  {this.state.favourited ? 'bookmark' : 'bookmark-o'}
              type='font-awesome'
              color= {this.state.favourited ? '#43A047' : '#616161'}
              size={12}
              onPress={this.handleToggleClick} />

          </View>
        </View>
      </Touchable>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  valueTextContainer: {
    flex: 1,
    alignItems: 'flex-end',
    marginRight:15,
  },
  iconContainer: {
    marginRight: 9,
    marginLeft: 9,
  },
  rowContainer: {
    backgroundColor: '#fdfdfd',
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: '#EDEDED',
  },
  nameText: {
    fontSize: 17,
    marginTop: 1,
  },
  dollarText: {
    fontSize: 15,
  },
  subText: {
    fontSize: 12,
    color: 'rgba(96,100,109, 1)',
    marginTop: 1,
  },
});
