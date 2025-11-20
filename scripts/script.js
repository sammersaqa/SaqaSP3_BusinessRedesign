document.addEventListener('DOMContentLoaded', function () {
  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
      e.preventDefault();

      const name = this.querySelector('input[type="text"]');
      const email = this.querySelector('input[type="email"]');
      const message = this.querySelector('textarea');

      if (!name.value.trim() || !email.value.trim() || !message.value.trim()) {
        alert('Please fill out all fields before submitting.');
        return;
      }

      alert(`Thanks, ${name.value}! We’ll get back to you shortly.`);
      this.reset();
    });
  }
});