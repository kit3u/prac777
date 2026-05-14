document.addEventListener('DOMContentLoaded', function() {

  // --- Слайдер на сторінці товару ---
  var prevBtn = document.getElementById('prev-btn');
  if (prevBtn) {
    prevBtn.addEventListener('click', function() {
      prevSlide();           // store/state.js
      updateSliderImage();   // pages/ProductPage.js
    });
  }

  var nextBtn = document.getElementById('next-btn');
  if (nextBtn) {
    nextBtn.addEventListener('click', function() {
      nextSlide();           // store/state.js
      updateSliderImage();   // pages/ProductPage.js
    });
  }

  // --- Браузерна навігація (кнопка «Назад») ---
  window.addEventListener('popstate', function(e) {
    if (e.state && e.state.page) {
      navigate(e.state.page);
    }
  });

  // --- Початкова сторінка ---
  navigate('home');
});
