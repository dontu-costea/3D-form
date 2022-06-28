let submit = document.getElementById("signup__submit");
let popup = document.getElementById("popup");
let popupClose = document.getElementById("popup__close");
let signUpPassword = document.getElementById("signup__password");
let confirmPassword = document.getElementById("confirm__password");
let signupEmail = document.getElementById("signup__email");
submit.addEventListener("click", () => {
  if (signUpPassword.value !== confirmPassword.value || signupEmail.value == false) {
    popup.style.opacity = "1";
  }
})
popupClose.addEventListener("click", () => {
  popup.style.opacity = "0";
})