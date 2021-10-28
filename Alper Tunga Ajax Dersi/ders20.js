$(document).ready(function(){
    let btnSend = $("#btn-send");
    let btnRemove = $("#btn-remove");

    $(btnSend).on("click",function(){
        alert("Your feedback was sent successfuly");
    });
    btnRemove.click(function(){
        btnSend.off("click");
    })
});