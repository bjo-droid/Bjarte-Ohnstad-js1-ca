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
