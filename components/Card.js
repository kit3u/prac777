//components/Card.js
 //повторний компонент  головної сторінки, сторінці каталогу, схожі товари на сторінці товару
 
function renderCard(product, options) {
  options = options || {};
  var clickable   = options.clickable !== false;
  var overlayText = options.overlayText || 'Натисни щоб переглянути';
  var imgSrc      = options.imgSrc || product.img || product.thumbnail || '';

  var clickAttr = clickable
    ? 'onclick="openProduct(' + product.id + ')"'
    : '';

  return '<div class="product-card" ' + clickAttr + '>' +
    '<div class="product-image-wrap">' +
      '<img src="' + imgSrc + '" alt="' + product.name + '" class="product-img">' +
      '<div class="product-overlay"><p>' + overlayText + '</p></div>' +
    '</div>' +
    '<p class="product-name">' + product.name + '</p>' +
    '<span class="product-price">' + product.price + '</span>' +
  '</div>';
}

// components/CardList.js
 //  компонент сітка та карток

function renderCardList(productList, cardOptions) {
  if (!productList || productList.length === 0) {
    return '<p style="color:#888;text-align:center;padding:40px;">Товари не знайдено</p>';
  }
  return productList.map(function(p) {
    return renderCard(p, cardOptions);
  }).join('');
}
