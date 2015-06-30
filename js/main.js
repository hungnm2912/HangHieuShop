$(document).ready(function(){

    $( "#menu-content" ).hide();


    $("#menu" ).click(function() {

        // Set the effect type
        var effect = 'slide';

        // Set the options for the effect type chosen
        var options = { direction: 'up' };

        // Set the duration (default: 400 milliseconds)
        var duration = 700;

        $( "#menu-content" ).toggle(effect, options, duration);

        //$( "#menu-content" ).toggle( "ease" );
    });

    var logo = document.getElementById("logo").offsetHeight;
    var item = document.getElementById("item").offsetHeight;
    if(logo >= item){
        max = logo;
    }else{
        max = item;
    }

    document.getElementById("logo").style.height = max + "px";
    document.getElementById("item").style.height = max + "px";
    document.getElementById("menu-area").style.height = max + "px";

    var swiper = new Swiper('.slides', {
        autoplay: 5000,
        pagination: '.swiper-pagination',
        autoplayDisableOnInteraction: false
    });
});
