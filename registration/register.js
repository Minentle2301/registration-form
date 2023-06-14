// Get references to the form and input field
let form = document.querySelector('.login');
let usernameInput = document.querySelector('#username input');
let emailInput = document.querySelector('#email input');
const passwordInput = document.querySelector('#password input');
const confirmPasswordInput = document.querySelector('#password2 input');

// Adds an event listener to the form submission
form.addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent a default form submission

  // removes previous error messages
  clearErrorMessages();

  // Validate each field
  let isValid = true;

  // Validating name , name should not be empty and must have alphabets
  const username = usernameInput.value.trim();
  if (!username) {
    displayErrorMessage(usernameInput, 'Your user name is required');
    isValid = false; // when it is fales it will show an error message
  } else if (!/^[A-Za-z]+$/.test(username)) {
    displayErrorMessage(usernameInput, 'your name should only require alphabet characters');
    isValid = false;
  }

  // Validate email field and should not be blank and should be appropriate
  const email = emailInput.value.trim();
  if (!email) {
    displayErrorMessage(emailInput, 'You are required to enter your email');
    isValid = false;
  } else if (!validateEmail(email)) {
    displayErrorMessage(emailInput, 'Please enter a valid email address');
    isValid = false;
  }

  // Validate password field with the appropriate format needed for password
  const password = passwordInput.value;
  if (!password) {
    displayErrorMessage(passwordInput, 'Password is required');
    isValid = false;
  } else if (!validatePassword(password)) {
    displayErrorMessage(passwordInput, 'Password should contain one number, one uppercase and one lowercase character!');
    isValid = false;
  }

  // Validate confirm password field (should match the password field)
  const confirmPassword = confirmPasswordInput.value;
  if (!confirmPassword) {
    displayErrorMessage(confirmPasswordInput, 'Confirm password is required');
    isValid = false;
  } else if (password !== confirmPassword) {
    displayErrorMessage(confirmPasswordInput, 'Passwords do not match, password should match');
    isValid = false;
  }

  if (isValid) {
    // if the form is successful it should redirect to next page
    alert("Thank you your regristration was successful!");
  }
});

// Function to validate email format using regular expression
function validateEmail(email) {
  const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  return emailRegex.test(email);
}

// Function to validate password format
function validatePassword(password) {
  
  const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[\w.!@#$%^&*]{8,}$/;
  return passwordRegex.test(password);
}

// Function to display error message 
function displayErrorMessage(inputField, message) {
  const errorMessage = document.createElement('p');
  errorMessage.classList.add('error-message');
  errorMessage.textContent = message;
  inputField.parentNode.appendChild(errorMessage);
}

// Function to clear all error messages
function clearErrorMessages() {
  const errorMessages = document.querySelectorAll('.error-message');
  errorMessages.forEach(function(errorMessage) {
    errorMessage.parentNode.removeChild(errorMessage);
  });
}


