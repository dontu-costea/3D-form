let submit = document.getElementById("signup__submit");
let popup = document.getElementById("popup");
let popupClose = document.getElementById("popup__close");
let signUpPassword = document.getElementById("signup__password");
let confirmPassword = document.getElementById("confirm__password");
let signupEmail = document.getElementById("signup__email");
const errorBorder = "1px solid red";
const rightBorder = "1px solid #1A1C22";
submit.addEventListener("click", () => {
  if (signUpPassword.value !== confirmPassword.value || signupEmail.value == false || signUpPassword.value == false) {
    popup.style.opacity = "1";
    ( signupEmail.value == false ) ? signupEmail.style.border = errorBorder:  signupEmail.style.border = rightBorder;
    ( signUpPassword.value !== confirmPassword.value || signUpPassword.value == false) ? confirmPassword.style.border = errorBorder : confirmPassword.style.border = rightBorder;
    if ( signUpPassword.value == false ) {
      signUpPassword.style.border = errorBorder;
    } else {
      signUpPassword.style.border = rightBorder;
    }
  } else {
    localStorage.setItem('email', signupEmail.value);
    localStorage.setItem('password', signUpPassword.value);
    popup.style.opacity = "0";
    signupEmail.style.border = rightBorder;
    signUpPassword.style.border = rightBorder;
    confirmPassword.style.border = rightBorder;
  }
})
popupClose.addEventListener("click", () => {
  popup.style.opacity = "0";
})