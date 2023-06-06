document.getElementById("dropdown-button").addEventListener("click", function() {
    var dropdownMenu = document.getElementById("dropdown-menu");
    dropdownMenu.classList.toggle("open");
  });

 document.addEventListener("DOMContentLoaded", function() {
    var guest = localStorage.getItem("numberOfGuest");
    var date = localStorage.getItem("redate");
    

    document.getElementById("numberOfGuest").textContent = guest;
    document.getElementById("redate").textContent = dates;
});
  