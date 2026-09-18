// Rewritten script for root bridge page
document.addEventListener('DOMContentLoaded', () => {
  // Mobile menu toggle
  const mobileBtn = document.getElementById('mobile-btn');
  const mobileMenu = document.getElementById('mobile-menu');

  if (mobileBtn && mobileMenu) {
    mobileBtn.addEventListener('click', (e) => {
      const expanded = mobileBtn.getAttribute('aria-expanded') === 'true';
      mobileBtn.setAttribute('aria-expanded', (!expanded).toString());
      mobileMenu.classList.toggle('hidden');
      const icon = mobileBtn.querySelector('i');
      if (icon) icon.setAttribute('data-lucide', mobileMenu.classList.contains('hidden') ? 'menu' : 'x');
      if (window.lucide) lucide.createIcons();
      e.stopPropagation();
    });

    // Click outside closes menu
    document.addEventListener('click', (ev) => {
      if (!mobileMenu.contains(ev.target) && !mobileBtn.contains(ev.target)) {
        if (!mobileMenu.classList.contains('hidden')) {
          mobileMenu.classList.add('hidden');
          mobileBtn.setAttribute('aria-expanded', 'false');
          const icon = mobileBtn.querySelector('i');
          if (icon) icon.setAttribute('data-lucide', 'menu');
          if (window.lucide) lucide.createIcons();
        }
      }
    });
  }

  // Navbar scroll behavior
  const navbar = document.getElementById('navbar');
  let lastY = window.scrollY;
  const onScroll = () => {
    const y = window.scrollY;
    if (Math.abs(y - lastY) < 1) return;
    lastY = y;
    if (y > 20) navbar.classList.add('navbar-scroll');
    else navbar.classList.remove('navbar-scroll');
  };
  window.addEventListener('scroll', () => requestAnimationFrame(onScroll));

  // Brand click to about
  const brand = document.getElementById('brand');
  if (brand)
    brand.addEventListener('click', () => {
      window.location.href = 'https://ahmadpijar.github.io/my-portofolio/#/about';
    });
});
