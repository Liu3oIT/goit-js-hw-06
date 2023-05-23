const form = document.querySelector(".login-form");
const  arrayDataUserInfo = [];

const handleSubmit = (event) => {
    event.preventDefault();
    const {
        elements: { email, password }
    } = event.currentTarget;
    if (email.value === "" || password.value === "") {
      return  alert("Please fill in all the fields!");
    }
    const formInfo = {
        email: email.value,
        password: password.value,
    };
    arrayDataUserInfo.push(formInfo);
    console.log(arrayDataUserInfo);
    event.currentTarget.reset();
}
form.addEventListener("submit", handleSubmit);
