$(document).ready(function(){
    let button = $(".btn-primary");
    let paragraph = $(".p");
    let clickCount = 0;

    button.mousedown(function(event){
        clickCount++;
        paragraph.html(clickCount);
        switch(event.which){  //mouse un hangi butonu ile tıklanıdğını vermesi için yazdık. Bunu mouse un sadece sol tuşuna basılarak menü açılmasını sağlamak için kullanabiliriz.
            case 1:
                alert("Left click!");
                break;
                case 2:
                    alert("Middle Click!");
                    break;
                    case 3:
                        alert("Right Click!");
                        break;
        }
    });

    // button.click(function(event){
    //     clickCount++;
    //     paragraph.html(clickCount);
    // })
});