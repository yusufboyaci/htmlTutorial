$(document).ready(function(){
    let btnSend = $("#btn-send");
    let btnSendAndClose = $("#btn-send-and-close");
    let frmFeedBack = $("#form-feedback");

    btnSend.on("click",function(){
        alert("Your feedback was sent successfully");
    });
    btnSendAndClose.click(function(){
        btnSend.trigger("click");/* burası btnSend.on("click",function(){
            alert("Your feedback was sent successfully");
        }); işlemlerini yapıyor.*/
        frmFeedBack.fadeOut(3000);
    });
});