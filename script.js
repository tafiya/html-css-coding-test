const menuIcon = document.getElementById('menuIcon');
const closeIcon = document.getElementById('closeIcon');
const navLinks = document.querySelector('.menu-nav-links');

function toggleMenu() {

  navLinks.classList.toggle('active');
  if (menuIcon.classList.contains('hidden')) {
    menuIcon.classList.remove('hidden');
    closeIcon.classList.add('hidden');
  } else {
    menuIcon.classList.add('hidden');
    closeIcon.classList.remove('hidden');
  }
}

menuIcon.addEventListener('click', toggleMenu);
closeIcon.addEventListener('click', toggleMenu);
