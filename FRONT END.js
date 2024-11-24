document.addEventListener("DOMContentLoaded", function () {
    console.log("PCEA Church app loaded successfully!");
  
    // Event listener for the form submission (Example: Contact form)
    const contactForm = document.getElementById("contactForm");
    if (contactForm) {
      contactForm.addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent form from submitting
        validateContactForm();
      });
    }
  
    // Function to validate contact form inputs
    function validateContactForm() {
      const name = document.getElementById("name").value;
      const email = document.getElementById("email").value;
      const message = document.getElementById("message").value;
      let errors = [];
  
      if (!name || name.length < 3) {
        errors.push("Name must be at least 3 characters long.");
      }
      if (!email || !validateEmail(email)) {
        errors.push("Please provide a valid email address.");
      }
      if (!message || message.length < 10) {
        errors.push("Message must be at least 10 characters long.");
      }
  
      if (errors.length > 0) {
        alert(errors.join("\n"));
      } else {
        alert("Your message has been sent successfully!");
        // Optionally, send the form data to the server here
      }
    }
  
    // Helper function to validate email format
    function validateEmail(email) {
      const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
      return regex.test(email);
    }
  
    // Example of dynamic event list (for events like Sunday service)
    const events = [
      { name: "Sunday Worship Service", date: "2024-11-24", time: "10:00 AM" },
      { name: "Mid-Week Bible Study", date: "2024-11-21", time: "7:00 PM" },
    ];
  
    const eventsSection = document.getElementById("eventsList");
    if (eventsSection) {
      events.forEach(event => {
        const eventCard = document.createElement("div");
        eventCard.classList.add("event-card");
        eventCard.innerHTML = `
          <h3>${event.name}</h3>
          <p><strong>Date:</strong> ${event.date}</p>
          <p><strong>Time:</strong> ${event.time}</p>
        `;
        eventsSection.appendChild(eventCard);
      });
    }
  });