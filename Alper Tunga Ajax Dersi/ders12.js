$(document).ready(function () {
  let firstNavItem = $(".navbar-nav .nav-item:first");
  let lastNavItem = $(".navbar-nav .nav-item:last");

  const btnFirstPlace = $(".btn-primary");
  const btnLastPlace = $(".btn-warning");

  const txtLinkTitle = $("#link-title");
  const txtLinkUrl = $("#link-url");

  btnFirstPlace.click(function (event) {
    event.preventDefault();
    const linkTitle = txtLinkTitle.val();
    const linkUrl = txtLinkUrl.val();
    firstNavItem.before(`<li class="nav-item">
        <a class="nav-link" aria-current="page" href="${linkUrl}">${linkTitle}</a>
      </li>`);
    firstNavItem = $(".navbar-nav .nav-item:first");
    lastNavItem = $(".navbar-nav .nav-item:last");
  });
  btnLastPlace.click(function (event) {
    event.preventDefault();
    let linkTitle = txtLinkTitle.val();
    let linkUrl = txtLinkUrl.val();
    lastNavItem.after(`<li class="nav-item">
        <a class="nav-link" aria-current="page" href="${linkUrl}">${linkTitle}</a>
      </li>`);
    firstNavItem = $(".navbar-nav .nav-item:first");
    lastNavItem = $(".navbar-nav .nav-item:last");
  });
});
