
//  services/api.js
 // отримання та перетворення даних
var API_URL = 'https://dummyjson.com/products/category/womens-dresses?limit=10';


//  Конвертація ціну з USD у грн з округленням
function convertPrice(usdPrice) {
  var raw     = usdPrice * 41;
  var clamped = Math.min(Math.max(raw, 1000), 3000);
  var rounded = Math.round(clamped / 100) * 100 - 1;
  return rounded + ' грн';
}


 // завантаженя товарів з API
async function fetchProductsFromApi() {
  var response = await fetch(API_URL);
  if (!response.ok) {
    throw new Error('Помилка сервера: ' + response.status);
  }
  var data = await response.json();
  return data.products;
}
