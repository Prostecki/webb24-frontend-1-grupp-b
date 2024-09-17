// find elements that we need in DOM
const burgerMenu = document.querySelector(".burger-menu");
const linksMobileContainer = document.querySelector(".links-mobile-container");

// Declare a const with addeventlistener with arrow function
const toogleMenu = burgerMenu.addEventListener("click", () => {
  //toggle method is a method which replace classes at this poiint
  // I've created a class visible in main.css
  linksMobileContainer.classList.toggle("visible");
});
