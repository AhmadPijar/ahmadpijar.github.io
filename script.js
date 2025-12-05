// ===============================
// Mobile Menu Toggle
// ===============================
const menuBtn = document.getElementById("menu-btn");
const mobileMenu = document.getElementById("mobile-menu");

menuBtn.addEventListener("click", (e) => {
  e.stopPropagation(); // Prevent closing logic
  mobileMenu.classList.toggle("hidden");
});

// ===============================
// Click Outside to Close Menu
// ===============================
document.addEventListener("click", function (event) {
  const isClickInsideMenu = mobileMenu.contains(event.target);
  const isClickHamburger = menuBtn.contains(event.target);

  // jika klik bukan di menu dan bukan tombol hamburger
  if (!isClickInsideMenu && !isClickHamburger) {
    mobileMenu.classList.add("hidden");
  }
});

// ===============================
// Navbar Scroll Feature
// ===============================
const navbar = document.querySelector("nav");
let lastScrollY = 0;

function handleScroll() {
  const currentScroll = window.scrollY;

  // Jika tidak berubah → hentikan
  if (Math.abs(currentScroll - lastScrollY) < 1) return;
  lastScrollY = currentScroll;

  if (currentScroll > 1) {
    navbar.classList.add("navbar-scroll");
    navbar.classList.remove("navbar-top");
  } else {
    navbar.classList.remove("navbar-scroll");
    navbar.classList.add("navbar-top");
  }
}

window.addEventListener("scroll", () => {
  requestAnimationFrame(handleScroll);
});

// initial state
handleScroll();

// ===============================
// Fade-in animation on load
// ===============================
document.addEventListener("DOMContentLoaded", () => {
  document.body.classList.add("fade-in");
});
