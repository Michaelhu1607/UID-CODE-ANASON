window.addEventListener('scroll', function() {
  var navbar = document.querySelector('.navbar');
  var inPageNav = document.getElementById('in-page-nav');
  
  if (window.scrollY > navbar.offsetHeight) {
    inPageNav.classList.add('fixed-nav');
  } else {
    inPageNav.classList.remove('fixed-nav');
  }
});