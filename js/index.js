const maskOptions = {
  mask: '+{7} (000) 000-00-00',
};

const phoneInputs = document.querySelectorAll(`input[type="tel"]`);

phoneInputs.forEach((inputElement) => IMask(inputElement, maskOptions));

const authNavButtons = document.querySelectorAll('.auth-modal__nav-button');
const authBlocks = document.querySelectorAll('.auth-modal__main-block');

function activateAuthBlock(target) {
  authNavButtons.forEach((button) => button.classList.remove('active'));
  authBlocks.forEach((block) => block.classList.remove('active'));

  const button = document.querySelector(`.auth-modal__nav-button[data-target="${target}"]`);
  const block = document.querySelector(`.auth-modal__main-block[data-block="${target}"]`);

  if (button) button.classList.add('active');
  if (block) block.classList.add('active');
}

authNavButtons.forEach((button) => {
  button.addEventListener('click', () => {
    activateAuthBlock(button.dataset.target);
  });
});

const firstTarget = authNavButtons[0].dataset.target;
activateAuthBlock(firstTarget);

const authModal = document.querySelector('.auth-modal');

if (authModal) {
  authModal.addEventListener('click', (event) => {
    const isLayout = event.target === event.currentTarget;
    const isConfirm = event.target.classList.contains('auth-modal__confirm-button');

    if (isLayout || isConfirm) event.currentTarget.classList.remove('active');
  });
}

const authButton = document.querySelector('.auth-button');

if (authButton) {
  authButton.addEventListener('click', () => {
    if (authModal) authModal.classList.add('active');
  });
}

// disclaimer

const disclaimerModal = document.querySelector('.disclaimer-modal');

if (disclaimerModal) {
  disclaimerModal.addEventListener('click', (event) => {
    const isConfirm = event.target.classList.contains('disclaimer-modal__confirm-button');

    if (isConfirm) event.currentTarget.classList.remove('active');
  });
}
