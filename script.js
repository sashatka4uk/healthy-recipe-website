/*******************\
    Some JS code for mobile navigation 
\*******************/

const mobileBtn = document.querySelector(".header__mobile");
const mobileNavigationBox = document.querySelector(".header__nav");

mobileBtn.addEventListener("click", function () {
  mobileNavigationBox.classList.toggle("open");
});

/*******************\
    To show meals on page using data from json
\*******************/
