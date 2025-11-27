// Get the form element
const form = document.querySelector('form');

// Listen for when someone clicks submit
form.addEventListener('submit', function(e) {
  // Stop the form from actually submitting
  e.preventDefault();
  
  // Show a message to the user
  alert('Thank you for registering! This is a demo form, so your information was not actually sent.');
  
  // Optional: Clear the form after submission
  form.reset();
});