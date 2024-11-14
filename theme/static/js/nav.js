(function initializeNavListeners() {
  // Mobile menu functionality
  const menuBtn = document.querySelector(".mobile-menu-btn");
  const nav = document.querySelector(".vertical-nav");

  if (menuBtn && nav) {
    menuBtn.addEventListener("click", () => {
      nav.classList.toggle("nav-open");
      menuBtn.classList.toggle("menu-open");
    });
  }

  document.addEventListener("click", (e) => {
    if (
      !nav.contains(e.target) &&
      !menuBtn.contains(e.target) &&
      nav.classList.contains("nav-open")
    ) {
      nav.classList.remove("nav-open");
      menuBtn.classList.remove("menu-open");
    }
  });
})();
