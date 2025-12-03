// Wait for the page to finish loading
document.addEventListener('DOMContentLoaded', function() {
  
  // Find the contact form
  const contactForm = document.getElementById('contactForm');
  
  // If there's no contact form on this page, stop here
  if (contactForm === null) {
    return;
  }
  
  // When someone submits the form...
  contactForm.addEventListener('submit', function(event) {
    
    // Stop the page from refreshing
    event.preventDefault();
    
    // Get the values from each field
    const nameField = contactForm.querySelector('input[type="text"]');
    const emailField = contactForm.querySelector('input[type="email"]');
    const messageField = contactForm.querySelector('textarea');
    
    const name = nameField.value.trim();
    const email = emailField.value.trim();
    const message = messageField.value.trim();
    
    // Check if any field is empty
    if (name === '' || email === '' || message === '') {
      alert('Please fill out all fields before submitting.');
      return;
    }
    
    // Show success message
    alert('Thanks, ' + name + '! We will get back to you shortly.');
    
    // Clear the form
    contactForm.reset();
  });
});