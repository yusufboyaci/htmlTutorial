$(document).ready(function() {
    //Buttons
const btnClean = $("#btn-clean-paragraph");
const btnCleanPlaceHolder = $("#btn-clean-placeholder-div");
//Paragraphs
const myParagraph = $(".p");
//Divs
const placeHolderDiv = $("#div-placeholder");


    btnClean.click(function(){
        myParagraph.empty();
    });
    btnCleanPlaceHolder.click(function() {
        placeHolderDiv.empty();
    });
    // btnCleanPlaceHolder.click(function() {   
    //     $('body').empty();
    // })
});