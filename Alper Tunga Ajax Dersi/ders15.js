$(document).ready(function(){
    let myParagraph = $(".p");
    let articleInput = $("#article-input");
    let btnTransfer = $("#btn-transfer");

    btnTransfer.click(function(){
        let paragraphText = myParagraph.text();
        articleInput.text(paragraphText);
    });
    $("#btn-transfer2").click(function(){
        let paragraphText = myParagraph.html();
        articleInput.html(paragraphText);
    })
})