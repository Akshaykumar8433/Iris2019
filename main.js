$(window).scroll(function(){
    if($(document).scrollTop() > 250){
        $("nav").addClass("navbar-inverse");
    }
    else{
        $("nav").removeClass("navbar-inverse");
    }
});
$(document).ready(function() {
    $('#nav').localScroll({duration:800});
 });
$(function(){
    $('a[href*="#"]:not([href="#"])').click(function(){
        var target =$(this.hash);
        target = target.length? target : $('[name='+this.hash.slice(1)+']');
        if(target.length){
            $('html, body').animate({
                scrollTop: target.offset().top
            }, 1000);
            return false;
        }
    });
});
$(document).ready(function () {
    $(".inspire,.resonate,.integrate,.succeed").hover(function () {
        $(this).toggleClass("animated rubberBand");
    });
});