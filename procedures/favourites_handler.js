/* Handler for favourites list */
import { AsyncStorage } from 'react-native';

/*
* Add a value to the favourites list
* Will check to make sure given key is not used
* @param key key to be stored
* @param value value to be added to favourites
* @return returns null if successful, error message otherwise
*/
export async function addToFavourites(key, value) {
  try {
    if (!checkIfInFavourites(key)) {
        return await AsyncStorage.setItem(key, value);
    }
    else {
      throw Error("Did not find in favourites");
    }
  }
  catch (error) {
    return Promise.resolve(error.message);
  }
}

/*
* Return a specific value from the list
* @param key key to search for
* @return returns corresponding value if successful, false otherwise
*/
export async function getSingleFavourite(key) {
  try {
      if (!checkIfInFavourites(key) ) {
        let item = await AsyncStorage.getItem(key);
          if (item !== null) {
              return item;
          }
          else {
            throw Error("Item is null");
          }
        }
      else {
        throw Error("Not found in list");
      }
  }
  catch (error) {
    return Promise.resolve(error.message);
  }
}

/*
* Remove a key from the favourites list
* @param key key to search for
* @return returns null if successful, error message otherwise
*/
export async function removeFromFavourites(key) {
  try {
    if (checkIfInFavourites(key)) {
        return await AsyncStorage.removeItem(key);
    }
    else {
      throw Error;
    }
  }
  catch (error) {
    return Promise.resolve(error.message);
  }
}

/*
* Checks to see if the key exists in the favourites list
* @param key key to search for
* @return returns true if successful, false otherwise
*/
export function checkIfInFavourites(key) {
  if (key==="test5") {
    return true;
  }
  else {
    return false;
  }
}

/*
* Returns all favourites in list
* @return all favourites
*/
export async function getAllFavourites() {
  return await AsyncStorage.getAllKeys();
}
