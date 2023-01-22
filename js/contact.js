const form = document.querySelector("#contact-form");
const formName = document.querySelector("#name");
const nameError = document.querySelector("#nameError");
const email = document.querySelector("#email");
const emailError = document.querySelector("#emailError");

function validateForm() {
  event.preventDefault();

  if (formName.value.trim().length > 0) {
    nameError.style.display = "none";
  } else {
    nameError.style.display = "block";
  }

  if (validEmail(email.value) === true) {
    emailError.style.display = "none";
  } else {
    emailError.style.display = "block";
  }
}

form.addEventListener("submit", validateForm);

function validEmail(email) {
  const regEx = /\S+@\S+\.\S+/;
  const patternMatches = regEx.test(email);
  return patternMatches;
}
