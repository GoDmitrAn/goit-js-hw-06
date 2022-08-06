const formElement = document.querySelector('.login-form');

formElement.addEventListener('submit', handleCheckForm);
function handleCheckForm(event) {
    event.preventDefault();
    const {
        elements: { email, password }
    } = event.currentTarget;
    if (email.value === '' || password.value === '') {
        return alert("Please fill in all the fields!");
    }
    const userFormData = {
        email: this.elements.email.value,
        password: this.elements.password.value,
    };
    // console.log(`Login: ${email.value}, Password: ${password.value}`);
    console.log("🚀 ~ userFormData", userFormData)

  event.currentTarget.reset();
}

