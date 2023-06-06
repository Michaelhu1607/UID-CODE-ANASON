/* This function is used to put value into lcoal storage, but it doesn't work*/
document.addEventListener("DOMContentLoaded", function() {
    var guest = localStorage.getItem("numberOfGuest");
    var date = localStorage.getItem("redate");
    

    document.getElementById("numberOfGuest").textContent = guest;
    document.getElementById("redate").textContent = date;
});
  