
var PAGE_PATHS = {
  home:    '/',
  about:   '/about',
  contact: '/contact',
  product: '/product',
  catalog: '/catalog'
};

function navigate(page, productId) {
  setState({ currentPage: page });

  // показуємо тільки потрібну сторінку
  document.querySelectorAll('.page-view').forEach(function(el) {
    el.classList.remove('active');
    el.style.display = 'none';
  });

  var target = document.getElementById('page-' + page);
  if (target) {
    target.style.display = 'block';
    setTimeout(function() { target.classList.add('active'); }, 10);
  }

  // оновлення кнопки назад 
  var backBtn = document.getElementById('back-btn');
  if (backBtn) backBtn.style.display = (page === 'product') ? 'block' : 'none';

  history.pushState({ page: page }, '', PAGE_PATHS[page] || '/');

  if (page === 'product' && productId) {
    openProductPage(productId);       // pages/ProductPage.js
  }

  if (page === 'catalog') {
    fetchProducts();                  // pages/CatalogPage.js
  }

  if (page === 'contact') {
    initContactPage();                // pages/ContactPage.js
  }
}

function openProduct(id) {
  navigate('product', id);
}
