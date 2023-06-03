/* Following code is used to get the value from the input text and display on other page*/
document.addEventListener("DOMContentLoaded", function() {
    var params = new URLSearchParams(window.location.search);
  
    var firstName = params.get("firstName");
    var lastName = params.get("lastName");
    var mobile = params.get("Mobile");
    var email = params.get("Email");
    var specialRequirement = params.get("specialre");
  
    document.getElementById("firstName").textContent = firstName;
    document.getElementById("lastName").textContent = lastName;
    document.getElementById("mobile").textContent = mobile;
    document.getElementById("email").textContent = email;
    document.getElementById("specialRequirement").textContent = specialRequirement;
  });