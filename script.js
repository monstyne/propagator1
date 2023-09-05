
function submitForm() {

  var name = document.getElementById("name").value;
  var gender = document.getElementById("gender").value;
  var problem = document.getElementById("problem").value;
  
  if (name === "" || gender === "none" || problem === "") {
    alert("Please fill in all fields.");
    return;
  }
  var problemItem = {
    name: name,
    gender: gender,
    problem: problem,
    time: new Date().toLocaleString()
  };
  
  var problems = JSON.parse(localStorage.getItem("problems")) || [];
  
  problems.unshift(problemItem);
  localStorage.setItem("problems", JSON.stringify(problems));
  document.getElementById("name").value = "";
  document.getElementById("gender").value = "none";
  document.getElementById("problem").value = "";
  
  alert("Problem submitted successfully!");
}

document.getElementById("userForm").addEventListener("submit", function(event) {
  event.preventDefault(); 
  submitForm(); 
});
