const inputName = document.querySelector('#name-input');
const nameOutput = document.querySelector('#name-output');

const userName = (event) => {
    
    if(event.currentTarget.value === "") {
        nameOutput.textContent = "Anonymous";
    }else {
        nameOutput.textContent = event.currentTarget.value;
    }
}

inputName.addEventListener ("input", userName)