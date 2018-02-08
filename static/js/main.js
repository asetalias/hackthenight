//Init variables

var kickoff = Date.parse(new Date('2018-03-09T15:00:00+0530'));  //Target date-time parsed in ms
var day_angle = 2*Math.PI/30;                                    //Angle for unit day
var hr_angle = 2*Math.PI/24;                                     //Angle for unit hour
var time_angle = 2*Math.PI/60;                                   //Angle for unit time
var r=45;                                                        //Arc radius
var i,step;

//Time counter elements
var d = document.querySelector('#ddc');
var h = document.querySelector('#hhc');
var m = document.querySelector('#mmc');
var s = document.querySelector('#ssc');

//Canvas contexts
var c = [document.querySelector('#ddv'),document.querySelector('#hhv'),document.querySelector('#mmv'),
    document.querySelector('#ssv')];
var ctx=[c[0].getContext('2d'),c[1].getContext('2d'),c[2].getContext('2d'),c[3].getContext('2d')];

//Init transforms and styles for each canvas
for(i=0;i<4;i++)
{
    ctx[i].translate(0,c[i].height);
    ctx[i].rotate(-Math.PI/2);
    ctx[i].lineWidth=5;
    ctx[i].lineCap='round';
    ctx[i].strokeStyle='#00F8BA';
    ctx[i].imageSmoothingEnabled=true;
}



//Time calculator
function getTime(start){
    var t = (start - Date.parse(new Date()))/1000;
    var ss = Math.floor(t % 60);
    var mm = Math.floor((t / 60) % 60);
    var hh = Math.floor(((t/3600) % 24));
    var dd = Math.floor(t/86400);
    return {
        'time': t,
        'days': dd,
        'hrs': hh,
        'mins': mm,
        'secs': ss
    };
}

//Countdown function
function countdown(){
    for(i=0;i<4;i++)
        ctx[i].clearRect(0,0,c[i].width,c[i].height);
    var t = getTime(kickoff);
    d.innerHTML = t.days.toString();
    h.innerHTML = t.hrs.toString();
    m.innerHTML = t.mins.toString();
    s.innerHTML = t.secs.toString();

    for(var i=0;i<4;i++)
        ctx[i].beginPath();

    ctx[0].arc(c[0].width/2,c[0].height/2,r,0,t.days*day_angle);
    ctx[0].stroke();
    ctx[1].arc(c[1].width/2,c[1].height/2,r,0,t.hrs*hr_angle);
    ctx[1].stroke();
    ctx[2].arc(c[2].width/2,c[2].height/2,r,0,t.mins*time_angle);
    ctx[2].stroke();
    ctx[3].arc(c[3].width/2,c[3].height/2,r,0,t.secs*time_angle);
    ctx[3].stroke();
    if(t.time <= 0) {
        clearInterval(step);
        document.removeChild(document.querySelector('#timer-box'));
    }
}

//Start countdown when completed page load
$(window).on("load",function () {
    step = setInterval(countdown,1000);
});

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