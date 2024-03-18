import tippy from "tippy.js";

const ELEMENTS_SELECTOR = {
  tippyFavorite: "[data-tippy-favorite]",
};

export default function () {
  let btnFavorites = $(ELEMENTS_SELECTOR.tippyFavorite);

  btnFavorites.each(function (i, btn) {
    const content = btn.dataset.tippyFavorite;

    tippy(btn, {
      content: content,
      arrow: false,
      theme: "light",
    });
  });
}
