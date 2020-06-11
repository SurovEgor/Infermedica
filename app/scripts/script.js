const mobileButtonMenu = document.querySelector(".mobile-menu__button"),
      adaptiveMenu = document.querySelector(".header__right");

mobileButtonMenu.addEventListener("click", () =>{
    mobileButtonMenu.classList.toggle("is-active");
    adaptiveMenu.classList.toggle("open");
});

