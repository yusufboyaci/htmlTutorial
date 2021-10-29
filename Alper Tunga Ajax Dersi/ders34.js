$(document).ready(function () {
  let image = $("#fade-image");
  let txtRange = $("#range-input");
  let btnToggle = $("#btn-toggle");

  let isHided = false;

  btnToggle.click(function () {
    image.fadeToggle();

    //btnToggle.html(`${isHided ? "Gizle" : "Göster"}`);
    
    btnToggle.text(`${isHided ? "Gizle" : "Göster"}`);
    isHided = !isHided;
  });
});
