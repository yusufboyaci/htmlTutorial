$(document).ready(function(){
    let paragraph = $(".h3");
    let coloredDiv = $("#colored-div");
    let coloredDivTitle = $("#colored-div-title");
    $(document).on("mousemove",function(event){
        //let x = event.pageX;
        paragraph.html(`x:${event.pageX} Y:${event.pageY}`);
        if (event.pageX >= event.pageY) {
            coloredDiv.removeClass("bg-danger").addClass("bg-warning");
            coloredDivTitle.text("X ekseni daha büyüktür.");
        }else{
            coloredDiv.removeClass("bg-warning").addClass("bg-danger");
            coloredDivTitle.text("Y ekseni daha büyüktür.");
        }
    });
});