
//Get the sign up and log in modal
const signupModal = document.getElementById("signupModal");
const loginModal = document.getElementById("loginModal")
// Get sign up button
const signupButton1 = document.getElementById("sign-column1")
const signupButton2 = document.getElementById("sign-column2")
// Get log up button
const loginButton1 = document.getElementById("log-column1");
const loginButton2 = document.getElementById("log-column2");
// Get close button for modal
const closeSignup = document.getElementById("closeSignUp");
const closeLogin = document.getElementById("closeLogin");

// Function to open the signup modal
signupButton1.onclick = function() {
    signupModal.style.display = "block";
}
signupButton2.onclick = function() {
    signupModal.style.display = "block";
}
// Function to open the login modal
loginButton1.onclick = function() {
    loginModal.style.display = "block";
}
loginButton2.onclick = function() {
    loginModal.style.display = "block";
}
// Close signup modal
closeSignup.onclick = function() {
    signupModal.style.display = "none";
}

// Close login modal
closeLogin.onclick = function() {
    loginModal.style.display = "none";
}

// Selecting the password and confirming the password
const passwordInput = document.getElementById("new-password");
const confirmPasswordInput = document.getElementById("confirm-password");

//Selecting the form and submit button
const signUpForm = document.querySelector("form[action='/signup']");
const submitButton = document.querySelector(".submit-signup");

// Function to validate the password
const validatePasswordConfirmation = () => {
  const password = passwordInput.value;
  const confirmPassword = confirmPasswordInput.value;

  if (password !== confirmPassword) {
    // If passwords do not match, show an error message
    confirmPasswordInput.setCustomValidity("Passwords do not match");
  } else {
    // If passwords match, clear the error message
    confirmPasswordInput.setCustomValidity("");
  }
};


// Form submission with redirection after validation
signUpForm.addEventListener("submit", function (e) {
  e.preventDefault(); // Prevent default form submission

  validatePasswordConfirmation(); // Validate passwords

  // If passwords match and other form conditions are met
if (confirmPasswordInput.validity.valid) {
  var role;
  if (document.getElementById("professor").checked) {
      role = "professor";
  } else if (document.getElementById("student").checked) {
      role = "student";
  }

  // Redirect based on role
  if (role === "professor") {

      // Redirect to professor profile page
      window.location.href = "professor-profile.html";
  } else if (role === "student") {

      // Redirect to student profile page
      window.location.href = "student-profile.html";
  }
}
});
// Get the login form
const loginForm = document.querySelector("form[action='/login']");

// Add event listener to the login form submit button
loginForm.addEventListener("submit", function(e) {
    e.preventDefault(); // Prevent default form submission

    // Redirect to profile page upon successful login
    window.location.href = "home.html";
});


