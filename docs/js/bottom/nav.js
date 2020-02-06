

export function navToggle() {

  $(".nav-tablet-menu-icon").on("click", function () {

    var nav = $(".nav-tablet-list");
    var navCover = $(".nav-cover");
    nav.toggleClass("nav-tablet-list-open");
    navCover.toggleClass("nav-cover-closed");
  });

  $(".nav-tablet-close-button").on("click", function() {
    
    var nav = $(".nav-tablet-list");
    var navCover = $(".nav-cover");
    nav.removeClass("nav-tablet-list-open");
    navCover.addClass("nav-cover-closed");
  }); 

};

export function revealHeader (){

  var heroHeight = $('.hero').height();
  var passed = false;
  var returned = true;

  $(window).scroll(function() {
    var windowPos = window.scrollY
    if(windowPos >= heroHeight && passed === false) {
       $('.header').addClass('header-reveal');
       $('.header').removeClass('header-hide');
       passed = true;
       returned = false;
      } else if(windowPos <= heroHeight && returned === false) {
       passed = false;
       returned = true;
       $('.header').removeClass('header-reveal');
       $('.header').addClass('header-hide');
    }

  });
}



export function smoothScroll() {
  $(document).ready(function () {
    // Add smooth scrolling to all links
    $("a").on('click', function (event) {
      // Make sure this.hash has a value before overriding default behavior
      if (this.hash !== "") {
        // Prevent default anchor click behavior
        event.preventDefault();

        // Store hash
        var hash = this.hash;

        // Using jQuery's animate() method to add smooth page scroll
        // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
        $('html, body').animate({
          scrollTop: $(hash).offset().top
        }, 800, function () {

          // Add hash (#) to URL when done scrolling (default click behavior)
          window.location.hash = hash;
        });
      } // End if
    });
  });
}

export function smoothScrollNav() {
  $(document).ready(function () {
    // Add smooth scrolling to all links
    var links = Array.from($(".nav-link"));

    links.forEach(function(element){
      
      element.addEventListener('click', function (event) {
       // Make sure this.hash has a value before overriding default behavior
       if (this.childNodes[0].hash !== "") {
         // Prevent default anchor click behavior
         event.preventDefault();
 
         // Store hash
         var hash = this.childNodes[0].hash;
 
         // Using jQuery's animate() method to add smooth page scroll
         // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
         $('html, body').animate({
           scrollTop: $(hash).offset().top
         }, 400, function () {
 
           // Add hash (#) to URL when done scrolling (default click behavior)
           window.location.hash = hash;
         });
       } // End if
     });

    });
    
  });
}

export function navLinkHover() {
  var navLinks = Array.from($(".nav-desktop-list-item"));
  navLinks.forEach((element) => {
    element.addEventListener('mouseenter', function () {
      if(element.childNodes.length < 2){
      element.innerHTML += `<div class="nav-desktop-link-underline animation-underline"></div>`
      }
    });

    element.addEventListener('mouseleave', function () {
     
      element.removeChild(element.childNodes[1]);
  
    });
  
  });

}