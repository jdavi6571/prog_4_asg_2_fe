/* Handler for favourites list */

import { AsyncStorage } from 'react-native';

export function addToFavourites() {
  _storeData = async () => {
    try {
      await AsyncStorage.setItem('1', 'bitcoin');
    } catch (error) {
      // Error saving data
    }
  }
}

export function removeFromFavourites() {

}

export function getAllFavourites() {
  return await AsyncStorage.getItem('1');
}
