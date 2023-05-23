const inputValidation = document.querySelector('#validation-input');

const lengthInputUser = (event) => {
    const expectedLength = parseInt(inputValidation.getAttribute("data-length"));
    const inputlength = event.target.value.length;
    if (expectedLength <= inputlength) {
        inputValidation.classList.remove("invalid");
        inputValidation.classList.add("valid");
    }else{
        inputValidation.classList.remove("valid");
        inputValidation.classList.add("invalid");
    }
}
inputValidation.addEventListener("blur", lengthInputUser);




