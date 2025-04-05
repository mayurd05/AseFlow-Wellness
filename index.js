
function toggleMenu() {
  document.querySelector('.nav__links').classList.toggle('active');
}
document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("contactForm");
  const confirmation = document.getElementById("confirmationMessage");

  form.addEventListener("submit", function (e) {
    e.preventDefault(); // prevent actual form submission
    
    // Optional: Clear the form fields
    form.reset();

    // Show confirmation message
    confirmation.style.display = "block";

    // Hide message after 5 seconds
    setTimeout(() => {
      confirmation.style.display = "none";
    }, 5000);
  });
});