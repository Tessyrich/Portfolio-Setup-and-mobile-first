const hamburger = document.querySelector('.hamburger');
const menuBar = document.querySelector('.menu-bar'); 
const popUp = document.getElementById('see');
const popContainer = document.getElementById('pop-container');
const closePop = document.getElementById('close-pop')


hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  menuBar.classList.toggle('show-navbar');
});
document.querySelectorAll('.head-link').forEach((n) => n.addEventListener('click', () => {
  hamburger.classList.remove('active');
  menuBar.classList.remove('show-navbar');
}));


popUp.addEventListener('click', OpenPopup);
closePop.addEventListener('click', ClosePopUp)


function OpenPopup(){
  popContainer.style.display = 'block'
}
function ClosePopUp(){
  popContainer.style.display = 'none'
}