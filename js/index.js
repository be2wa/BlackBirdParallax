(() => {
  const logo       = document.querySelector('.logo'),
        backBird   = document.querySelector('.back-bird'),
        bird       = document.querySelector('.bird'),
        woods      = document.querySelectorAll('.wood'),
        woodRight  = document.querySelector('.wood-right'),
        woodLeft   = document.querySelector('.wood-left'),
        heroHeight = document.querySelector('.bird-box').offsetHeight;

  window.addEventListener('scroll', () => {
    let wScroll = this.pageYOffset;

    if (wScroll <= heroHeight) {

      logo.style.transform = `translate(0, ${wScroll / 2}%)`;
      backBird.style.transform = `translate(-50%, ${wScroll / 4}%)`;
      woodLeft.style.transform = `translate(0, ${wScroll / 40}%)`;
      woodRight.style.transform = `translate(0, ${wScroll / 40}%)`;
    }
  });


  bird.addEventListener('dragstart', dragStart);
  bird.addEventListener('dragend', dragEnd);

  for (const wood of woods) {
    wood.addEventListener('dragover', dragOver);
    wood.addEventListener('dragenter', dragEnter);
    wood.addEventListener('dragleave', dragLeave);
    wood.addEventListener('drop', dragDrop);
  }

  function dragStart() {
    setTimeout(() => (this.classList.add('invisible'), 0));
  }

  function dragEnd() {
    bird.classList.remove('invisible');
    for(const wood of woods) {
      wood.classList.remove('hovered');
    }
  }

  function dragOver(e) {
    e.preventDefault();
  }

  function dragEnter(e) {
    e.preventDefault();
    this.classList.add('hovered');
  }

  function dragLeave() {
    this.classList.remove('hovered');
  }

  function dragDrop() {
    bird.classList.remove('invisible');
    this.append(bird);
  }


})();
