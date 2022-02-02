/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./source/scripts/blocks/contact-me-modal.js":
/*!***************************************************!*\
  !*** ./source/scripts/blocks/contact-me-modal.js ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ contactMeModal; }
/* harmony export */ });
function contactMeModal() {
  const body = document.querySelector('.body');
  const modalTrigerBtn = document.querySelector('.hello__button');
  const modal = document.querySelector('.contact-modal');
  const modalCloseButton = document.querySelector('.contact-modal__close-button');
  const inputs = document.querySelectorAll('.contact-form__input');

  const onModalBgClose = evt => {
    if (evt.key === 'Escape') {
      evt.preventDefault();
      closeModal();
    }

    if (!evt.target.closest('.contact-modal__content')) {
      closeModal();
    }

    modal.removeEventListener('click', onModalBgClose);
    document.removeEventListener('keydown', onModalBgClose);
  };

  modalTrigerBtn.addEventListener('click', () => {
    openModal();
  });

  function openModal() {
    modal.classList.add('contact-modal--open');
    body.classList.add('body--scrolloff');
    modal.addEventListener('click', onModalBgClose);
    modalCloseButton.addEventListener('click', closeModal);
    document.addEventListener('keydown', onModalBgClose);
    inputs[0].focus();
  }

  function closeModal() {
    modal.classList.remove('contact-modal--open');
    body.classList.remove('body--scrolloff');
    modalTrigerBtn.focus();
  }
}

/***/ }),

/***/ "./source/scripts/blocks/navigation.js":
/*!*********************************************!*\
  !*** ./source/scripts/blocks/navigation.js ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ navigation; }
/* harmony export */ });
function navigation() {
  const body = document.querySelector('.body');
  const navBtn = document.querySelector('.nav__btn');
  const navBtnBurger = document.querySelector('.nav__btn-burger');
  const navList = document.querySelector('.nav__list');
  const noTouchBG = document.querySelector('.nav__background-notouch');
  const nawListWrap = document.querySelector('.nav__list-wrap');
  let navOpen = false;
  navBtn.addEventListener('click', () => {
    if (!navOpen) {
      openNavigation();
    } else {
      closeNavigation();
    }
  });

  const onLinkCloseNavigation = evt => {
    if (evt.target.closest('.nav__link')) {
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

/***/ }),

/***/ "./source/scripts/blocks/portfolio-slider.js":
/*!***************************************************!*\
  !*** ./source/scripts/blocks/portfolio-slider.js ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ portfolioSlider; }
/* harmony export */ });
function portfolioSlider() {
  //btn
  const sliderBtnPrev = document.querySelector('.slider__button--prev');
  const sliderBtnNext = document.querySelector('.slider__button--next'); //slides counter

  const sliderCounterCurrent = document.querySelector('.slider-controls__total--current');
  const sliderCounterTotal = document.querySelector('.slider-controls__total--total'); //slides wrpper

  const slidesWrapper = document.querySelector('.slider-items');
  const slidesField = document.querySelector('.slider-items__inner'); //all sledes

  const slides = document.querySelectorAll('.slider-items__item');

  const getZero = num => {
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
  slides.forEach(slide => {
    slide.style.width = width;
  });

  const createIndicatorBtn = () => {
    const sliderIndicatorBlock = document.querySelector('.slider-indicators');
    const indicators = document.querySelector('#indicator');
    const fragment = new DocumentFragment();

    for (let i = 0; i < slides.length; i++) {
      const templateItem = indicators.content.cloneNode(true);
      templateItem.querySelector('.slider-indicators__button').setAttribute('data-slide-index', i + 1);
      templateItem.querySelector('.slider-indicators__title').textContent = `slide ${i + 1}`;
      fragment.append(templateItem);
    }

    sliderIndicatorBlock.append(fragment);
  };

  createIndicatorBtn();
  const indicatorsBtn = document.querySelectorAll('.slider-indicators__button');
  indicatorsBtn.forEach(btn => {
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
    if (slideIndex > slides.length) {
      slideIndex = 1;
    }

    if (slideIndex < 1) {
      slideIndex = slides.length;
    }

    sliderCounterCurrent.textContent = getZero(slideIndex);
    indicatorsBtn.forEach(btn => {
      btn.classList.remove('slider-indicators__button--active');
    });
    indicatorsBtn[slideIndex - 1].classList.add('slider-indicators__button--active');
  }

  showCurrentNumber(); //slider buttons listeners

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

/***/ }),

/***/ "./source/scripts/blocks/scroll-animate-paralax-title.js":
/*!***************************************************************!*\
  !*** ./source/scripts/blocks/scroll-animate-paralax-title.js ***!
  \***************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ scrollAnimateParalaxTitle; }
/* harmony export */ });
function scrollAnimateParalaxTitle() {
  const paralaxTitles = document.querySelectorAll('.paralax__title');
  const options = {
    rootMargin: '0px',
    threshold: .2
  };

  const setItemActive = entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('paralax__title--show');
      }
    });
  };

  const observer = new IntersectionObserver(setItemActive, options);
  paralaxTitles.forEach(item => {
    observer.observe(item);
  });
}

/***/ }),

