document.addEventListener("DOMContentLoaded", function () {
    const submitButton = document.getElementById("submitButton");
    const notification = document.getElementById("notification");
    const formInputs = document.querySelectorAll("input[type='text'], input[type='email'], input[type='tel'], textarea");

    submitButton.addEventListener("click", function () {
        let isFormValid = true;

        formInputs.forEach(function (input) {
            if (input.value.trim() === "") {
                isFormValid = false;
            }
        });

        if (isFormValid) {
            notification.style.display = "block"; 
        } else {
            alert("Harap isi semua field form terlebih dahulu.");
        }
    });
});