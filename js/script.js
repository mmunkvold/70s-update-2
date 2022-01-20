const navbar = document.getElementById("navbar");
const navbarNav = document.getElementById("navbar-nav");
const toggle = document.getElementById("navbar-toggle");

if (toggle) {
  toggle.addEventListener("click", () => {
    navbarNav.classList.toggle("show");
    toggle.classList.toggle("show");
  });
}

if (navbarNav) {
  navbarNav.addEventListener("click", () => {
    navbarNav.classList.remove("show");
    toggle.classList.remove("show");
  });
}

function showImg(imgs) {
  const expandImg = document.getElementById("expandedImg");
  expandImg.src = imgs.src;
  expandImg.setAttribute("alt", imgs.alt);
}
