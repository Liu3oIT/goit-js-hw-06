const controlSize = document.querySelector('#font-size-control');
const changeText = document.querySelector('#text');
const rangeMin = controlSize.getAttribute("min");
const rangeMax = controlSize.getAttribute("max");


changeText.style.fontSize = "56px";
console.log(`font-size: ${changeText.style.fontSize}`);
const abracadabra = (event) => {
    if (event.target.value >= rangeMin && event.target.value <= rangeMax) {
        changeText.style.fontSize = `${event.target.value}px`;
        console.log(`font-size: ${event.target.value}px`);
    }
}
controlSize.addEventListener("change", abracadabra);