import '../scss/main.scss';

const headerNav = document.querySelector('[data-js="header-nav"]');

headerNav.addEventListener('click', handleHeaderNavClick);
window.matchMedia('(min-width: 768px)').addEventListener('change', ({ matches }) => {
  if (matches && headerNav.classList.contains('active')) {
    toggleHeaderGuide();
  }
});

function handleHeaderNavClick({ target }) {
  if (target.matches('[data-js~="button-guide"]') || target.matches('[data-js="header-overlay"]')) {
    toggleHeaderGuide();
  }
}

function toggleHeaderGuide() {
  const overlay = document.querySelector('[data-js="header-overlay"]');
  const buttonOpen = document.querySelector('[data-js~="button-open"]');
  const active = headerNav.classList.contains('active');

  headerNav.classList.toggle('active');
  buttonOpen.setAttribute('aria-expanded', !active);
  active && closing(overlay);
}

function closing(element) {
  element.classList.add('closing');

  element.addEventListener(
    'animationend',
    () => {
      element.classList.remove('closing');
    },
    { once: true }
  );
}
