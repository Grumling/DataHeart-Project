const toTopButton = {};

toTopButton.init = () => {
  // Get the button
  let mybutton = document.querySelector('#myBtn');

  // When the user scrolls down 20px from the top of the document, show the button
  window.onscroll = function () {
    scrollFunction();
  };

  function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }

  function scrollFunction() {
    if (
      document.body.scrollTop > 20 ||
      document.documentElement.scrollTop > 20
    ) {
      mybutton.style.display = 'block';
    } else {
      mybutton.style.display = 'none';
    }
  }
  if (mybutton) {
    mybutton.addEventListener('click', topFunction);
  }
};

export default toTopButton;
