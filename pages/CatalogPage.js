
// pages/CatalogPage.js
 //каталог товарів з API
 
 async function loadCatalogPage() {
  var loadingEl = document.getElementById('api-loading');
  var errorEl   = document.getElementById('api-error');
  var gridEl    = document.getElementById('api-grid');

  if (loadingEl) loadingEl.style.display = 'block';
  if (errorEl)   errorEl.style.display   = 'none';
  if (gridEl)    gridEl.innerHTML         = '';

  try {
    var items = await fetchProductsFromApi();  

    if (loadingEl) loadingEl.style.display = 'none';

    var normalized = items.map(function(item) {
      return {
        id:    item.id,
        name:  item.title,
        price: convertPrice(item.price),
        img:   item.thumbnail
      };
    });

    if (gridEl) {
      gridEl.innerHTML = renderCardList(normalized, { clickable: false });
    }

  } catch (err) {
    if (loadingEl) loadingEl.style.display = 'none';
    if (errorEl) {
      errorEl.style.display = 'block';
      errorEl.textContent   = 'Не вдалося завантажити товари. Спробуйте пізніше.';
    }
  }
}

// виклик з router.js
function fetchProducts() {
  loadCatalogPage();
}
