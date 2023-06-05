
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
  

/* scroll animation */
  $(document).ready(function() {
    $('.in-page-menu').on('click', function(event) {
      if (this.hash !== '') {
        event.preventDefault();

        var hash = this.hash;

        // Set the duration and easing of the scroll animation
        $('html, body').animate(
          {
            scrollTop: $(hash).offset().top
          },
          800, // Change this value to adjust the animation speed
          'easeInOutExpo' // Change this value to adjust the easing effect
        );
      }
    });
  });


  document.addEventListener('DOMContentLoaded', function() {
    var container = document.querySelector('.filter-container');
    var button = container.querySelector('.filter-button');
    var menu = container.querySelector('.filter-menu');
  
    button.addEventListener('click', function() {
      menu.style.display = (menu.style.display === 'block') ? 'none' : 'block';
    });
  });
  