$(document).ready(function(){
    let newsLetterForm = $("#newsletter-form");
    let btnSubmit = $("#btn-submit");
    let txtEmail = $("#user-email");
    let h3 = $("h3");


    btnSubmit.click(function(event){
        event.preventDefault();// eğer button type ı submit olursa button a basıldığında sayfa yenilenecek ve kodlarımız çalışmayacak bunu önlemek için " event.preventDefault();" kodu yazıldı.
        if (!txtEmail.length > 0) {
            let alertDiv = createAlert("danger","Please enter a valid e-mail address.");
            let alertDivObject = $(alertDiv);
            alertDivObject.hide();

            h3.before(alertDivObject);

            alertDivObject.slideDown(1000);
            alertDivObject.delay(3000).slideUp(1000);

        
        } else {
            let alertDiv = createAlert("success","You have subscribed successfully.");
            let alertDivObject = $(alertDiv);
            alertDivObject.hide();
            h3.before(alertDivObject);
            //alertDivObject.slideDown(1500);
            //alertDivObject.delay(4000).slideUp(1500);
            alertDivObject.fadeIn(1500).delay(4000).fadeOut(1500);

        }
    });

   function createAlert(alertType,alertText){
       return `<div class="alert alert-${alertType} mt-3" role="alert">${alertText}</div>`;
   } 
});