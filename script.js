// Set current year in footer
document.addEventListener('DOMContentLoaded', function () {
  var yearEl = document.getElementById('year');
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

  // Smooth scroll to the quote form for any in-page anchor links to #quote
  var quoteLinks = document.querySelectorAll('a[href="#quote"]');
  quoteLinks.forEach(function (link) {
    link.addEventListener('click', function (e) {
      var target = document.getElementById('quote');
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

  // Basic client-side validation feedback for the quote form
  var form = document.getElementById('quote-form');
  if (form) {
    form.addEventListener('submit', function (e) {
      var consent = document.getElementById('consent');
      if (consent && !consent.checked) {
        e.preventDefault();
        alert('Please tick the consent checkbox before submitting your quote request.');
      }
    });
  }
});
