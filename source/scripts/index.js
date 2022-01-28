import portfolioSlider from './blocks/portfolio-slider';
import navigation from './blocks/navigation';
import scrollTopButton from './blocks/scrollTopButton';
import contactMeModal from './blocks/contact-me-modal';
import scrollAnimateParalaxTitle from './blocks/scroll-animate-paralax-title';
import setCurrentMenuItem from './blocks/set-current-menu-item';

window.addEventListener('DOMContentLoaded', () => {
  scrollAnimateParalaxTitle();

  if(document.querySelector('.slider')) {
    portfolioSlider();
  }

  if(document.querySelector('.nav')) {
    navigation();
    setCurrentMenuItem();
  }

  if(document.querySelector('.contact-modal')) {
    contactMeModal();
  }

  if(document.querySelector('.footer-copyright__button-top')) {
    scrollTopButton();
  }
});

