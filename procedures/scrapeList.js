/* Include functions to return list of cryptocurrencies
*/
const currencyDetails = [
    { name: 'bitcoin', price: '$1', favourite: true},
    { name: 'etherium', price: '$2', favourite: false},
  ];

export function getList(){
   return currencyDetails;
}
