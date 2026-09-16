const form = document.querySelector("#registrationForm");
const nameInput = document.querySelector("#name");
const emailInput = document.querySelector("#email");
const passwordInput = document.querySelector("#password");
const message = document.querySelector("#message");
form.addEventListener("submit", function (event) {
    event.preventDefault();
    const name = nameInput.value; const email = emailInput.value; const password = passwordInput.value;
    if (name === "" || email === "" || password === "") { message.innerText = "Please fill all fields"; return; }
    if (password.length < 6) { message.innerText = "Password must be at least 6 characters"; return; }
    message.innerText = "Registration Successful!"; form.reset();
});