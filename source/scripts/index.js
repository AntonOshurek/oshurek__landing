import portfolioSlider from './blocks/portfolio-slider';
import navigation from './blocks/navigation';
import scrollTopButton from './blocks/scrollTopButton';
import contactMeModal from './blocks/contact-me-modal';

window.addEventListener('DOMContentLoaded', () => {
  if(document.querySelector('.slider')) {
    portfolioSlider();
  }

  if(document.querySelector('.nav')) {
    navigation();
  }

  if(document.querySelector('.contact-modal')) {
    contactMeModal();
  }

  if(document.querySelector('.footer-copyright__button-top')) {
    scrollTopButton();
  }
});

