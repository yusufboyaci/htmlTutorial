$(document).ready(function () {
  const btnPrimary = $("#btnPrimary1");
  const btnAdvertisement = $("#show-hide");
  const divAdvertisement = $("#reklam");

  btnPrimary.click(function () {
    btnPrimary.toggleClass("btn-primary");
  });
  btnAdvertisement.click(function () {
    divAdvertisement.toggleClass("d-none");
  });
});
