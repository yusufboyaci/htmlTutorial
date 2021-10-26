$(document).ready(function () {
  const btnPrimary = $(".btn-primary");
  const btnSecondary = $(".btn-secondary");
  const btnWarning = $(".btn-warning");
  const btnDanger = $(".btn-danger");
  const btnSuccess = $(".btn-success");

  let btnPrimaryClicked = false;
  let btnSecondaryClicked = false;

  btnPrimary.click(function () {
    if (btnPrimaryClicked == false) {
      btnPrimary.removeClass("btn-primary");
      btnPrimaryClicked = !btnPrimaryClicked;
    } else {
      btnPrimary.addClass("btn-primary");
      btnPrimaryClicked = !btnPrimaryClicked;
    }
  });

  btnSecondary.click(function () {
    if (btnSecondaryClicked == false) {
      btnSecondary.removeClass("btn-secondary");
      btnSecondaryClicked = !btnSecondaryClicked;
    } else {
      btnSecondary.addClass("btn-secondary");
      btnSecondaryClicked = !btnSecondaryClicked;
    }
  });
});
