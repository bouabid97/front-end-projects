//selecting elements
const slectElement = (s) => document.querySelector(s);

const navLinks = document.querySelectorAll(".nav-link");
slectElement(".burger-menu-icon").addEventListener("click", () => {
  slectElement(".nav-list").classList.toggle("active");
  slectElement(".burger-menu-icon").classList.toggle("toggle");
  navLinks.forEach((link, index) => {
    if (link.style.animation) {
      link.style.animation = "";
    } else {
      link.style.animation = `navLinkAnimate 0.5s ease forwards ${
        index / 12 + 0.5
      }s`;
    }
    console.log(link, index);
  });
});
navLinks.forEach(link => {
  link.addEventListener('click', () => {
    slectElement(".nav-list").classList.toggle("active");
    slectElement(".burger-menu-icon").classList.toggle("toggle");
    navLinks.forEach((link, index) => {
      if (link.style.animation) {
        link.style.animation = "";
      } else {
        link.style.animation = `navLinkAnimate 0.5s ease forwards ${
          index / 12 + 0.5
        }s`;
      }
      console.log(link, index);
    });
  });

})