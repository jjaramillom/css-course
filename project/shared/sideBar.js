const backdrop = document.querySelector('.backdrop');
const sideNavToggleBtn = document.querySelector('.main-header .toggle-button');
const sideNav = document.querySelector('.mobile-nav');

const showNavBar = () => {
  backdrop.style.display = 'block';
  sideNav.style.display = 'block';
};

const closeNavBar = () => {
  backdrop.style.display = 'none';
  sideNav.style.display = 'none';
};

const toggleSideNav = () => {
  if (sideNav.style.display === 'block') {
    closeNavBar();
  } else {
    showNavBar();
  }
};

backdrop.addEventListener('click', closeNavBar);
sideNavToggleBtn.addEventListener('click', toggleSideNav);
