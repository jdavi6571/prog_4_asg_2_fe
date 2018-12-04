import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  FlatList
} from 'react-native';
import { Icon } from 'react-native-elements';
import CryptoListItem from '../components/CryptoListItem';
import { WebBrowser } from 'expo';
import styles from '../styles/MainStyles';
import coinData from '../data/CoinData';
import { MonoText } from '../components/StyledText';

export default class HomeScreen extends React.Component {
  constructor (props) {
    super(props);

    this.state = {filtered: false, coinData: coinData};
    this.refreshList();
  }

  filterFavourites = () => {
    this.setState(state => ({
      filtered: !state.filtered
    }));
    this.props.navigation.setParams({ isFiltered: this.state.filtered });
    this.render();
  }

  refreshList = () => {
      this.state.coinData = [];

    var imageLinks = {
        'BTC': {logo: require('../node_modules/cryptocurrency-icons/128/color/btc.png')},
        'BCC': {logo: require('../node_modules/cryptocurrency-icons/128/color/bcc.png')},
        'XRP': {logo: require('../node_modules/cryptocurrency-icons/128/color/xrp.png')},
        'ETH': {logo: require('../node_modules/cryptocurrency-icons/128/color/eth.png')},
        'XLM': {logo: require('../node_modules/cryptocurrency-icons/128/color/xlm.png')},
        'EOS': {logo: require('../node_modules/cryptocurrency-icons/128/color/eos.png')}
      };

      fetch('https://min-api.cryptocompare.com/data/pricemulti?fsyms=BTC,BCC,XRP,ETH,XLM,EOS&tsyms=CAD&api_key=584fd3b43d00f3e846f51724756eed798b5814d35ce60374a210dd2277baeb48')
        .then((response) => response.json() )
        .then((responseJSON) => {
          var keys = Object.keys(responseJSON);

          for (i=0; i<keys.length; i++) {
            var element = {
              key: keys[i],
              price: responseJSON[keys[i]].CAD.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,'),
              logo: imageLinks[keys[i]].logo
            }
            this.state.coinData.push(element);
          }
          this.setState({state: this.state});
        })
        .catch((error) => console.log(error) );
  }

  static navigationOptions =  ({ navigation}) => {
    return {
      headerTitle:
      <View style={{flexDirection: 'row'}}>
        <View style={homeScreenStyles.iconContainer}>
          <Icon
            name='refresh'
            type='font-awesome'
            style={{color: 'white'}}
            onPress={navigation.getParam('refresh')} />
        </View>
        <Text style={homeScreenStyles.headerTitle}>Trending Cryptocoins</Text>
        <View style={homeScreenStyles.iconContainer}>
          <Icon
            name={navigation.getParam('isFiltered') ? 'filter' : 'filter-outline'}
            type='material-community'
            style={{color: 'white'}}
            onPress={navigation.getParam('filter')}/>
        </View>
      </View>,
      headerStyle: {
        backgroundColor: '#4CAF50',
      }
    }

  };

  componentDidMount() {
    this.props.navigation.setParams({
      refresh: this.refreshList,
      filter: this.filterFavourites,
      isFiltered: this.state.filtered});
  }

  render() {
    return (
      <View style={styles.container}>
        <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
          <FlatList
            data={this.state.coinData}
            extraData={this.state}
            renderItem={({item}) => <CryptoListItem marketKey={item.key} price={item.price} logo={item.logo} filtered={this.state.filtered} />}
            keyExtractor={(item, index) => index.toString()}
          />
        </ScrollView>
      </View>
    );
  }

}

const homeScreenStyles = StyleSheet.create({
  iconContainer: {
    flex: 1,
    marginRight: 9,
    marginLeft: 9,
  },
  headerTitle: {
    flex: 3,
    textAlign: 'center',
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16
  }
});
