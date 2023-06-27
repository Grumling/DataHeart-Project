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

// Husk at smide dem i deres egne .JS filer.

Fancybox.bind("[data-fancybox]", {
  // Your custom options
});

let prevScrollpos = window.pageYOffset;
window.onscroll = function() {
let currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navBar").style.top = "0";
  } else {
    document.getElementById("navBar").style.top = "-90px";
  }
  prevScrollpos = currentScrollPos;
}