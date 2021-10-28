$(document).ready(function(){
    let txtFirstName = $("#txtFirstName");
    let txtLastName = $("#txtLastName");

    txtFirstName.mouseover(function(){
        txtFirstName.css("border-color","cyan");

    });
    txtFirstName.mouseout(function(){
        txtFirstName.css("border-color","lightgray");
    });

    txtLastName.mouseover(function(){
        txtLastName.css("border-color","green");

    });
    txtLastName.mouseout(function(){
        txtLastName.css("border-color","lightgray");
    });
});