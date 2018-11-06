/*
* Tests created for TDD of building favourites list
*/
import * as favouritesHandler from '../data/favourites.js';

/*
* Tests that will be performed
1. No list exists (sends "No list" message)
2.
3.
4.
5.
*/

const list = [
    { name: 'bitcoin', price: '$1', favourite: true},
    { name: 'etherium', price: '$2', favourite: false},
  ];

const favouritesList = [
    'bitcoin'
];


test('list does not exist', () => {

});

test('list exists', () => {


  expect(list.length).toBeGreaterThan(0);
});

test('add to favourites list', () => {

  expect().toBe();
});

test('remove from favourites list', () => {

  expect().toBe();
});

test('remove last item from favourites list', () => {

  expect().toBe();
});

test('item not found in favourites list', () => {

  expect().toBe()
});
