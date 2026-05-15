
 // pages/ContactPage.js
 // сторінка контактів із формою та відгуками
 // валідація форми та логіку збереження відгуків


function initReviewsPage() {
  var form = document.getElementById('review-form');
  if (form) {
    form.onsubmit = handleReviewSubmit;
  }
 
  var nameInput = document.getElementById('name');
  if (nameInput) {
    nameInput.addEventListener('input', function() {
      var err = document.getElementById('name-error');
      if (err) err.textContent = nameInput.value.length < 2 ? 'Мінімум 2 символи' : '';
    });
  }
}
 
function handleReviewSubmit(e) {
  e.preventDefault();
 
  var name    = document.getElementById('name').value.trim();
  var message = document.getElementById('message').value.trim();
  var nameErr = document.getElementById('name-error');
  var msgErr  = document.getElementById('message-error');
  var isValid = true;
 
  if (name.length < 2) {
    if (nameErr) nameErr.textContent = 'Мінімум 2 символи';
    isValid = false;
  } else {
    if (nameErr) nameErr.textContent = '';
  }
 
  if (message.length < 3) {
    if (msgErr) msgErr.textContent = 'Напишіть щось у відгуку';
    isValid = false;
  } else {
    if (msgErr) msgErr.textContent = '';
  }
 
  if (!isValid) return;
 
  addReview(name, message);
  showReviewSuccess();
  document.getElementById('review-form').reset();
}
 
function showReviewSuccess() {
  var msg = document.getElementById('success-msg');
  if (!msg) return;
  msg.style.display = 'block';
  setTimeout(function() { msg.style.display = 'none'; }, 4000);
}

function addReview(name, message) {
  var list = document.getElementById('reviews-list');
  if (!list) return;
  var li = document.createElement('li');
  li.innerHTML = '<strong>' + name + '</strong>: ' + message;
  list.appendChild(li);
}