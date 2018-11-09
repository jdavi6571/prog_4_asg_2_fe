/*
* Tests created for TDD of building favourites list
*/
import * as f_handler from '../procedures/favourites_handler.js';


// Test that addToFavourites function returns successfully
test('add to favourites list', () => {
  let key = 'test';
  let value = 'value'

  return f_handler.addToFavourites(key, value).then(function(data) {
    expect(data).toBeNull();
  });
});

// Test that getSingleFavourite returns successfully (doesn't throw an error)
test('find some token', () => {
  let key = 'test2';
  let value = 'value2'

  expect.assertions(1);

  f_handler.addToFavourites(key, value);

   return f_handler.getSingleFavourite(key).then(function(data) {
     expect(data).not.toBeNull();
   });
});

// Test that getSingleFavourite returns the desired value
test('find item in favourites list', async () => {
  let key = 'test3';
  let value = 'value3'

  console.log(key + ":" + value);

  expect.assertions(1);

  let temp = await f_handler.addToFavourites(key, value);

  return f_handler.getSingleFavourite(key).then(function(data) {
    expect(data).toEqual(value);
  });
});
/*
// Test that the removeFromFavourites function returns successfully
test('remove from favourites list', () => {
  let key = 'test4';
  let value = 'value4'

  expect.assertions(1);

  f_handler.addToFavourites(key, value);
  return f_handler.removeFromFavourites(key).then(function(data) {
    expect(data).toBeNull();
  };
});

// Test that searching for unadded favourite returns nothing
test('item not found in favourites list', () => {
  let key = 'test5';

  return f_handler.checkIfInFavourites(key).toBe(false);
});

test ('get all favourites in list', () => {
  let key = 'test6';
  let value = 'value6'

  f_handler.addToFavourites(key, value);


  return f_handler.getAllFavourites().then(function(data){
    expect(data).toEqual();
  });
});
*/
