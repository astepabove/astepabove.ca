function toggleMenu() {
  const navMenu = document.getElementById('nav-menu');
  const menuToggle = document.querySelector('.menu-toggle');

  if (!navMenu || !menuToggle) return;
  navMenu.classList.toggle('active');
  menuToggle.classList.toggle('active');
}

window.toggleMenu = toggleMenu;

document.addEventListener('DOMContentLoaded', () => {
  const navMenu = document.getElementById('nav-menu');
  const menuToggle = document.querySelector('.menu-toggle');
  if (!menuToggle || !navMenu) return;

  menuToggle.addEventListener('click', (event) => {
    event.preventDefault();
    toggleMenu();
  });

  navMenu.querySelectorAll('a[data-nav-link="true"]').forEach((link) => {
    link.addEventListener('click', () => {
      if (window.innerWidth <= 768 && navMenu.classList.contains('active')) {
        toggleMenu();
      }
    });
  });
});

window.addEventListener('resize', () => {
  const navMenu = document.getElementById('nav-menu');
  const menuToggle = document.querySelector('.menu-toggle');

  if (!navMenu || !menuToggle) return;
  if (window.innerWidth > 768) {
    navMenu.classList.remove('active');
    menuToggle.classList.remove('active');
  }
});
