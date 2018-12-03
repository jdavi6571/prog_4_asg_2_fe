/* Include functions to return list of cryptocurrencies
* Will be implemented with CryptoCompare navigationOptions
* Make calls using: https://min-api.cryptocompare.com/data/QUERY_PARAMETERS_HERE_&api_key=584fd3b43d00f3e846f51724756eed798b5814d35ce60374a210dd2277baeb48
* Should return JSON object
*/

const listOfCryptocurrencies = [
  "bitcoin", "ehtereum"
]

const currencyDetails = [
    { name: 'bitcoin', price: '$1', favourite: true},
    { name: 'etherium', price: '$2', favourite: false},
  ];

export function getList(){
  var list = fetch('https://min-api.cryptocompare.com/data/QUERY_PARAMETERS_HERE_&api_key=584fd3b43d00f3e846f51724756eed798b5814d35ce60374a210dd2277baeb48');

  return currencyDetails;
}

export function getSingleDetails() {
  var coinID = 'BTC';
  var details = fetch('https://min-api.cryptocompare.com/data/pricemultifull?fsyms='+coinID+'&tsyms=CDN&api_key=584fd3b43d00f3e846f51724756eed798b5814d35ce60374a210dd2277baeb48')
    .then((response) => response.json() )
    .then((responseJSON) => {
      alert(responseJSON.RAW.BTC.CDN.FROMSYMBOL);
      return responseJSON.RAW.BTC.CDN;
    })
    .catch((error) => console.log(error) );
}
