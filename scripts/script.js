document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contactForm");

  if (!form) return; // stop if form doesn't exist

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    // Get all inputs inside the form
    const inputs = form.querySelectorAll("input, textarea");

    // Check if any field is empty
    const empty = Array.from(inputs).some(field => !field.value.trim());

    if (empty) {
      alert("Please fill out all fields before submitting.");
      return;
    }

    // Success message
    const name = form.querySelector('input[type="text"]').value;
    alert(`Thanks, ${name}! We'll get back to you shortly.`);

    form.reset(); // clear form
  });
});