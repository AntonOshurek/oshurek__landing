export default function setCurrentMenuItem () {

  const isScrolledIntoView = (elem) => {
    const rect = elem.getBoundingClientRect();

    const elemTop = rect.top;
    const elemBottom = rect.bottom;

    const isVisible = (elemTop < (window.innerHeight / 2) && Math.sign(elemTop) != -1) || ((elemBottom > window.innerHeight / 2) && elemBottom < window.innerHeight);
    return isVisible;
  };

  const allSections = document.querySelectorAll('section');
  const allNavLinks = document.querySelectorAll('.nav__link');
  const footerBlock = document.querySelector('.footer');

  const secArr = [...allSections, footerBlock];

  const markCurrentMenuItem = () => {
    secArr.forEach((section) => {
      let sectionName;
      if(isScrolledIntoView(section)) {
        sectionName = section.getAttribute('data-section-name');

        allNavLinks.forEach((link) => {
          link.classList.remove('nav__link--current');
          if(link.getAttribute('data-link-name') === sectionName){
            link.classList.add('nav__link--current');
          }
        })
      }
    })
  };

	markCurrentMenuItem();

  window.addEventListener('scroll', markCurrentMenuItem);

}
