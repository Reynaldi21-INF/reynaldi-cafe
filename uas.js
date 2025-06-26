// class active
const navbarNav = document.querySelector(".navbar-nav");
const hamburger = document.querySelector("#hamburger");

// klik hamburger
hamburger.addEventListener("click", function () {
  navbarNav.classList.toggle("active");
});

// klik diluar
document.addEventListener("click", function (e) {
  if (!navbarNav.contains(e.target) && !hamburger.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});
