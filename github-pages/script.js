const buttons = [...document.querySelectorAll("[data-section]")].filter((item) => item.tagName === "BUTTON");
const cards = [...document.querySelectorAll(".news-card")];
const count = document.querySelector("#story-count");
buttons.forEach((button) => button.addEventListener("click", () => {
  const selected = button.dataset.section;
  buttons.forEach((item) => item.classList.toggle("active", item === button));
  let visible = 0;
  cards.forEach((card) => {
    const show = selected === "Все" || card.dataset.section === selected;
    card.hidden = !show;
    if (show) visible += 1;
  });
  count.textContent = String(visible).padStart(2, "0");
}));
