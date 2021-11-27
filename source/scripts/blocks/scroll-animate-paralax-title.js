export default function scrollAnimateParalaxTitle() {
  const paralaxTitles = document.querySelectorAll('.paralax__title');

  const options = {
    rootMargin: '0px',
    threshold: .2,
  };

  const setItemActive = (entries) => {
    entries.forEach((entry) => {
      if(entry.isIntersecting) {
        entry.target.classList.add('paralax__title--show');
      }
    });
  };

  const observer = new IntersectionObserver(setItemActive, options);

  paralaxTitles.forEach((item) => {
    observer.observe(item);
  });

}
