import validateForm from './formValidate.js';
import toTopButton from './toTopButton.js';
import observerAnimation from './observerAnimation.js';
//import NavCloseOnScroll from './NavCloseOnScroll.js';

const app = {};

app.init = () => {
  
  validateForm.init();
  
  toTopButton.init();
  
  observerAnimation.init();

  //NavCloseOnScroll.init();

};

let navbar = document.querySelector('#navigationBar'); // Get The NavBar

let lastScrollTop; //* This Varibale will store the top position

window.addEventListener('scroll', function () {
  //on every scroll this funtion will be called
  
  let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  //This line will get the location on scroll
  
  if (scrollTop > lastScrollTop) {
    //if it will be greater than the previous
    navbar.style.top = '-80px';
    //set the value to the negetive of height of navbar
  } else {
    navbar.style.top = '0';
  }
  
  lastScrollTop = scrollTop; //* New Position Stored
});

Fancybox.bind(); //* Activere fancybox

app.init();