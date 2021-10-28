$(document).ready(function() {
    let colorSelector = $("#color-selector");
    let successAlert = $("#success-alert");
    $(document).on("change", colorSelector,function(){
        successAlert.fadeIn(5000);
    })
})