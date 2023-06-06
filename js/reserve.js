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


/*Get references to the input element and buttons
const numberInput = document.getElementById('myNumberInput');
const plusButton = document.getElementById('plusButton');
const minusButton = document.getElementById('minusButton');

 Add event listeners to the buttons
plusButton.addEventListener('click', incrementNumber);
minusButton.addEventListener('click', decrementNumber);

 Function to increment the number
function incrementNumber() {
  numberInput.value = parseInt(numberInput.value) + 1;
}

 Function to decrement the number
function decrementNumber() {
  const currentValue = parseInt(numberInput.value);
  if (currentValue > 0) {
    numberInput.value = currentValue - 1;
  }
}*/

/* this function is used to plus and minus by clicking the symbol
const minus = document.querySelector(".minus");
const number = document.querySelector(".value");
const plus = document.querySelector(".plus");

let sum = 0;
number.innerHTML = sum;*/


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



document.getElementById("continuebutton").addEventListener("click", function() {
  var numberOfGuest = document.querySelector(".numberOfGuest").value;
  var redate = document.querySelector(".redate").value;
  
  localStorage.setItem("numberOfGuest", numberOfGuest);
  localStorage.setItem("redate", redate);
});



