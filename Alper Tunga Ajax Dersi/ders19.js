$(document).ready(function() {
    const btnSend = $("#btn-send");

    $(btnSend).one("click",function(){
        alert("Your feedback was sent successfully")
    })

})