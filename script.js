const form = document.querySelector("#userForm");

const nameInput = document.querySelector("#name");

const emailInput = document.querySelector("#email");

const imageInput = document.querySelector("#image");

const displayImage = document.querySelector("#displayImage");

const displayName = document.querySelector("#displayName");

const displayEmail = document.querySelector("#displayEmail");


form.addEventListener("submit", function(event) {

    event.preventDefault();

    const name = nameInput.value;

    const email = emailInput.value;

    const file = imageInput.files[0];

    displayName.textContent = "Hello, " + name;

    displayEmail.textContent = email;

    if (file) {

        const imageURL = URL.createObjectURL(file);

        displayImage.src = imageURL;

        displayImage.style.display = "block";
    }

});