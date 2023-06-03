

// Smooth scrolling animation
document.addEventListener('DOMContentLoaded', function() {
  var scrollLink = document.querySelectorAll('.in-page-menu');
  
  scrollLink.forEach(function(link) {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      
      var target = document.querySelector(link.getAttribute('href'));
      var targetOffsetTop = target.offsetTop;
      var currentScrollTop = window.pageYOffset || document.documentElement.scrollTop;
      var scrollDistance = Math.abs(targetOffsetTop - currentScrollTop);
      
      // Adjust the duration and easing as needed
      var duration = 1000;
      var easing = 'easeInOutQuart';
      
      scrollTo(targetOffsetTop, duration, easing);
    });
  });
  
  // Function to scroll to a specific position on the page
  function scrollTo(to, duration, easing) {
    var start = window.pageYOffset || document.documentElement.scrollTop;
    var change = to - start;
    var startTime = performance.now();
    
    function animateScroll() {
      var currentTime = performance.now();
      var elapsed = currentTime - startTime;
      var scrollToPosition = easingEquations[easing](elapsed, start, change, duration);
      window.scrollTo(0, scrollToPosition);
      
      if (elapsed < duration) {
        requestAnimationFrame(animateScroll);
      }
    }
    
    animateScroll();
  }
}); 