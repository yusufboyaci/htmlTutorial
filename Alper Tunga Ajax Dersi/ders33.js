$(document).ready(function(){
    let image = $("#fade-image");
    let txtRange = $("#range-input");

    txtRange.change(function(){
        image.fadeTo("slow",`0.${$(this).val()}`);
        //image.fadeTo("slow",`0.${txtRange.val()}`);
    });
});