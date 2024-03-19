const ELEMENTS_SELECTOR = {
  cotent: "[data-select-content]",
  select: "[data-select-modal]",
};

export default function () {
  let select = $(document).find(ELEMENTS_SELECTOR.select);
  let contents = $(document).find(ELEMENTS_SELECTOR.cotent);

  $(select).change(function () {
    $(contents).each((i, block) => {
      $(block).hide();
      if ($(block).data("select-content") === $(this).val()) {
        $(block).show();
      }
    });
  });
}
