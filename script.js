const nightModeToggle = document.getElementById('nightModeToggle');
const body = document.body;
const logo = document.querySelector('.logo');
const paths = logo.querySelectorAll('path');

nightModeToggle.addEventListener('change', function() {
  body.classList.toggle('night-mode');
  if (body.classList.contains('night-mode')) {
    paths.forEach((path) => {
      path.style.fill = '#E9ECEF';
    });
  } else {
    paths.forEach((path) => {
      path.style.fill = '#14233C';
    });
  }
});
