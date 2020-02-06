const simpleBar = new SimpleBar(document.querySelector('body'));

export default function () {
    
    var heroHeight = $('.hero').height();
    var passed = false;
    var returned = true;
    simpleBar.getScrollElement().addEventListener('scroll', function () {
        var windowPos = simpleBar.getScrollElement().scrollTop;
        if (windowPos >= heroHeight && passed === false) {
            $('.header').addClass('header-reveal');
            $('.header').removeClass('header-hide');
            passed = true;
            returned = false;
        } else if (windowPos <= heroHeight && returned === false) {
            passed = false;
            returned = true;
            $('.header').removeClass('header-reveal');
            $('.header').addClass('header-hide');
        }
    })
}

export function animateBlocks() {
    var thingsToAnimate = $('.animate');
    var entryPoint = $(".entry").length === 0 ? null : $(".entry").position().top;
    var passed = false;
    if(entryPoint !== null) {

    simpleBar.getScrollElement().addEventListener('scroll', function () {

        var windowsPos = simpleBar.getScrollElement().scrollTop + simpleBar.getScrollElement().clientHeight / 2;
        if (windowsPos >= entryPoint && passed === false) {
            passed = true;
            for (var index = 1; index < thingsToAnimate.length + 1; index++) {
                if (index % 2 !== 0) {
                    thingsToAnimate[index - 1].classList.add('animation-enter-left');
                }
                else {
                    thingsToAnimate[index - 1].classList.add('animation-enter-right');
                }
            }
        }

    });
}
}