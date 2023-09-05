document.getElementById("login-form").addEventListener("submit", function(event) {
    event.preventDefault(); 

    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
  
    if (username === "user" && password === "password") {
      alert("Login successful!");
      window.location.href = "private.html";
      }
     else {
      alert("Login failed. Please check your credentials.");
    }
});
document.getElementById("exitt").addEventListener("click", function() {
  window.close();
});
