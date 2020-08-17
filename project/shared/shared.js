const backdrop = document.querySelector('.backdrop');
const modal = document.querySelector('.modal');
const selectPlanButton = document.querySelectorAll('.plan button');
const modalNoBtn = document.querySelector('.modal button');
const sideNavToggleBtn = document.querySelector('.main-header .toggle-button');
const sideNav = document.querySelector('.mobile-nav');

const showModal = () => {
  backdrop.style.display = 'block';
  modal.style.display = 'block';
};

const closeModal = () => {
  backdrop.style.display = 'none';
  modal.style.display = 'none';
};

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

backdrop.addEventListener('click', closeModal);
backdrop.addEventListener('click', closeNavBar);
modalNoBtn.addEventListener('click', closeModal);
selectPlanButton.forEach((btn) => btn.addEventListener('click', showModal));
sideNavToggleBtn.addEventListener('click', toggleSideNav);
// backdrop.style.display = 'none';