/***/ "./source/scripts/blocks/scrollTopButton.js":
/*!**************************************************!*\
  !*** ./source/scripts/blocks/scrollTopButton.js ***!
  \**************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ scrollTopButton; }
/* harmony export */ });
function scrollTopButton() {
  const topButton = document.querySelector('.footer-copyright__button-top');
  topButton.addEventListener('click', () => {
    window.scrollTo(0, 0);
  });
}

/***/ }),

/***/ "./source/scripts/blocks/sent-emeil.js":
/*!*********************************************!*\
  !*** ./source/scripts/blocks/sent-emeil.js ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ sentEmeil; }
/* harmony export */ });
function sentEmeil() {
  const POST_DATA_SOURCE = 'sentMeil.php';
  const contatForm = document.querySelector('.contact-form');

  const sendData = body => fetch(POST_DATA_SOURCE, {
    method: 'POST',
    body
  }).then(response => {
    if (response.ok) {
      return response;
    }

    throw new Error(`${response.status} ${response.statusText}`);
  });

  contatForm.addEventListener('submit', evt => {
    evt.preventDefault();
    const formData = new FormData(contatForm);
    const dataArray = {
      title: formData.get('title'),
      message: formData.get('text'),
      emeil: formData.get('emeil')
    };
    sendData(dataArray).then(response => {
      if (response.ok) {
        console.log(response);
      }
    }).catch(() => {
      console.log(Error);
    }).finally(() => {
      console.log('finally');
    });
  });
}

/***/ }),

/***/ "./source/scripts/blocks/set-current-menu-item.js":
/*!********************************************************!*\
  !*** ./source/scripts/blocks/set-current-menu-item.js ***!
  \********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ setCurrentMenuItem; }
/* harmony export */ });
function setCurrentMenuItem() {
  const isScrolledIntoView = elem => {
    const rect = elem.getBoundingClientRect();
    const elemTop = rect.top;
    const elemBottom = rect.bottom;
    const isVisible = elemTop < window.innerHeight / 2 && Math.sign(elemTop) != -1 || elemBottom > window.innerHeight / 2 && elemBottom < window.innerHeight;
    return isVisible;
  };

  const allSections = document.querySelectorAll('section');
  const allNavLinks = document.querySelectorAll('.nav__link');
  const footerBlock = document.querySelector('.footer');
  const secArr = [...allSections, footerBlock];

  const markCurrentMenuItem = () => {
    secArr.forEach(section => {
      let sectionName;

      if (isScrolledIntoView(section)) {
        sectionName = section.getAttribute('data-section-name');
        allNavLinks.forEach(link => {
          link.classList.remove('nav__link--current');

          if (link.getAttribute('data-link-name') === sectionName) {
            link.classList.add('nav__link--current');
          }
        });
      }
    });
  };

  markCurrentMenuItem();
  window.addEventListener('scroll', markCurrentMenuItem);
}

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
!function() {
/*!*********************************!*\
  !*** ./source/scripts/index.js ***!
  \*********************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _blocks_portfolio_slider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./blocks/portfolio-slider */ "./source/scripts/blocks/portfolio-slider.js");
/* harmony import */ var _blocks_navigation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./blocks/navigation */ "./source/scripts/blocks/navigation.js");
/* harmony import */ var _blocks_scrollTopButton__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./blocks/scrollTopButton */ "./source/scripts/blocks/scrollTopButton.js");
/* harmony import */ var _blocks_contact_me_modal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./blocks/contact-me-modal */ "./source/scripts/blocks/contact-me-modal.js");
/* harmony import */ var _blocks_scroll_animate_paralax_title__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./blocks/scroll-animate-paralax-title */ "./source/scripts/blocks/scroll-animate-paralax-title.js");
/* harmony import */ var _blocks_set_current_menu_item__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./blocks/set-current-menu-item */ "./source/scripts/blocks/set-current-menu-item.js");
/* harmony import */ var _blocks_sent_emeil__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./blocks/sent-emeil */ "./source/scripts/blocks/sent-emeil.js");







window.addEventListener('DOMContentLoaded', () => {
  (0,_blocks_scroll_animate_paralax_title__WEBPACK_IMPORTED_MODULE_4__["default"])();

  if (document.querySelector('.slider')) {
    (0,_blocks_portfolio_slider__WEBPACK_IMPORTED_MODULE_0__["default"])();
  }

  if (document.querySelector('.nav')) {
    (0,_blocks_navigation__WEBPACK_IMPORTED_MODULE_1__["default"])();
    (0,_blocks_set_current_menu_item__WEBPACK_IMPORTED_MODULE_5__["default"])();
  }

  if (document.querySelector('.contact-modal')) {
    (0,_blocks_contact_me_modal__WEBPACK_IMPORTED_MODULE_3__["default"])();
    (0,_blocks_sent_emeil__WEBPACK_IMPORTED_MODULE_6__["default"])();
  }

  if (document.querySelector('.footer-copyright__button-top')) {
    (0,_blocks_scrollTopButton__WEBPACK_IMPORTED_MODULE_2__["default"])();
  }
});
}();
/******/ })()
;
//# sourceMappingURL=bundle.js.map