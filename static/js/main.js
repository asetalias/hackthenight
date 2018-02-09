/* Temporary Disable Countdown
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
*/

$(document).ready(function(e){
    var homeRegBtn = $("#home-register-btn");
    var homeRegisterHelpMsg = $("#register-help-msg");
    var resgisterTry = 0;
    homeRegBtn.on("mouseenter click",function(e){
        $(this).html("If You Can");
        if($(this).attr("data-loc") == "0" || $(this).attr("data-loc") == "1"){
            $(this).css("transform", "translatex(-100%)");
            $(this).attr("data-loc", "-1");
        }else{
            $(this).attr("data-loc", "1");
            $(this).css("transform", "translatex(100%)");
        }
        resgisterTry += 1;
        setRegisterHelpMsg();
    }).on("mouseleave", function(e){
        console.log("Check");
        setTimeout(function(){
            homeRegBtn.html("Register Now");
        }, 500);
    });
    function resetRegBtn(){
        homeRegBtn.off("mouseenter click mouseleave");
        homeRegBtn.css("transform", "translatex(0)");
        homeRegBtn.attr("data-loc", "0");
        homeRegBtn.html("Register Now");
        setTimeout(function(){homeRegisterHelpMsg.fadeOut();}, 500);
    }
    function setRegisterHelpMsg(){
        homeRegisterHelpMsg.fadeOut();
        if(resgisterTry > 2){
            homeRegisterHelpMsg.html("You can do better than that!");
        }
        if(resgisterTry > 4){
            homeRegisterHelpMsg.html("Oh! Come On Now!");
        }
        if(resgisterTry > 6){
            homeRegisterHelpMsg.html("Try Inspect Element?");
        }
        if(resgisterTry > 8){
            homeRegisterHelpMsg.html("All Right! Reset!");
            resetRegBtn();
        }
        homeRegisterHelpMsg.fadeIn();
    }
});