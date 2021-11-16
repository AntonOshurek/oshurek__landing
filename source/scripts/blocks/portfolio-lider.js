export default function portfolioSlider() {
  //btn
  const sliderBtnPrev = document.querySelector('.slider__button--prev');
  const sliderBtnNext = document.querySelector('.slider__button--next');
  //slides counter
  const sliderCounterCurrent = document.querySelector('.slider-controls__total--current');
  const sliderCounterTotal = document.querySelector('.slider-controls__total--total');
  //slides wrpper
  const slidesWrapper = document.querySelector('.slider-items');
  const slidesField = document.querySelector('.slider-items__inner');
  //all sledes
  const slides = document.querySelectorAll('.slider-items__item');

  const getZero = (num) => {
    if (num >= 0 && num < 10) {
      return `0${num}`;
    } else {
      return num;
    }
  };

  sliderCounterTotal.textContent = getZero(slides.length);

  let slideIndex = 1;
  let offset = 0;

  const width = window.getComputedStyle(slidesWrapper).width;

  slidesField.style.width = `${100 * slides.length}%`;

  slides.forEach((slide) => {
    slide.style.width = width;
  });

  const createIndicatorBtn = () => {
    const sliderIndicatorBlock = document.querySelector('.slider-indicators');
    const indicators = document.querySelector('#indicator');
    const fragment = new DocumentFragment();

    for(let i = 0; i < slides.length; i++) {
      const templateItem = indicators.content.cloneNode(true);
      templateItem.querySelector('.slider-indicators__button').setAttribute('data-slide-index', i + 1);
      fragment.append(templateItem);
    }
    sliderIndicatorBlock.append(fragment);
  };
  createIndicatorBtn();

  const indicatorsBtn = document.querySelectorAll('.slider-indicators__button');
  indicatorsBtn.forEach((btn) => {
    btn.addEventListener('click', selectbtn);
  });

  function selectbtn() {
    const atribute = this.getAttribute('data-slide-index');
    slideIndex = atribute;

    offset = +width.slice(0, width.length - 2) * (atribute - 1);
    slidesField.style.transform = `translate(-${offset}px)`;

    showCurrentNumber();
  }

  function showCurrentNumber() {
    if (slideIndex > slides.length) {slideIndex = 1;}
    if (slideIndex < 1) {slideIndex = slides.length;}
    sliderCounterCurrent.textContent = getZero(slideIndex);

    indicatorsBtn.forEach((btn) => {
      btn.classList.remove('slider-indicators__button--active');
    });
    indicatorsBtn[slideIndex - 1].classList.add('slider-indicators__button--active');
  }
  showCurrentNumber();

  //slider buttons listeners
  sliderBtnNext.addEventListener('click', () => {
    if (offset === +width.slice(0, width.length - 2) * (slides.length - 1)) {
      offset = 0;
    } else {
      offset += +width.slice(0, width.length - 2);
    }
    slideIndex++;

    slidesField.style.transform = `translate(-${offset}px)`;
    showCurrentNumber();
  });

  sliderBtnPrev.addEventListener('click', () => {
    if (offset === 0) {
      offset = +width.slice(0, width.length - 2) * (slides.length - 1);
    } else {
      offset -= +width.slice(0, width.length - 2);
    }
    slideIndex--;

    slidesField.style.transform = `translate(-${offset}px)`;
    showCurrentNumber();
  });

}
