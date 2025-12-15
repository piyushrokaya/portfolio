// Beginner-friendly JavaScript (small + simple)

(function () {
  // Update footer year automatically
  var yearEl = document.getElementById('year');
  if (yearEl) {
    yearEl.textContent = String(new Date().getFullYear());
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
