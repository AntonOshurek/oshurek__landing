export default function contactMeModal() {
  const body = document.querySelector('.body');
  const modalTrigerBtn = document.querySelector('.hello__button');
  const modal = document.querySelector('.contact-modal');
  const modalCloseButton = document.querySelector('.contact-modal__close-button');
  const inputs = document.querySelectorAll('.contact-form__input');

  const onModalBgClose = (evt) => {
    if (evt.key === 'Escape') {
      evt.preventDefault();
      closeModal();
    }

    if(!evt.target.closest('.contact-modal__content')) {
      closeModal();
    }

    modal.removeEventListener('click', onModalBgClose);
    document.removeEventListener('keydown', onModalBgClose);
  };

  modalTrigerBtn.addEventListener('click', () => {
    openModal();
  });

  function openModal () {
    modal.classList.add('contact-modal--open');
    body.classList.add('body--scrolloff');
    modal.addEventListener('click', onModalBgClose);
    modalCloseButton.addEventListener('click', closeModal);
    document.addEventListener('keydown', onModalBgClose);
    inputs[0].focus();
  }

  function closeModal () {
    modal.classList.remove('contact-modal--open');
    body.classList.remove('body--scrolloff');
    modalTrigerBtn.focus();
  }
}
