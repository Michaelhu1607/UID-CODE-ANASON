/* Fix Nav bar */

window.addEventListener('scroll', function() {
    var navbar = document.querySelector('.navbar-main');
    var offset = navbar.offsetTop;
  
    if (window.pageYOffset >= offset) {
      navbar.classList.add('navbar-fixed');
    } else {
      navbar.classList.remove('navbar-fixed');
    }
  });

  