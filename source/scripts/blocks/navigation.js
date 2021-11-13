export default function navigation() {
  const body = document.querySelector('.body');
  const navBtn = document.querySelector('.nav__btn');
  const navBtnBurger = document.querySelector('.nav__btn-burger');
  const navList = document.querySelector('.nav__list');
  const noTouchBG = document.querySelector('.nav__background-notouch');
  const nawListWrap = document.querySelector('.nav__list-wrap');

  let navOpen = false;

  navBtn.addEventListener('click', () => {
    if(!navOpen) {
      openNavigation();
    } else {
      closeNavigation();
    }
  });

  const onLinkCloseNavigation = (evt) => {
    if(evt.target.closest('.nav__link')) {
      closeNavigation();
    }
  };

  const onWindowResizeCloseNavigation = () => {
    if (window.screen.width > 900) {
      closeNavigation();
    }
  };

  function openNavigation() {
    navBtn.classList.add('nav__btn--open');
    navBtnBurger.classList.add('nav__btn-burger--open');
    navList.classList.add('nav__list--open');
    body.classList.add('body--scrolloff');
    noTouchBG.classList.add('nav__background-notouch--on');

    nawListWrap.addEventListener('click', onLinkCloseNavigation);
    noTouchBG.addEventListener('click', closeNavigation);
    window.addEventListener('resize', onWindowResizeCloseNavigation);

    navOpen = true;
  }

  function closeNavigation() {
    navBtn.classList.remove('nav__btn--open');
    navBtnBurger.classList.remove('nav__btn-burger--open');
    navList.classList.remove('nav__list--open');
    body.classList.remove('body--scrolloff');
    noTouchBG.classList.remove('nav__background-notouch--on');

    nawListWrap.removeEventListener('click', onLinkCloseNavigation);
    noTouchBG.removeEventListener('click', closeNavigation);
    window.removeEventListener('resize', onWindowResizeCloseNavigation);

    navOpen = false;
  }
}
