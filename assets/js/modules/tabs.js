const ELEMENTS_SELECTOR = {
  tabs: "[data-tabs]",
  tab: "[data-tab]",
  section: "data-tab-section",
};

const CLASSES = {
  tabsItemActive: "tabs__item--active",
  tabsBlockActive: "tabs__block--active",
};

export default function () {
  $(document).on("click", ELEMENTS_SELECTOR.tab, function () {
    let id = $(this).data("tab");
    let container = $(this).closest(ELEMENTS_SELECTOR.tabs);

    container.find(ELEMENTS_SELECTOR.tab).removeClass(CLASSES.tabsItemActive);
    container
      .find(`[${ELEMENTS_SELECTOR.section}]`)
      .removeClass(CLASSES.tabsBlockActive);

    $(this).addClass(CLASSES.tabsItemActive);

    container
      .find(`[${ELEMENTS_SELECTOR.section}="${id}"]`)
      .addClass(CLASSES.tabsBlockActive);
  });
}
