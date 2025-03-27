// Scroll to the top when the button is clicked
function topFunction() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
  
  // Get the button
let scrollTopBtn = document.getElementById("scrollTopBtn");

// Show the button when the user scrolls down 20px from the top
window.onscroll = function() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    scrollTopBtn.style.display = "block";
  } else {
    scrollTopBtn.style.display = "none";
  }
};
