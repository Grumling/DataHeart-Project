const mobileNav = {};

// todo closeNav() virker ikke, få hjælp
mobileNav.init = () => {
  function menuOnClick() {
    document.querySelector('#menu-bar').classList.toggle('change');
    document.querySelector('.nav').classList.toggle('change');
    document.querySelector('.menu-bg').classList.toggle('change-bg');
  }
  let navbar = document.querySelector('#menu-bar');
  navbar.addEventListener('click', menuOnClick);

/*   function closeNav() {
    document.querySelector('#menu-bar').classList.remove('change');
    document.querySelector('.nav').classList.remove('change');
    document.querySelector('.menu-bg').classList.remove('change-bg');
  } */
};


export default mobileNav;
