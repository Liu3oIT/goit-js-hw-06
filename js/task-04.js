// const btnDecrement = document.querySelector('button[data-action = "decrement"]');
// console.log(btnDecrement);
// const btnIncrement = document.querySelector('button[data-action = "increment"]');
// console.log(btnIncrement);
// const accountCounter = document.querySelector('#value');
// console.log(accountCounter);
// let counterValue = 0;
// const updateCounterValue = () => {
//     accountCounter.textContent = counterValue;
// }

// btnDecrement.addEventListener("click", () =>{
//     counterValue--;
//     updateCounterValue();
// });
// btnIncrement.addEventListener("click", () =>{
//     counterValue++;
//     updateCounterValue();
// });
const counter = document.querySelector('#counter');
const accountCounter = document.querySelector('#value');
let counterValue = 0;
const updateCounterValue = () => {
    accountCounter.textContent = counterValue;
  };
const upOrDownCounter = (event) =>{
        const button = event.target.closest("button");
        if (button) {
            const action = button.dataset.action;
            if (action === "decrement"){
                counterValue--;
            }
            else{
                if( action === "increment"){
                    counterValue ++;
                }
            }
            updateCounterValue ();
        }
    }

counter.addEventListener("click" , upOrDownCounter);