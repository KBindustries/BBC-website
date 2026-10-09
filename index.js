const menuBtn = document.getElementById('menubtn');
const closeBtn = document.getElementById('close-btn');
const sidenav = document.getElementById('sidenav');

if (menuBtn && closeBtn && sidenav) {
  const isMobileScreen = () => window.matchMedia('(max-width: 600px)').matches;

  const updateMenuButtons = () => {
    const isOpen = sidenav.classList.contains('open');
    if (!isMobileScreen()) {
      menuBtn.style.display = 'none';
      closeBtn.style.display = 'none';
      return;
    }
    menuBtn.style.display = isOpen ? 'none' : 'inline-flex';
    closeBtn.style.display = isOpen ? 'inline-flex' : 'none';
  };

  menuBtn.addEventListener('click', () => {
    sidenav.classList.add('open');
    updateMenuButtons();
  });

  closeBtn.addEventListener('click', () => {
    sidenav.classList.remove('open');
    updateMenuButtons();
  });

  window.addEventListener('resize', updateMenuButtons);
  updateMenuButtons();
}

const featureImages = document.querySelectorAll('.feature-desc img.loading');
featureImages.forEach((img) => {
  const removeLoader = () => img.classList.remove('loading');

  img.addEventListener('load', removeLoader);
  img.addEventListener('error', () => {
    if (img.src && img.src.trim() !== '') {
      removeLoader();
    }
  });

  if (img.complete && img.naturalWidth > 0) {
    removeLoader();
  }
});
