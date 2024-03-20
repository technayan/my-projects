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

const menuBtn = document.getElementById("menuBtn");
const menu = document.getElementById("menu");
const menuBtnIcon = document.getElementById("menuBtnIcon");

menuBtn.addEventListener("click", () => {
  menu.classList.toggle("left-full");
  if (menuBtnIcon.className == "ri-menu-3-line") {
    menuBtnIcon.className = "ri-close-large-line";
  } else {
    menuBtnIcon.className = "ri-menu-3-line";
  }
});
