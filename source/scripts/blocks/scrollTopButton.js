export default function scrollTopButton() {
  const topButton = document.querySelector('.footer-copyright__button-top');

  topButton.addEventListener('click', () => {
    window.scrollTo(0,0);
  });
}
