// Form submission handler for quote modal (Home page and Services page)
document.addEventListener('DOMContentLoaded', function() {
  
  // Handle quote form submission
  const quoteForm = document.getElementById('quoteForm');
  if (quoteForm) {
    quoteForm.addEventListener('submit', function(e) {
      e.preventDefault();
      
      // Show success alert
      alert('Thank you for your quote request! We will contact you shortly.');
      
      // Reset the form
      quoteForm.reset();
      
      // Close the modal
      const modal = bootstrap.Modal.getInstance(document.getElementById('quoteModal'));
      if (modal) {
        modal.hide();
      }
    });
  }
  
  // Handle contact form submission (Contact page)
  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
      e.preventDefault();
      
      // Show success alert
      alert('Thank you for your message! We will get back to you as soon as possible.');
      
      // Reset the form
      contactForm.reset();
    });
  }
});