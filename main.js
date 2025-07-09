  // Auto-collapse navbar on link click
  document.querySelectorAll('.navbar-collapse .nav-link').forEach(link => {
    link.addEventListener('click', () => {
      const navbarToggler = document.querySelector('.navbar-toggler');
      const navbarCollapse = document.querySelector('.navbar-collapse');

      // If the menu is open (class "show" is present), close it
      if (navbarToggler && navbarCollapse.classList.contains('show')) {
        navbarToggler.click();
      }
    });
  });
