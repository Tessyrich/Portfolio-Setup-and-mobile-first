const hamburger = document.querySelector('.hamburger');
const menuBar = document.querySelector('.menu-bar');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  menuBar.classList.toggle('show-navbar');
});
document.querySelectorAll('.head-link').forEach((n) => n.addEventListener('click', () => {
  hamburger.classList.remove('active');
  menuBar.classList.remove('show-navbar');
}));
