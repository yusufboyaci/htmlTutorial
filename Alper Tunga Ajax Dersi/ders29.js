$(document).ready(function(){
    let formControls = $(".form-control");
    let saveButton = $("#save-button");
    saveButton.click(function(){
        alert("Form başarıyla gönderilmiştir.")
    });
    formControls.keydown(function(event){
        let name = event.key;
        if (name === "Enter") {
            saveButton.trigger("click");
        } else {
            console.log(name);
        }
    })
})