document.addEventListener('DOMContentLoaded', function () {
  const toggleButton = document.getElementById('theme-toggle');
  const html = document.documentElement;
  const sunIcon = document.getElementById('sun-icon');
  const moonIcon = document.getElementById('moon-icon');

  function updateIcons() {
    if (html.classList.contains('dark')) {
      sunIcon.classList.remove('hidden');
      moonIcon.classList.add('hidden');
    } else {
      sunIcon.classList.add('hidden');
      moonIcon.classList.remove('hidden');
    }
  }

  // Behåll valt tema i localStorage
  if (localStorage.getItem('theme') === 'dark') {
    html.classList.add('dark');
  }

  updateIcons();

  toggleButton.addEventListener('click', () => {
    html.classList.toggle('dark');

    if (html.classList.contains('dark')) {
      localStorage.setItem('theme', 'dark');
    } else {
      localStorage.setItem('theme', 'light');
    }

    updateIcons();
  });

  // Hamburgermeny
  const menuToggle = document.getElementById('menu-toggle');
  const mobileMenu = document.getElementById('mobile-menu');

  if (menuToggle && mobileMenu) {
    menuToggle.addEventListener('click', () => {
      mobileMenu.classList.toggle('hidden');
    });
  }
});
