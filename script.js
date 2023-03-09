/* navbar effect */
$(document).ready(function(){
    $(window).on('scroll', function(){
        if ($(window).scrollTop()) {
            $("header").addClass('bgc');
        }else{
            $("header").removeClass('bgc');
        }
    });
});

/* typingAnimation */

var typed = new Typed(".auto-type", {
    strings: [`Developer.`, `Photographer.`],
    typeSpeed: 150,
    backSpeed: 150,
    loop: true
})

