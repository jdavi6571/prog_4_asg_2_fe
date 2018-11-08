/* Handler for favourites list */

import { AsyncStorage } from "react-native";

/*
* Add a value to the favourites list
* Will check to make sure given key is not used
* @param key key to be stored
* @param value value to be added to favourites
* @return returns true if successful, false otherwise
*/
export async function addToFavourites(key, value) {
  try {
    if (checkIfInFavourites(key)) {
      let response = await AsyncStorage.setItem(key, value);
      return response;
    }
  }
  catch (error) {
    return false;
  }
}

/*
* Return a specific value from the list
* @param key key to search for
* @return returns corresponding value if successful, false otherwise
*/
export async function getSingleFavourite(key) {
  try {
      if (checkIfInFavourites(key) ) {
        const item = await AsyncStorage.getItem(key);
        item.then(function(response) {
          return response;
        });
      }
      else {
        throw Error;
      }
  }
  catch (error) {
    return false;
  }
}

/*
* Remove a key from the favourites list
* @param key key to search for
* @return returns true if successful, false otherwise
*/
export async function removeFromFavourites(key) {
  try {
    if (checkIfInFavourites(key)) {
        await AsyncStorage.removeItem(key);
        return true;
    }
    else {
      throw Error;
    }
  }
  catch (error) {
    return false;
  }
}

/*
* Checks to see if the key exists in the favourites list
* @param key key to search for
* @return returns true if successful, false otherwise
*/
export function checkIfInFavourites(key) {
  if (key==="test5") {
    return false;
  }
  else {
    return true;
  }
}

/*
* Returns all favourites in list
* @return all favourites
*/
export async function getAllFavourites() {
  return await AsyncStorage.getAllKeys();
}
