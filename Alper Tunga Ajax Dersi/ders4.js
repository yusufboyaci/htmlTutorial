$(document).ready(function() {
 // Inputs
    const backgroundColorInput = $("#backgroundColorSelector");
    const textColorInput = $('#textColorSelector');
    const tableRowTypeInput = $("#tableRowTypeSelector"); 
    const btnColorize = $(".btn-primary")
//BtnColorize Click Events
    btnColorize.click(function(){
        let backgroundColor = backgroundColorInput.val();
        let textColor = textColorInput.val();
       
       
       
        //$(tr:odd) veya $(tr:even)
        let tableRows = $(`tr:${tableRowTypeInput.val() ? tableRowTypeInput.val() : 'odd'}`);

        tableRows.css('background-color',backgroundColor);
        tableRows.css('color',textColor);
    });
});