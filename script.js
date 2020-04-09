$(document).ready(function() {
    $("body").scrollspy({ target: "#main-navbar", offset: 105 });
  
    // Smooth Scrolling
    $("#main-navbar a").on("click", function(event) {
      if (this.hash !== "") {
        event.preventDefault();
  
        const hash = this.hash;
  
        $("html, body").animate(
          {
            scrollTop: $(hash).offset().top
          },
          800,
          function() {
            window.location.hash = hash;
          }
        );
      }
    });
  
    $("body").scrollspy({ target: "#bio-btn", offset: 105 });
  
    $("#bio-btn a").on("click", function(event) {
      if (this.hash !== "") {
        event.preventDefault();
  
        const hash = this.hash;
  
        $("html, body").animate(
          {
            scrollTop: $(hash).offset().top
          },
          800,
          function() {
            window.location.hash = hash;
          }
        );
      }
    });
  
    $("body").scrollspy({ target: ".aboutme", offset: 105 });
  
    $(".about-me a").on("click", function(event) {
      if (this.hash !== "") {
        event.preventDefault();
  
        const hash = this.hash;
  
        $("html, body").animate(
          {
            scrollTop: $(hash).offset().top
          },
          800,
          function() {
            window.location.hash = hash;
          }
        );
      }
    });
  
    $("body").scrollspy({ target: ".skills", offset: 105 });
  
    $(".skills a").on("click", function(event) {
      if (this.hash !== "") {
        event.preventDefault();
  
        const hash = this.hash;
  
        $("html, body").animate(
          {
            scrollTop: $(hash).offset().top
          },
          800,
          function() {
            window.location.hash = hash;
          }
        );
      }
    });
  
    $("body").scrollspy({ target: ".highlights", offset: 105 });
  
    $(".my-work a").on("click", function(event) {
      if (this.hash !== "") {
        event.preventDefault();
  
        const hash = this.hash;
  
        $("html, body").animate(
          {
            scrollTop: $(hash).offset().top
          },
          800,
          function() {
            window.location.hash = hash;
          }
        );
      }
    });
  
    var navbar = document.querySelector("nav");
  
    window.onscroll = function() {
      // pageYOffset or scrollY
      if (window.pageYOffset > 0) {
        navbar.classList.add("scrolled");
      } else {
        navbar.classList.remove("scrolled");
      }
    };
    wow = new WOW({
      boxClass: "wow", // default
      animateClass: "animated", // default
      offset: 0, // default
      mobile: true, // default
      live: true // default
    });
  
    new WOW().init();
  });