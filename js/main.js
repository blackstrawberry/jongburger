const burger = document.querySelector('.burgers');
const nav_menu = document.querySelector(".nav_menu");
const nav_back = document.querySelector(".nav_back");

const handleBurgerClick = () => {
  nav_menu.classList.toggle("active");
  nav_back.classList.toggle("active");
  burger.classList.toggle("active");
}

burger.addEventListener('click', handleBurgerClick);