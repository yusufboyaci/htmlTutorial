$(document).ready(function () {
  const btnPrimary = $("#btnPrimary1");
  const btnSecondary = $("#btnSecondary");
  const btnPrimary2 = $("#btnPrimary2");
  const btnDanger = $(".btn-danger");
  const btnPrimary3 = $("#btnPrimary3");
  const btnApply = $("#btnApply");

  const buttons = $(".btn").toArray();

  btnApply.click(function () {
    $.each(buttons, function (index, value) {
      const hasBtnPrimary = $(this).hasClass("btn-primary");// "hasClass" fonksiyonu seçili elementde "btn-primary" class ı var mı yok mu bunu söylüyor.Bool değeri dönüyor.
      if (hasBtnPrimary) {
        $(this).removeClass("btn btn-primary");
      } else {
      }
    });
  });
});
