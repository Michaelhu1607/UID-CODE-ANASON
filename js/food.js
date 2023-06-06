/* This function is used to show the drop down list of the filter*/
function toggleDropdown() {
    var filterMenu = document.getElementById("filterMenu");
    if (filterMenu.style.display === "none") {
      filterMenu.style.display = "block";
    } else {
      filterMenu.style.display = "none";
    }
  }