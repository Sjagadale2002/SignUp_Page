document.getElementById("loginButton").addEventListener("click", function() {
    // Get the username and password values from the form
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    // Save the login information in localStorage
    localStorage.setItem("username", username);
    localStorage.setItem("password", password);

    // Display a confirmation message or redirect the user
    alert("Login information saved!");
    // window.location.href = "dashboard.html"; // Redirect to another page after login
});

document.getElementById("showPassword").addEventListener("change", function() {
    const passwordField = document.getElementById("password");
    passwordField.type = this.checked ? "text" : "password";
});
