$(document).ready(function(){
    let txtQuantity = $("#txt-quantity");
    let quantity = 0;

    $(document).keypress(function(event){
        if (event.key === "w") 
        {
            quantity++;
            if (quantity > 100) quantity = 100;

        } else if(event.key === "s") {
            quantity--;
            if (quantity < 0) quantity = 0;
        }
        txtQuantity.val(`%${quantity}`);
    });
});