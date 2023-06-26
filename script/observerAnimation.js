const observerAnimation = {};

observerAnimation.init = () => {
  
    // Left Observer
    let leftObserver = new IntersectionObserver((entries, observer) => {
    entries.filter(e => e.isIntersecting).forEach(entry => {
        entry.target.classList.add('scrolledLeft');
        observer.unobserve(entry.target);
    })
    }, {
      threshold: 1
    })

    document.querySelectorAll('.leftObserver')
    .forEach(e => {
      leftObserver.observe(e)
    });

    // Right Observer
    let rightObserver = new IntersectionObserver((entries, observer) => {
      entries.filter(e => e.isIntersecting).forEach(entry => {
          entry.target.classList.add('scrolledRight');
          observer.unobserve(entry.target);
      })
    }, {
      threshold: 1
    })
  
    document.querySelectorAll('.rightObserver')
      .forEach(e => {
        rightObserver.observe(e)
      });

    // FadeIn Observer
    let fadeObserver = new IntersectionObserver((entries, observer) => {
      entries.filter(e => e.isIntersecting).forEach(entry => {
          entry.target.classList.add('scrolledFadeIn');
          observer.unobserve(entry.target);
      })
    }, {
      threshold: 1
    })
  
    document.querySelectorAll('.fadeIn')
      .forEach(e => {
        fadeObserver.observe(e)
      });

};

export default observerAnimation;