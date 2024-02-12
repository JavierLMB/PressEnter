function mobileStickyHeader() {
  const isMobileMenuActive = document
    .querySelector(".header__mobile-menu")
    .classList.contains("header__mobile-menu--active");
  const mobileHamburger = document.querySelector(".header__mobile-hamburger");

  mobileHamburger.style.position = isMobileMenuActive ? "fixed" : "relative";

  return isMobileMenuActive;
}

function stickyHeader() {
  const header = document.querySelector(".header");
  const headerShadow = document.querySelector(".header-sticky-shadow");
  const body = document.querySelector("body");
  const headerHeight = header.offsetHeight + 300;
  const isHeaderSticky = window.scrollY > headerHeight;

  const toggleSticky = () => {
    header.classList.toggle("header-sticky", isHeaderSticky);
    setTimeout(() => {
      header.classList.toggle("header-sticky-animation", isHeaderSticky);
    }, 100);
    headerShadow.style.display = isHeaderSticky ? "block" : "none";
    body.style.marginTop = isHeaderSticky ? "10vh" : "0";
  };

  const isMobileMenuActive = mobileStickyHeader();
  if (isMobileMenuActive) return;
  toggleSticky();
}

window.addEventListener("scroll", stickyHeader);
