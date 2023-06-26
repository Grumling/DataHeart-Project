const toTopButton = {};

toTopButton.init = () => {
  // Get the button
  let mybutton = document.getElementById('backToTop');

  // When the user scrolls down 20px from the top of the document, show the button
  window.onscroll = function () {
    scrollFunction();
  };

  function scrollFunction() {
    if (
      document.body.scrollTop > 1000 ||
      document.documentElement.scrollTop > 1000
    ) {
      mybutton.style.display = 'block'; // viser knappen
    } else {
      mybutton.style.display = 'none'; // skjuler knappen
    }
  }

  // When the user clicks on the button, scroll to the top of the document
  function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }
};

export default toTopButton;