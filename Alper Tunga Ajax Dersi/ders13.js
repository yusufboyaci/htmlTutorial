$(document).ready(function(){
    const btnRed = $("#btn-red");
    const btnChanger = $("#btn-changer");

    //variables
    const nextButton = `<button class="btn btn-warning" id="btn-yellow">Sarı Buton</button>`;
    const newParagraph = `<p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam, voluptas atque laboriosam facere autem veniam ex ad delectus blanditiis consequatur sint placeat culpa perferendis ducimus minima ratione debitis beatae. Alias.</p>`

    btnChanger.click(function(event){
       // btnRed.replaceWith(nextButton);
        btnRed.replaceWith(newParagraph);
    });
});