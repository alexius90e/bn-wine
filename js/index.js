const disclaimerModal = document.querySelector('.disclaimer-modal');

if (disclaimerModal) {
  disclaimerModal.addEventListener('click', (event) => {
    const isLayout = event.currentTarget === event.target;
    const isConfirm = event.target.classList.contains('disclaimer-modal__confirm-button');

    if (isLayout || isConfirm) event.currentTarget.classList.remove('active');
  });
}
