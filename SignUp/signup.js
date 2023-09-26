document.addEventListener("DOMContentLoaded", function () {
    var signUpButton = document.getElementById("signUpButton");
    var namaInput = document.getElementById("nama");
    var emailInput = document.getElementById("email");
    var passwordInput = document.getElementById("password");
    var errorMessage = document.getElementById("errorMessage");

    signUpButton.addEventListener("click", function () {
        var nama = namaInput.value;
        var email = emailInput.value;
        var password = passwordInput.value;

        if (nama.trim() === "" || email.trim() === "" || password.trim() === "") {
            errorMessage.textContent = "Masukkan nama, email, dan password anda terlebih dahulu.";
            errorMessage.style.display = "block"; 
        } else {
            errorMessage.style.display = "none"; 
            alert("Berhasil Sign Up!"); 
        }
    });

    namaInput.addEventListener("input", function () {
        errorMessage.style.display = "none";
    });

    emailInput.addEventListener("input", function () {
        errorMessage.style.display = "none";
    });

    passwordInput.addEventListener("input", function () {
        errorMessage.style.display = "none";
    });
});