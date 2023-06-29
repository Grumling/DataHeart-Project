import form from './formValidate.js';
import toTopButton from './toTopButton.js';
import observerAnimation from './observerAnimation.js';
import NavCloseOnScroll from './NavCloseOnScroll.js';

const app = {};

app.init = () => {
  form.init();

  toTopButton.init();

  observerAnimation.init();

  NavCloseOnScroll.init();
};

Fancybox.bind(); //! Activere fancybox

app.init();