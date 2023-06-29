import validateForm from './formValidate.js';
import toTopButton from './toTopButton.js';
import observerAnimation from './observerAnimation.js';
import mobileNav from './mobileNav.js';

import NavCloseOnScroll from './NavCloseOnScroll.js';

const app = {};

app.init = () => {
  
  validateForm.init();
  
  toTopButton.init();
  
  observerAnimation.init();

  mobileNav.init();

  NavCloseOnScroll.init();

};

function menuOnClick() {
  document.querySelector('#menu-bar').classList.toggle('change');
  document.querySelector('.nav').classList.toggle('change');
  document.querySelector('.menu-bg').classList.toggle('change-bg');
}

Fancybox.bind(); //! Activere fancybox

app.init();