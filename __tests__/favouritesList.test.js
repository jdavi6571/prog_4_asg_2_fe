/*
* Tests created for TDD of building favourites list
*/
import * as f_handler from '../data/favourites.js';

/*
* Tests that will be performed
1. No list exists (sends "No list" message)
2.
3.
4.
5.
*/

// Test that addToFavourites function returns successfully
test('add to favourites list', () => {
  let key = 'test';
  let value = 'value'

  expect(f_handler.addToFavourites(key, value)).toHaveReturned();
});

// Test that getSingleFavourite reutnrs successfully
test('find some token', () => {
  let key = 'test2';
  let value = 'value2'

  f_handler.addToFavourites(key, value)

  expect(f_handler.getSingleFavourite(key)).toHaveReturned();
});

// Test that getSingleFavourite returns the desired value
test('find item in favourites list', () => {
  let key = 'test3';
  let value = 'value3'

  f_handler.addToFavourites(key, value)

  expect(f_handler.getSingleFavourite(key)).toBe(value);
});

// Test that the removeFromFavourites function returns successfully
test('remove from favourites list', () => {
  let key = 'test4';
  let value = 'value4'

  f_handler.addToFavourites(key, value);
  expect(f_handler.getSingleFavourite(key)).toBe(value);
  expect(f_handler.removeFromFavourites(key)).toHaveReturned();
});

// Test that searching for unadded favourite returns nothing
test('item not found in favourites list', () => {
  let key = 'test5';

  expect(f_handler.getSingleFavourite(key)).toHaveReturned();
});
