// Function to show the registration form and hide the login form
function showRegister() {
    document.getElementById("login-container").style.display = "none";
    document.getElementById("register-container").style.display = "block";
}

// Function to show the login form and hide the registration form
function showLogin() {
    document.getElementById("register-container").style.display = "none";
    document.getElementById("login-container").style.display = "block";
}

// Add event listeners for the "Register here" and "Login here" links
document.getElementById("show-register").addEventListener("click", showRegister);
document.getElementById("show-login").addEventListener("click", showLogin);