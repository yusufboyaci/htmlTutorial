$(document).ready(function(){
    let txtMessage = $("#user-message");
    let txtCharCount = $("#char-count");
    let saveButton = $("#save-button");

    let charLimit = 100;
    let charCount = 0;

    txtMessage.keydown(function(){
        charCount = $(this).val().length;
        txtCharCount.val(`100/${charCount}`);
    });
    txtMessage.keyup(function(event){
        if (event.target.value.length > charLimit) { /*"event.target.value.length" ile "$(this).val().length" aynı sonucu verir. */ 
            event.target.value = event.target.value.substring(0,(charLimit-1));
            return;
        }
    });

});