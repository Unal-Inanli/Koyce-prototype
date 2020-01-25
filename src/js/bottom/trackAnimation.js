export function animateBlocks() {
   
    var thingsToAnimate = $('.animate');
    var entryPoint = $(".entry").position().top;
    var passed = false;

    $(window).scroll(function() {
        var windowsPos = window.scrollY + window.outerHeight / 2;
       if(windowsPos >= entryPoint && passed === false) {
           passed = true;
           for(var index = 1; index < thingsToAnimate.length + 1; index++) {
            if(index % 2 !== 0) {
                thingsToAnimate[index - 1].classList.add('animation-enter-left');
              }
              else {
                  thingsToAnimate[index - 1].classList.add('animation-enter-right');
              }
           }
       } 
    });
    
}