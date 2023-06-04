
/* dynamically adding fixed in-page-navbar */
window.addEventListener('scroll', function() {
    var header = document.querySelector('header');
    var inPageNav = document.getElementById('in-page-group');
    var headerBottom = header.getBoundingClientRect().bottom;
  
    if (headerBottom > 0) {
      inPageNav.classList.add('fixed-in-page-nav');
    } else {
      inPageNav.classList.remove('fixed-in-page-nav');
    }
  });
  