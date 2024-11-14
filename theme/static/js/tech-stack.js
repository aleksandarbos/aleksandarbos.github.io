(function initTechCategories() {
  document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll(".tech-category").forEach((category) => {
      category.classList.remove("active");
    });

    document.querySelectorAll(".category-header").forEach((header) => {
      header.addEventListener("click", () => {
        const category = header.parentElement;
        category.classList.toggle("active");

        if (category.classList.contains("active")) {
          const rect = category.getBoundingClientRect();
          const isInView = rect.top >= 0 && rect.bottom <= window.innerHeight;

          if (!isInView) {
            category.scrollIntoView({ behavior: "smooth", block: "start" });
          }
        }
      });
    });
  });
})();
