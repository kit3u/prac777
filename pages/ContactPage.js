
 // pages/ContactPage.js
 // сторінка контактів із формою та відгуками
 // валідація форми та логіку збереження відгуків


function initContactPage() {
  var nameInput = document.getElementById('name');
  if (nameInput) {
    nameInput.addEventListener('input', function() {
      var err = document.getElementById('name-error');
      if (err) err.textContent = nameInput.value.length < 2 ? 'Мінімум 2 символи' : '';
      state.formData.name = nameInput.value;
    });
  }

  var form = document.getElementById('contact-form');
  if (form) {
    form.onsubmit = handleContactSubmit;
  }
}

function handleContactSubmit(e) {
  e.preventDefault();

  var name     = document.getElementById('name').value;
  var email    = document.getElementById('email').value;
  var message  = document.getElementById('message').value;
  var emailErr = document.getElementById('email-error');
  var isValid  = true;

  if (!email.includes('@') || !email.includes('.')) {
    if (emailErr) emailErr.textContent = 'Введіть коректний email';
    isValid = false;
  } else {
    if (emailErr) emailErr.textContent = '';
  }

  if (isValid && name.length >= 2) {
    setState({ formData: { name: name, email: email, message: message } });
    showSuccessMessage();
    addReview(name, message);
    document.getElementById('contact-form').reset();
  }
}

function showSuccessMessage() {
  var msg = document.getElementById('success-msg');
  if (!msg) return;
  msg.style.display = 'block';
  setTimeout(function() { msg.style.display = 'none'; }, 4000);
}


// новий відгук до списку
 
function addReview(name, message) {
  var list = document.getElementById('reviews-list');
  if (!list) return;
  var li = document.createElement('li');
  li.innerHTML = '<strong>' + name + '</strong>: ' + (message || 'Без повідомлення');
  list.appendChild(li);
}
