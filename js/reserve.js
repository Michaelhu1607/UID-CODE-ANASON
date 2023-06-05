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
  }
);



/* This code is used to direct to the next by clicking the button*/
function goToNextPage (){
  window.location.href = "confirmation.html"
}

/* this function is used to check the length of the mobile
function correctForm() {
  var mobileInput = document.getElementById("mobileInput");
  var mobileValue = mobileInput.value;
  
  if (mobileValue.length < 9 || mobileValue.length > 10) {
      alert("Mobile number should be between 9 and 10 digits");
      return false; 
  }
  
  return true; 
};*/

document.addEventListener("DOMContentLoaded", function() {
  var dropdownToggle = document.querySelector(".dropdown-toggle");
  var dropdown = document.querySelector(".dropdown");

  dropdownToggle.addEventListener("click", function() {
    dropdown.classList.toggle("open");
  });

  // Close the dropdown when clicking outside
  document.addEventListener("click", function(event) {
    if (!dropdown.contains(event.target)) {
      dropdown.classList.remove("open");
    }
  });
});
