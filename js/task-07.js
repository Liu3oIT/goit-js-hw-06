const controlSize = document.querySelector("#font-size-control");
const changeText = document.querySelector("#text");


const abracadabra = (event) => {
  changeText.style.fontSize = `${event.target.value}px`;
};
controlSize.addEventListener("input", abracadabra);
