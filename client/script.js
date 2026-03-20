const API_URL = "http://localhost:5000";

// Fetch and display all events
function loadEvents() {
    fetch(`${API_URL}/events`)
        .then(res => res.json())
        .then(events => {
            const list = document.getElementById("event-list");
            list.innerHTML = "";
            events.forEach(event => {
                const li = document.createElement("li");
                li.textContent = event.title;
                list.appendChild(li);
            });
        });
}

// Handle form submission
document.querySelector("form").addEventListener("submit", function(e) {
    e.preventDefault();
    const title = document.getElementById("title").value;

    fetch(`${API_URL}/events`, {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({ title })
    })
        .then(res => res.json())
        .then(newEvent => {
            const li = document.createElement("li");
            li.textContent = newEvent.title;
            document.getElementById("event-list").appendChild(li);
            document.getElementById("title").value = "";
        });
});

loadEvents();
