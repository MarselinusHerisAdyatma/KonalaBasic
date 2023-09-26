document.addEventListener("DOMContentLoaded", function () {
    var signInButton = document.getElementById("signInButton");

    signInButton.addEventListener("click", function () {
        var email = document.getElementById("email").value;
        var password = document.getElementById("password").value;

        if (email.trim() === "" || password.trim() === "") {
            alert("Masukkan email dan password anda terlebih dahulu.");
        } else {
            alert("Berhasil Sign In!"); 
        }
    });
});
document.getElementById("signUpLink").addEventListener("click", function() {
    window.location.href = "signup.html"; // Ganti "signup.html" dengan URL halaman sign up Anda.
});
