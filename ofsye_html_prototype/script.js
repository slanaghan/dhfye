document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.querySelector(".nav-toggle");
  const nav = document.querySelector(".site-nav");
  if (toggle && nav) {
    toggle.addEventListener("click", () => {
      const open = nav.classList.toggle("open");
      toggle.setAttribute("aria-expanded", String(open));
    });
  }

  const year = document.querySelector("[data-year]");
  if (year) year.textContent = new Date().getFullYear();

  const toast = document.querySelector(".toast");
  document.querySelectorAll(".placeholder-link").forEach(link => {
    link.addEventListener("click", event => {
      event.preventDefault();
      if (!toast) return;
      toast.textContent = "Prototype link: replace this with the current CSUDH destination in CM1.";
      toast.classList.add("show");
      window.clearTimeout(window.__ofsyeToast);
      window.__ofsyeToast = window.setTimeout(() => toast.classList.remove("show"), 2800);
    });
  });
});
