function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const controls = document.querySelector("#controls");
const createButton = controls.querySelector("[data-create]");
const destroyButton = controls.querySelector("[data-destroy]");
const boxesContainer = document.querySelector("#boxes");

const createNumberBoxEl = () => {
  const amountInput = controls.firstElementChild;
  const amount = Number(amountInput.value);
  createBoxes(amount);
};
createButton.addEventListener("click", createNumberBoxEl);

const destroyAllBoxEl = () => {
  boxesContainer.innerHTML = "";
};

destroyButton.addEventListener("click", destroyAllBoxEl);
const createBoxes = (amount) => {
  const boxes = [];
  Array.from({ length: amount }).forEach((_, index) => {
    const size = 30 + index * 10;
    const randomColor = getRandomHexColor();
    const div = document.createElement("div");
    div.style.cssText = `width: ${size}px; height: ${size}px; background-color: ${randomColor};`;

    boxes.push(div);
  });

  boxesContainer.append(...boxes);
};
