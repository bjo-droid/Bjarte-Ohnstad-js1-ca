const form = document.querySelector("#contact-form");
const formName = document.querySelector("#name");
const nameError = document.querySelector("#nameError");
const email = document.querySelector("#email");
const emailError = document.querySelector("#emailError");
const formSubject = document.querySelector("#subject");
const subjectError = document.querySelector("#subjectError");
const formAddress = document.querySelector("#address");
const addressError = document.querySelector("#addressError");

function validateForm() {
  event.preventDefault();

  if (formName.value.trim().length > 0) {
    nameError.style.display = "none";
  } else {
    nameError.style.display = "block";
  }

  if (formSubject.value.trim().length > 10) {
    subjectError.style.display = "none";
  } else {
    subjectError.style.display = "block";
  }

  if (validEmail(email.value) === true) {
    emailError.style.display = "none";
  } else {
    emailError.style.display = "block";
  }

  if (formAddress.value.trim().length > 25) {
    addressError.style.display = "none";
  } else {
    addressError.style.display = "block";
  }
}

form.addEventListener("submit", validateForm);

function validEmail(email) {
  const regEx = /\S+@\S+\.\S+/;
  const patternMatches = regEx.test(email);
  return patternMatches;
}
