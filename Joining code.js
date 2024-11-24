// Fetch events from the BACKEND
document.addEventListener("DOMContentLoaded", function () {
    const eventsSection = document.getElementById("eventsList");
  
    fetch('mongodb://localhost:5000/events')
      .then(response => response.json())
      .then(events => {
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
      })
      .catch(error => {
        console.error("Error fetching events:", error);
      });
  });