const toggleBtn = document.querySelector('.burger');
const nav = document.querySelector('.container');
const navList = document.querySelector('.nav-list');
const navItems = document.querySelectorAll('.nav-item');
const logoTip = document.querySelector('.section-profile')

function switchMenu() {
  toggleBtn.classList.toggle('collapsed');
  nav.classList.toggle('collapsed');
  navList.classList.toggle('collapsed');
  logoTip.classList.toggle('collapsed');
}
toggleBtn.addEventListener('click', switchMenu);

function closeMenu() {
  setTimeout(() => {
    toggleBtn.classList.remove('collapsed');
    nav.classList.remove('collapsed');
    navList.classList.remove('collapsed');
    logoTip.classList.remove('collapsed');
  }, 1000);  
}
navItems.forEach(el => el.addEventListener('click', closeMenu));

