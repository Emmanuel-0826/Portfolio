// Simple form validation
document.getElementById("contactForm").addEventListener("submit", function(event) {
  event.preventDefault(); // Prevent form from submitting immediately

  let name = document.getElementById("name").value.trim();
  let email = document.getElementById("email").value.trim();
  let message = document.getElementById("message").value.trim();
  let formMessage = document.getElementById("formMessage");

  // Email regex for basic validation
  let emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

  if (name === "" || email === "" || message === "") {
    formMessage.textContent = "⚠️ Please fill in all fields.";
    formMessage.style.color = "red";
  } else if (!email.match(emailPattern)) {
    formMessage.textContent = "⚠️ Please enter a valid email address.";
    formMessage.style.color = "red";
  } else {
    formMessage.textContent = "✅ Message sent successfully!";
    formMessage.style.color = "green";

    // Clear form fields
    document.getElementById("contactForm").reset();
  }
});