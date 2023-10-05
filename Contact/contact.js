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
  
    const menuItems = document.querySelectorAll(".nav-link");
              
              menuItems.forEach((menuItem) => {
                  menuItem.addEventListener("click", function (e) {
                      e.preventDefault();
                      
                      
                      const target = this.getAttribute("data-target");
                      
                      
                      switch (target) {
                          case "about":
                              window.location.href = "about.html";
                              break;
                          case "katalog":
                              window.location.href = "katalog.html";
                              break;
                          case "contact":
                              window.location.href = "contact.html";
                              break;
                          case "keranjang":
                              window.location.href = "keranjang.html";
                              break;
                          default:
                              break;
                      }
                  });
              });
  });