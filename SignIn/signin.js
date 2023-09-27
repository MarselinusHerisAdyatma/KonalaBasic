document.addEventListener("DOMContentLoaded", function () {
    var signInButton = document.getElementById("signInButton");
    var emailInput = document.getElementById("email");
    var passwordInput = document.getElementById("password");
    var errorMessage = document.getElementById("errorMessage");

    signInButton.addEventListener("click", function () {
        var email = emailInput.value;
        var password = passwordInput.value;

        if (email.trim() === "" || password.trim() === "") {
            errorMessage.textContent = "Masukkan email dan password anda terlebih dahulu.";
            errorMessage.style.display = "block";
        } else {
            errorMessage.style.display = "none";
            alert("Berhasil Sign In!"); 
        }
    });
    
    emailInput.addEventListener("input", function () {
        errorMessage.style.display = "none";
    });

    passwordInput.addEventListener("input", function () {
        errorMessage.style.display = "none";
    });
});

    var signupLink = document.getElementById("signup-link");

    signupLink.addEventListener("click", function (e) {
        window.location.href = "https://github.com/MarselinusHerisAdyatma/KonalaBasic/blob/main/SignUp/signup.html"; 
        e.preventDefault(); 
    });