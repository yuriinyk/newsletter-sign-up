document.addEventListener("DOMContentLoaded", function () {
    const formContainer = document.querySelector(".container");
    const successMessage = document.getElementById("success-message");
    const emailInput = document.querySelector("input");
    const submitButton = document.getElementById("subscribe-btn");
    const dismissButton = document.getElementById("dismiss-btn");
    const userEmail = document.getElementById("user-email");
    const errorMessage = document.querySelector(".error-message");

    function validateEmail(email) {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    }

    submitButton.addEventListener("click", function (event) {
        event.preventDefault();
        const email = emailInput.value.trim();

        if (validateEmail(email)) {
            emailInput.classList.remove("invalid");
            emailInput.classList.add("valid");
            errorMessage.style.display = "none";

            formContainer.classList.add("hidden");

            setTimeout(() => {
                successMessage.classList.add("show");
                userEmail.textContent = email;
            }, 500);
        } else {
            emailInput.classList.add("invalid");
            emailInput.classList.remove("valid");
            errorMessage.style.display = "block";
        }
    });

    dismissButton.addEventListener("click", function () {
        successMessage.classList.remove("show");

        setTimeout(() => {
            successMessage.style.display = "none";
            formContainer.classList.remove("hidden");
            emailInput.value = "";
        }, 500);
    });
});