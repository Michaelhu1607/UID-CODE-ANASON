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




/* This function is used to check the date is correct*/
function validDate(){
  let inputDate=document.querySelector(".redate").value
  let parsedDated = Date.parse(inputDate)
  if (parsedDated < Date.now()) {
    alert('Date not available for booking')
    return false
  }
  return true
}

/*This function is used to provide only one single choice for users*/
function singleChoice(checkbox) {
  var checkboxes = document.getElementsByName("option");
  
  for (var i = 0; i < checkboxes.length; i++) {
    if (checkboxes[i] !== checkbox) {
      checkboxes[i].checked = false;
    }
  }
}


/* This is trying to show selected date to other html, doesn't work at the end*/
document.getElementById("continuebutton").addEventListener("click", function() {
  var numberOfGuest = document.querySelector(".numberOfGuest").value;
  var redate = document.querySelector(".redate").value;
  
  localStorage.setItem("numberOfGuest", numberOfGuest);
  localStorage.setItem("redate", redate);
});

/* this function is used in search page, allow people press enter to next page (learned)*/
function press(event) {
  if (event.keyCode === 13) { 
      var searchQuery = document.getElementById("searchbar").value;
      window.location.href = "result.html?search=" + encodeURIComponent(searchQuery);
  }
}



