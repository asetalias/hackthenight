$(document).ready(function(){
    var parallaxContainers = $(".parallax");
    var menu = $("#primaryMenu");
    $(window).on('scroll', function(){
        /** Parallax  
        window.requestAnimationFrame(function(){
            for (var i=0; i<parallaxContainers.length; i++){
                var currentElement = parallaxContainers.eq(i);
                var scrolled = $(window).scrollTop();
                var speed = $(currentElement).attr('data-parallax-speed');
                speed = parseFloat(speed);         
                if(speed == NaN || speed == undefined){
                    speed = 0.3;
                }
                speed *= 1;
                currentElement.css({
                    'transform': 'translate3d(0, ' + scrolled * speed + 'px, 0)'
                });
            }
        });*/
        var scrolled = $(window).scrollTop();
        /** Animated Menu **/
        if(scrolled > menu.height()){
            menu.removeClass('navbar-default');
            menu.addClass('navbar-fixed-theme');
        }else{
            menu.removeClass('navbar-fixed-theme');
            menu.addClass('navbar-default');
        }
    });
});