const form = document.querySelector("#contact-form");
const formName = document.querySelector("#name");
const email = document.querySelector("#email");
const formSubject = document.querySelector("#subject");
const formAddress = document.querySelector("#address");
const button = document.querySelector("button");
const message = document.querySelector("#message");

function checkIfVaild() {
  if (
    checkInput(formName.value, 1) &&
    checkInput(formSubject.value, 10) &&
    vaildEmail(email.value) &&
    checkInput(formAddress.value, 25)
  ) {
    button.disabled = false;
  } else {
    message.innerHTML = "";
    button.disabled = true;
  }
}

formName.addEventListener("keyup", checkIfVaild);
formSubject.addEventListener("keyup", checkIfVaild);
email.addEventListener("keyup", checkIfVaild);
formAddress.addEventListener("keyup", checkIfVaild);

function submitForm(event) {
  event.preventDefault();
  message.innerHTML = `<div class="message"> Message delivered</div>`;
  form.reset();
}

form.addEventListener("Submit", submitForm);

function checkInput(value, len) {
  if (value.trim().length >= len) {
    return true;
  } else {
    return false;
  }
}

function vaildEmail(email) {
  const regEx = /\S+@\S+\.\S+/;
  const patternMatches = regEx.test(email);
  return patternMatches;
}

/*const form = document.querySelector("#contact-form");
const formName = document.querySelector("#name");
const nameError = document.querySelector("#nameError");
const email = document.querySelector("#email");
const emailError = document.querySelector("#emailError");
const formSubject = document.querySelector("#subject");
const subjectError = document.querySelector("#subjectError");
const formAddress = document.querySelector("#address");
const addressError = document.querySelector("#addressError");
const button = document.querySelector("button");



function validateForm() {
  event.preventDefault();

  if (formName.value.trim().length > 0) {
    nameError.style.display = "none";
  } else {
    nameError.style.display = "block";
    return false;
  }

  if (formSubject.value.trim().length > 10) {
    subjectError.style.display = "none";
  } else {
    subjectError.style.display = "block";
    return false;
  }

  if (validEmail(email.value) === true) {
    emailError.style.display = "none";
  } else {
    emailError.style.display = "block";
    return false;
  }

  if (formAddress.value.trim().length > 25) {
    addressError.style.display = "none";
  } else {
    addressError.style.display = "block";
    return false;
  }
  return true;
}

addEventListener("submit", validateForm);

function validEmail(email) {
  const regEx = /\S+@\S+\.\S+/;
  const patternMatches = regEx.test(email);
  return patternMatches;
} */
