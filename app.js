// Beginner-friendly JavaScript (small + simple)

(function () {
  // Update footer year automatically
  var yearEl = document.getElementById('year');
  if (yearEl) {
    yearEl.textContent = String(new Date().getFullYear());
  }

  // Contact form: open the user's email app with a pre-filled message
  var contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', function (event) {
      event.preventDefault();

      var nameEl = document.getElementById('contactName');
      var emailEl = document.getElementById('contactEmail');
      var messageEl = document.getElementById('contactMessage');

      var name = nameEl && 'value' in nameEl ? String(nameEl.value).trim() : '';
      var email = emailEl && 'value' in emailEl ? String(emailEl.value).trim() : '';
      var message = messageEl && 'value' in messageEl ? String(messageEl.value).trim() : '';

      if (!name || !email || !message) return;

      var subject = 'Portfolio contact from ' + name;
      var body =
        'Name: ' + name + '\n' +
        'Email: ' + email + '\n\n' +
        'Message:\n' + message;

      var mailto =
        'mailto:piyushrokaya600@gmail.com' +
        '?subject=' + encodeURIComponent(subject) +
        '&body=' + encodeURIComponent(body);

      window.location.href = mailto;
    });
  }

  // Close the mobile menu after clicking a section link
  var mobileMenu = document.getElementById('mobileMenu');
  if (!mobileMenu) return;

  mobileMenu.addEventListener('click', function (event) {
    var target = event.target;
    if (!(target instanceof Element)) return;

    var link = target.closest('a[href^="#"]');
    if (!link) return;

    mobileMenu.removeAttribute('open');
  });
})();
