import formValidate from './formValidate.js';
import toTopButton from './toTopButton.js';
import observerAnimation from './observerAnimation.js';
import fancyBox from './fancyBox.js';
import navHide from './navHide.js';

const app = {};

app.init = () => {
  
  formValidate.init();
  
  toTopButton.init();
  
  observerAnimation.init();
  
  fancyBox.init();
  
  navHide.init();
};

app.init();