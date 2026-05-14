// components/Header.js
// шапка сайту з логотипом, навігацією та кнопкою назад 

function renderHeader(currentPage, onNavigate) {
  var showBack = currentPage === 'product';

  return '<header>' +
    '<button class="back-btn" id="back-btn" ' +
      'style="' + (showBack ? '' : 'display:none;') + '" ' +
      'onclick="navigate(\'home\')">← Назад</button>' +
    '<h1 class="logo">STORE NAME</h1>' +
    renderNavigation(onNavigate) +
  '</header>';
}


//  components/Navigation.js
// горизонтальна навігація

function renderNavigation(onNavigate) {
  var links = [
    { page: 'home',    label: 'Головна'  },
    { page: 'catalog', label: 'Каталог'  },
    { page: 'about',   label: 'Про нас'  },
    { page: 'contact', label: 'Контакти' }
  ];

  var items = links.map(function(link) {
    return '<a href="#" class="nav-link" onclick="navigate(\'' + link.page + '\')">' +
             link.label +
           '</a>';
  }).join('');

  return '<nav>' + items + '</nav>';
}
