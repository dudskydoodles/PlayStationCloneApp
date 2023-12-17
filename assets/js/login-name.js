function loginUser() {
    const email = document.getElementById("login-email").value;
    const password = document.getElementById("login-password").value;
  
    // Get existing users from localStorage
    const users = JSON.parse(localStorage.getItem("users")) || [];
  
    // Check if the user exists
    const user = users.find(
      (user) => user.email === email && user.password === password
    );
  
    if (user) {
      // Save user's name to local storage
      localStorage.setItem("user_name", user.name);
  
      // Display login success message
      alert("Login successful");
  
      // Redirect to another page (e.g., index.html)
      window.location.href = "/index.html";
    } else {
      // Display login failed message
      alert("Login failed. Check your email and password.");
    }
  }
  
  // Function to log out the user
  function logoutUser() {
    // Clear user-related data from local storage
    localStorage.removeItem("user_name");
  
    // Redirect to the login page
    window.location.href = "/assets/html/login.html";
  }
  
  // Update the login button in the navbar with the user's name
  document.addEventListener("DOMContentLoaded", function () {
    const userName = localStorage.getItem("user_name");
    const loginButton = document.querySelector(
      ".nav_link[href='/assets/html/login.html']"
    );
  
    if (userName && loginButton) {
      // Update the href attribute of the login button
      loginButton.href = "#"; // Set to "#" since it's just a placeholder
  
      // Create a dropdown menu
      const dropdownMenu = document.createElement("div");
      dropdownMenu.className = "dropdown-menu";
  
      // Add a logout option
      const logoutOption = document.createElement("a");
      logoutOption.href = "#";
      logoutOption.textContent = "Logout";
      logoutOption.style.color = "lightblue"; // Set the text color to light blue
      logoutOption.style.display = "none"; // Hide logout text initially
      logoutOption.addEventListener("click", logoutUser);
  
      // Append logout option to the dropdown menu
      dropdownMenu.appendChild(logoutOption);
  
      // Append the dropdown menu to the login button
      loginButton.parentElement.appendChild(dropdownMenu);
  
      // Update the login button text to show the user's name
      loginButton.innerHTML = `Welcome, ${userName}`;
  
      // Show the dropdown menu on hover
      loginButton.parentElement.addEventListener("mouseenter", function () {
        dropdownMenu.style.display = "block";
        logoutOption.style.display = "block"; // Show logout text on hover
      });
  
      // Hide the dropdown menu when not hovering
      loginButton.parentElement.addEventListener("mouseleave", function () {
        dropdownMenu.style.display = "none";
        logoutOption.style.display = "none"; // Hide logout text when not hovering
      });
    }
  });
  