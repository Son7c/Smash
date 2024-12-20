document.addEventListener("DOMContentLoaded", () => {
    // Sections
    const loginForm = document.getElementById("login-form");
    const signupForm = document.getElementById("signup-form");
    const profileSection = document.getElementById("profile");

    // Buttons/Links
    const showSignup = document.getElementById("showSignup");
    const showLogin = document.getElementById("showLogin");
    const logoutButton = document.getElementById("logout");

    // Profile Elements
    const profileEmail = document.getElementById("profileEmail");

    // Signup Functionality
    const signupHandler = (event) => {
        event.preventDefault();

        const email = document.getElementById("signupEmail").value;
        const password = document.getElementById("signupPassword").value;

        // Retrieve existing users from localStorage
        const users = JSON.parse(localStorage.getItem("users")) || [];

        // Check if the email is already registered
        if (users.find((user) => user.email === email)) {
            alert("This email is already registered!");
            return;
        }

        // Save the new user
        users.push({ email, password });
        localStorage.setItem("users", JSON.stringify(users));

        alert("Signup successful! Please log in.");
        signupForm.reset();
        signupForm.style.display = "none";
        loginForm.style.display = "block";
    };

    // Login Functionality
    const loginHandler = (event) => {
        event.preventDefault();

        const email = document.getElementById("loginEmail").value;
        const password = document.getElementById("loginPassword").value;

        // Retrieve users from localStorage
        const users = JSON.parse(localStorage.getItem("users")) || [];

        // Validate credentials
        const user = users.find((user) => user.email === email && user.password === password);

        if (user) {
            profileEmail.textContent = email;
            loginForm.style.display = "none";
            profileSection.style.display = "block";
        } else {
            alert("Invalid email or password!");
        }
    };

    // Logout Functionality
    const logoutHandler = () => {
        profileSection.style.display = "none";
        loginForm.style.display = "block";
        loginForm.reset();
    };

    // Event Listeners
    document.getElementById("signupForm").addEventListener("submit", signupHandler);
    document.getElementById("loginForm").addEventListener("submit", loginHandler);
    logoutButton.addEventListener("click", logoutHandler);

    // Toggle between forms
    showSignup.addEventListener("click", () => {
        loginForm.style.display = "none";
        signupForm.style.display = "block";
    });
    showLogin.addEventListener("click", () => {
        signupForm.style.display = "none";
        loginForm.style.display = "block";
    });
});
