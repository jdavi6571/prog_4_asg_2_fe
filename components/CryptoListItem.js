import React from 'react';
import { StyleSheet, Image, Text, View } from 'react-native';
import { Button, Icon } from 'react-native-elements';
import { WebBrowser } from 'expo';
import { Ionicons } from '@expo/vector-icons';
import Touchable from 'react-native-platform-touchable';
import mainStyles from '../styles/MainStyles';
import { AsyncStorage } from "react-native"
import { NavigationActions, withNavigation } from 'react-navigation';



export default withNavigation(class CryptoListItem extends React.Component {

  constructor(props) {
    super(props);

    this.state = {loaded: false, favourited: false};
    this._retrieveData();
  }

  _storeData = async () => {
    try {
      await AsyncStorage.setItem(this.props.itemData.marketName, this.props.itemData.marketName);
    } catch (error) {
      // Error saving data
    }
  }

  _removeData = async () => {
    try {
      await AsyncStorage.removeItem(this.props.itemData.marketName);
    } catch (error) {
      // Error saving data
    }
  }

  _retrieveData = async () => {
    try {
      const newState = {loaded: true};
      const value = await AsyncStorage.getItem(this.props.itemData.marketName);
      if (value !== null) {
        // We have data!!
        console.log(value);
        newState.favourited = true;
      } else {
        newState.favourited = false;
      }
      this.setState(newState);
     } catch (error) {
       // Error retrieving data
     }
  }

  RouteToDetailView = data => () => {
    const navigateToDetail = NavigationActions.navigate({
      routeName: 'MoreDetails',
      params: {itemData: data},
      action: NavigationActions.navigate({ routeName: 'MoreDetails' }),
    });

    this.props.navigation.dispatch(navigateToDetail);
  }

  handleToggleClick = () => {
    this.setState(state => ({
      favourited: !state.favourited
    }));
    this.state.favourited ? this._removeData() : this._storeData();
  }

  render() {
    const itemData = this.props.itemData;
    let listItem;

    if (this.props.filtered == true && this.state.favourited == false) {
      listItem = null;
    }
    else {
      listItem =
        <Touchable
          style={styles.rowContainer}
          background={Touchable.Ripple('#ccc', false)}
          onPress={this.RouteToDetailView(itemData)}>

          <View style={{ flexDirection: 'row', paddingTop: 12}} >
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
              {this.state.loaded &&
                <Icon
                  raised
                  name=  {this.state.favourited ? 'bookmark' : 'bookmark-o'}
                  type='font-awesome'
                  color= {this.state.favourited ? '#43A047' : '#616161'}
                  size={16}
                  onPress={this.handleToggleClick} />
              }
            </View>
          </View>
        </Touchable>;
    }
    return (
      <View>
        {listItem}
      </View>
    );
  }
})

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
