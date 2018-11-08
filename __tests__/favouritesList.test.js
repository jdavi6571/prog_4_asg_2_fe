/*
* Tests created for TDD of building favourites list
*/
import * as f_handler from '../data/favourites.js';

// Test that addToFavourites function returns successfully
test('add to favourites list', () => {
  let key = 'test';
  let value = 'value'

  expect(f_handler.addToFavourites(key, value)).toBe(true);
});

// Test that getSingleFavourite returns successfully (doesn't throw an error)
test('find some token', () => {
  let key = 'test2';
  let value = 'value2'

  f_handler.addToFavourites(key, value).then(function(res) {
    console.log(res);
  });

  expect(f_handler.getSingleFavourite(key)).toBeDefined();
});

// Test that getSingleFavourite returns the desired value
test('find item in favourites list', () => {
  let key = 'test3';
  let value = 'value3'

  f_handler.addToFavourites(key, value)

  f_handler.getSingleFavourite(key).then(function(result) {
    console.log(result);
  });

  expect(f_handler.getSingleFavourite(key)).resolves.toBe(value);
});

// Test that the removeFromFavourites function returns successfully
test('remove from favourites list', () => {
  let key = 'test4';
  let value = 'value4'

  f_handler.addToFavourites(key, value);
  expect(f_handler.removeFromFavourites(key)).toBe(true);
});

// Test that searching for unadded favourite returns nothing
test('item not found in favourites list', () => {
  let key = 'test5';

  expect(f_handler.getSingleFavourite(key)).resolves.toBe(false);
});

test ('get all favourites in list', () => {
  let key = 'test6';
  let value = 'value6'

  f_handler.addToFavourites(key, value);
  f_handler.getSingleFavourite(key).then(function(result){
    console.log(result);
  });

  f_handler.getAllFavourites().then(function(result){
    console.log(result);
  });
});
