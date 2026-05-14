
//  pages/ProductPage.js
// сторінка детального перегляду товару


function openProductPage(id) {
  var product = setCurrentProduct(id);  // store/state.js
  if (!product) return;

  document.getElementById('detail-name').textContent  = product.name;
  document.getElementById('detail-desc').textContent  = product.desc;
  document.getElementById('detail-price').textContent = product.price;

  updateSliderImage();
  renderSimilarProducts(id);
}

function updateSliderImage() {
  var product = state.currentProduct;
  if (!product) return;
  var img = document.getElementById('detail-img');
  if (img) img.src = product.images[state.sliderIndex] || product.img;
}


// рендер блока cхожі товари
function renderSimilarProducts(currentId) {
  var grid = document.getElementById('similar-grid');
  if (!grid) return;

  var similar = getSimilarProducts(currentId, 4);  // store/state.js
  grid.innerHTML = renderCardList(similar);          // components/Card.js
}
