const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const password2 = document.getElementById("password2");

// Show Error message for input
function showError(input, message) {
  const formControl = input.parentElement;
  formControl.className = "form-control error";
  const small = formControl.querySelector("small");
  small.innerText = message;
}

// Show Success message
function showSuccess(input) {
  const formControl = input.parentElement;
  formControl.className = "form-control success";
}

// Email validation
function checkEmail(input) {
  const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (re.test(input.value.trim())) {
    showSuccess(input);
  } else if (input.value === "") {
    showError(input, "Email is required");
  } else {
    showError(input, "Email is not valid");
  }
}

// Field Name uppercase
function getFieldName(input) {
  return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}

// Check length of user details
function checkLength(input, min, max) {
  if (input.value === "") {
    showError(input, `${getFieldName(input)} is Required`);
  } else if (input.value.length < min) {
    showError(
      input,
      `${getFieldName(input)} is must be ${min} characters long`
    );
  } else if (input.value.length > max) {
    showError(
      input,
      `${getFieldName(input)} is must be less than ${max} characters`
    );
  } else {
    showSuccess(input);
  }
}

// Check Password match
function checkPasswordMatch(input1, input2) {
  if (input1.value !== input2.value) {
    showError(input2, "passwords does not match");
  } else {
    showSuccess(input2);
  }
}

// Event Listener
form.addEventListener("submit", function (e) {
  e.preventDefault();

  checkLength(username, 3, 15);
  checkLength(password, 6, 24);
  checkEmail(email);
  checkPasswordMatch(password, password2);
});
