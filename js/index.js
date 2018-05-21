(() => {

  const logo = document.querySelector('.logo'),
    backBird = document.querySelector('.back-bird'),
    foreBird = document.querySelector('.fore-bird'),
  heroHeight = document.querySelector('.bird-box').offsetHeight;

  window.addEventListener('scroll', () => {
    
    let wScroll = this.pageYOffset;

    if (wScroll <= heroHeight) {

      logo.style.transform = `translate(0, ${wScroll / 2}%)`;

      backBird.style.transform = `translate(-50%, ${wScroll / 4}%)`;
  
      foreBird.style.transform = `translate(-50%, ${wScroll / 40}%)`;
      
    }
    
  });
})();
