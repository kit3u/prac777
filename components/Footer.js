// components/Footer.js
// контактний футер
function renderFooter(contacts) {
  contacts = contacts || { email: 'mail@mail.com', phone: '+38 050 123 45 67' };

  return '<footer class="contact-footer">' +
    '<h3>Контакти</h3>' +
    '<p>' + contacts.email + '</p>' +
    '<p>' + contacts.phone + '</p>' +
  '</footer>';
}
