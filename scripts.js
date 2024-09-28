 // Scroll Change Navbar Background
 window.addEventListener('scroll', function() {
    var navbar = document.getElementById('navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Toggle Menu on Mobile
document.querySelector('.menu-toggle').addEventListener('click', function() {
    document.querySelector('nav ul').classList.toggle('active');
});

if (!sessionStorage.getItem('visited')) {
    // If not visited, redirect to the loading page
    window.location.href = 'loading.html';
  } else {
    // If visited, show the page after checking sessionStorage
    document.body.style.display = 'block';  // Reveal the body content
  }


  // Optional: Smooth scroll to section
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
