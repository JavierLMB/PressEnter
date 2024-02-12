function hamburgerToggle() {
  const mobileHamburger = document.querySelector(".header__mobile-hamburger");
  const topLine = document.querySelector("#navLineTop");
  const bottomLine = document.querySelector("#navLineBottom");
  const mobileMenu = document.querySelector(".header__mobile-menu");
  const mobileMenuBackground = document.querySelector(
    ".header__mobile-menu-background"
  );

  const toggleElements = () => {
    topLine.classList.toggle("hamburger-active-line-top");
    bottomLine.classList.toggle("hamburger-active-line-bottom");
    mobileMenu.classList.toggle("header__mobile-menu--active");
    mobileMenuBackground.classList.toggle(
      "header__mobile-menu-background--active"
    );
  };

  mobileHamburger.addEventListener("click", toggleElements);
  mobileMenuBackground.addEventListener("click", toggleElements);
}

hamburgerToggle();
