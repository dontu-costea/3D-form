const ERROR_BORDER = "1px solid red";
const RIGHT_BORDER = "1px solid #1A1C22";
const signUpSubmitBtn = document.getElementById("signup__submit");
const loginSubmitBtn = document.getElementById("login__submit");
const popup = document.getElementById("popup");
const popupClose = document.getElementById("popup__close");
const signUpPassword = document.getElementById("signup__password");
const confirmPassword = document.getElementById("confirm__password");
const signupEmail = document.getElementById("signup__email");
const loginEmail = document.getElementById("login__email");
const loginPassword = document.getElementById("login__password");
const formSwitchCheckbox = document.getElementById("switch");
let userData = {};

const setSignUpBorders = () => {
  signupEmail.style.border = RIGHT_BORDER;
  signUpPassword.style.border = RIGHT_BORDER;
  confirmPassword.style.border = RIGHT_BORDER;
}

const clearSignUpInputs = () => {
  signupEmail.value = "";
  confirmPassword.value = "";
  signUpPassword.value = "";
}

const setLoginpBorders = () => {
  loginEmail.style.border = RIGHT_BORDER;
  loginPassword.style.border = RIGHT_BORDER;
}

const clearLoginInputs = () => {
  loginEmail.value = "";
  loginPassword.value = "";
}

const popupShow = () => {
  popup.style.opacity = "1";
}

const popupHide = () => {
  popup.style.opacity = "0";
}

signUpSubmitBtn.addEventListener("click", () => {
  const notEqualPassword = signUpPassword.value !== confirmPassword.value || !signUpPassword.value;
  
  if (notEqualPassword || !signupEmail.value) {
    popupShow();
    setSignUpBorders();

    if (!signupEmail.value) {
      signupEmail.style.border = ERROR_BORDER 
    }

    if (notEqualPassword) {
      confirmPassword.style.border = ERROR_BORDER
    }
    
    if ( !signUpPassword.value ) {
      signUpPassword.style.border = ERROR_BORDER;
    }
    
  } else {
    localStorage.setItem('user', JSON.stringify({email: signupEmail.value, password: signUpPassword.value}));
    popupHide();
    setSignUpBorders();
    formSwitchCheckbox.checked = false;
    clearSignUpInputs();
  }
})

loginSubmitBtn.addEventListener("click", () => {
  userData = JSON.parse(localStorage.getItem('user'));
  setLoginpBorders();

  if (loginEmail.value == userData.email && loginPassword.value == userData.password) {
    alert("Welcome");
    popupHide();
    clearLoginInputs();
  } else {
    popupShow();
    if (!loginEmail || loginEmail.value !== userData.email) {
      loginEmail.style.border = ERROR_BORDER;
    }

    if (!loginPassword || loginPassword.value !== userData.password) {
      loginPassword.style.border = ERROR_BORDER;
    }
  }

})

popupClose.addEventListener("click", () => {
  popupHide();
})