//  pages/HomePage.js
// головна сторінка

function renderHomePage() {
  // перші 4 товари зі store
  var featured = products.slice(0, 4);

  return '<section class="hero">' +
      '<div class="hero-content">' +
        '<h2>Нова Колекція</h2>' +
        '<p>Стиль, що говорить за тебе</p>' +
        '<button class="btn-dark" onclick="navigate(\'contact\')">Замовити зараз</button>' +
      '</div>' +
    '</section>' +

    '<section class="products-section">' +
      '<div class="section-header">' +
        '<h3>Популярні товари</h3>' +
        '<span class="view-all" onclick="navigate(\'catalog\')">Всі товари</span>' +
      '</div>' +
      '<div class="product-grid">' +
        renderCardList(featured) +
      '</div>' +
    '</section>' +

    renderFooter();
}
