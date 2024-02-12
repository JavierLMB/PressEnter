function currentDatePopup() {
  const closeBtn = document.querySelector(".company-values__popup-close");
  const openBtn = document.querySelector(".company-values__btn");
  const popup = document.querySelector(".company-values__popup");
  const popupContent = document.querySelector(".company-values__popup-content");

  // Formatted the date and time exactly as shown on the PDF 15:3 / 4th March 2024

  const currentDate = new Date();

  popupContent.innerHTML = `${currentDate
    .toLocaleTimeString("en-GB")
    .slice(0, 5)} / ${currentDate.getDate()}th ${currentDate.toLocaleDateString(
    "en-GB",
    { month: "long" }
  )} ${currentDate.getFullYear()}`;

  closeBtn.addEventListener("click", () => {
    popup.classList.remove("company-values__popup--active");
  });

  openBtn.addEventListener("click", () => {
    popup.classList.add("company-values__popup--active");
  });
}

currentDatePopup();
