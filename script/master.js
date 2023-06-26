import formValidate from './formValidate.js';
import toTopButton from "./toTopButton.js";
import observerAnimation from "./observerAnimation.js";

const app = {};

// initilize the app and its coreponding modules
app.init = () => {
  formValidate.init();

  toTopButton.init();

  observerAnimation.init();
};

app.init();
