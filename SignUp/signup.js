document.addEventListener("DOMContentLoaded", function () {
    var signUpButton = document.getElementById("signUpButton");

    signUpButton.addEventListener("click", function () {
        var nama = document.getElementById("nama").value;
        var email = document.getElementById("email").value;
        var password = document.getElementById("password").value;

        if (nama.trim() === "" || email.trim() === "" || password.trim() === "") {
            alert("Masukkan nama, email dan password terlebih dahulu.");
        } else {
            alert("Berhasil membuat akun!"); 
        }
    });
});
