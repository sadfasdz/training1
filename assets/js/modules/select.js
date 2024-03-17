import select2 from "select2";

const ELEMENTS_SELECTOR = {
  selectBox: "[data-select]",
  selectControl: "[data-select-control]",
};

export default function () {
  const baseOtions = {};

  $(ELEMENTS_SELECTOR.selectControl).each(function (i, select) {
    const selectBox = $(select).closest(ELEMENTS_SELECTOR.selectBox);

    const placeholder = $(select).data("placeholder");

    const currentOption = {
      baseOtions,
      placeholder,
      dropdownParent: selectBox,
    };

    $(select).select2(currentOption);
  });
}
