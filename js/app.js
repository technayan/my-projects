// Tailwind Config
tailwind.config = {
  theme: {
    extend: {
      colors: {
        primary: "#00FF84",
      },
    },
  },
};

window.addEventListener("scroll", function () {
  let scroll = window.scrollY;
  if (scroll > 50) {
    document.querySelector("#header").style.boxShadow =
      "0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)";
    document.querySelector("#header").style.background = "rgb(31 41 55)";
  } else {
    document.querySelector("#header").style.boxShadow = "none";
    document.querySelector("#header").style.background = "transparent";
  }
});

const menuBtn = document.getElementById("menuBtn");
const menu = document.getElementById("menu");
const menuBtnIcon = document.getElementById("menuBtnIcon");

const toggleMenu = () => {
  menu.classList.toggle("left-full");
  if (menuBtnIcon.className == "ri-menu-3-line") {
    menuBtnIcon.className = "ri-close-large-line";
  } else {
    menuBtnIcon.className = "ri-menu-3-line";
  }
};
