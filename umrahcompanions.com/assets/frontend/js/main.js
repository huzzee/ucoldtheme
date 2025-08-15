$(function () {
  // Load header content
      $("#loader-container").load("assets/frontend/shared/loader.html", function () {
        // Fade it out after 2 seconds
        $('.main-loader').fadeOut(2000);
    });

  $("#header").load("assets/frontend/shared/header.html", function () {
    // Callback logic for header load (if necessary)
    // const navItems = document.querySelectorAll('.navbar-nav .nav-link');
    // console.log(navItems)
    // if (navItems.length > 0) {
    //   navItems.forEach(item => {
    //     console.log(item, item.href)
    //     console.log(window.location.href.includes(item.href))
    //     if (window.location.href.includes(item.href)) {
    //       console.log(item.classList)
    //       // Add 'active' class to clicked item
    //       item.classList.add('active');
    //     }

    //   });
    // } else {
    //   console.error('No navigation items found.');
    // }
  });
    $("#register-Modal").load("assets/frontend/shared/register-modal.html");


  // Load footer content
  $("#footer").load("assets/frontend/shared/footer.html");

  // Add active class to clicked navbar item

});

