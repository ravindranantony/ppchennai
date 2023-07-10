function validateLoginForm(event) {
    event.preventDefault(); // Prevent form submission
  
    // Get input values
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
  
    // Check if inputs are valid
    if (username === "admin" && password === "password") {
      alert("Login successful!");
      // Perform further actions or redirect to another page
    } else {
      alert("Invalid username or password. Please try again.");
    }
  }
  