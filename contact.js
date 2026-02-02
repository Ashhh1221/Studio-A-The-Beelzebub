document.getElementById("contactForm").addEventListener("submit", function(e) {
    e.preventDefault();

    const msg = document.getElementById("form-message");

    msg.textContent = "Your message has been submitted successfully!";
    msg.classList.add("show");

    // Clear form fields
    this.reset();

    // Hide message after 3 seconds
    setTimeout(() => {
        msg.classList.remove("show");
    }, 3000);
});
