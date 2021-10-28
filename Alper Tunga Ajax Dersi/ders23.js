$(document).ready(function(){
    let liElements = $("li");
    liElements.hover(hoverStart,hoverEnd);


    function hoverStart(){
        $(this).fadeOut(1000);
    }

    function hoverEnd(){
        $(this).fadeIn(750);
    }
})