 // Set a flag in sessionStorage when the user is redirected to the main page
 setTimeout(function() {
  sessionStorage.setItem('visited', true);  // Set the visited flag
  window.location.href = 'index.html';       // Redirect to the main page
}, 3000);
