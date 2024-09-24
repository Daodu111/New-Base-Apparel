function validateEmailInput() {
    const emailInput = document.getElementById('emailInput').value;
    const feedbackElement = document.getElementById('emailFeedback');
    const errorIcon = document.getElementById('errorIcon')
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  
    if (emailRegex.test(emailInput)) {
      feedbackElement.textContent = ""; // Email is valid
      errorIcon.classList.add('hidden'); //Hide the error icon
    } else {
      feedbackElement.textContent = "Please provide a valid email";
      errorIcon.classList.remove('hidden'); //show
    }
  }