$(document).ready(function(){
    let btnExample = $("#btn-example");

    $(btnExample).on("mouseover",function(){
        btnExample.removeClass("btn-warning");
        btnExample.addClass("btn-primary");
    });
    $(btnExample).on("mouseleave",function(){
        btnExample.removeClass("btn-primary");
        btnExample.addClass("btn-warning");
    })
});