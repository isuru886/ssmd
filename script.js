document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    var message = document.getElementById("message");

    // Validate the username and password 
    if (username === "user" && password === "password") {
        message.style.color = "#2ecc71";
        message.textContent = "Login successful!";
    } else {
        message.style.color = "#e74c3c";
        message.textContent = "Invalid username or password. Please try again.";
    }
});
