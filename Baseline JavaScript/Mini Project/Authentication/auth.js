// Sign In & Register with Local Storage

document.addEventListener("DOMContentLoaded", function() {
    // Tab switching
    const signInBtn = document.getElementById("showSignIn");
    const registerBtn = document.getElementById("showRegister");
    const signInForm = document.getElementById("signInForm");
    const registerForm = document.getElementById("registerForm");
    signInBtn.onclick = function() {
        signInForm.style.display = "block";
        registerForm.style.display = "none";
        signInBtn.classList.add("btn-primary");
        signInBtn.classList.remove("btn-outline-primary");
        registerBtn.classList.add("btn-outline-secondary");
        registerBtn.classList.remove("btn-secondary");
    };
    registerBtn.onclick = function() {
        signInForm.style.display = "none";
        registerForm.style.display = "block";
        registerBtn.classList.add("btn-secondary");
        registerBtn.classList.remove("btn-outline-secondary");
        signInBtn.classList.add("btn-outline-primary");
        signInBtn.classList.remove("btn-primary");
    };
    // Show register by default
    registerBtn.click();

    // Registration
    document.getElementById("regForm").addEventListener("submit", function(e) {
        e.preventDefault();
        let valid = true;
        ["nameError","emailError","passwordError","formSuccess"].forEach(id => {
            document.getElementById(id).textContent = "";
        });
        const name = this.name.value.trim();
        if (name.length < 2) {
            document.getElementById("nameError").textContent = "Name must be at least 2 characters.";
            valid = false;
        }
        const email = this.email.value.trim();
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(email)) {
            document.getElementById("emailError").textContent = "Please enter a valid email address.";
            valid = false;
        }
        const password = this.password.value;
        if (password.length < 6) {
            document.getElementById("passwordError").textContent = "Password must be at least 6 characters.";
            valid = false;
        }
        if (valid) {
            // Save to localStorage
            let users = JSON.parse(localStorage.getItem("users") || "[]");
            if (users.find(u => u.email === email)) {
                document.getElementById("emailError").textContent = "Email already registered.";
                return;
            }
            users.push({ name, email, password });
            localStorage.setItem("users", JSON.stringify(users));
            document.getElementById("formSuccess").textContent = "Registration successful! You can now sign in.";
            this.reset();
        }
    });

    // Sign In
    document.getElementById("loginForm").addEventListener("submit", function(e) {
        e.preventDefault();
        ["loginEmailError","loginPasswordError","loginSuccess"].forEach(id => {
            document.getElementById(id).textContent = "";
        });
        const email = this.loginEmail.value.trim();
        const password = this.loginPassword.value;
        let users = JSON.parse(localStorage.getItem("users") || "[]");
        const user = users.find(u => u.email === email && u.password === password);
        if (!email) {
            document.getElementById("loginEmailError").textContent = "Please enter your email.";
            return;
        }
        if (!password) {
            document.getElementById("loginPasswordError").textContent = "Please enter your password.";
            return;
        }
        if (user) {
            document.getElementById("loginSuccess").textContent = "Welcome, " + user.name + "! Redirecting...";
            this.reset();
            setTimeout(function() {
                window.location.href = "project-description.html";
            }, 1200);
        } else {
            document.getElementById("loginSuccess").textContent = "Invalid email or password.";
        }
    });
});
