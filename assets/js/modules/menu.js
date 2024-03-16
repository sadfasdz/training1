const ELEMENTS_SELECTOR = {
  page: "[data-page]",
  menu: "[data-menu]",
  menuBtn: "[data-menu-btn]",
  btnClose: "[data-close]",
};

const CLASSES = {
  menuAcive: "menu--active",
  pageLock: "page--lock",
};

export default function () {
  let page = $(document).find(ELEMENTS_SELECTOR.page);
  let container = $(document).find(ELEMENTS_SELECTOR.menu);

  $(document).on("click", ELEMENTS_SELECTOR.menuBtn, function () {
    page.addClass(CLASSES.pageLock);
    container.addClass(CLASSES.menuAcive);
  });

  $(document).on("click", ELEMENTS_SELECTOR.btnClose, function () {
    page.removeClass(CLASSES.pageLock);
    container.removeClass(CLASSES.menuAcive);
  });

  $(document).on("click", ELEMENTS_SELECTOR.menu, function (e) {
    if (container.has(e.target).length === 0) {
      page.removeClass(CLASSES.pageLock);
      container.removeClass(CLASSES.menuAcive);
    }
  });
}
