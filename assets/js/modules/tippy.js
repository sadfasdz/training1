import tippy from "tippy.js";

const ELEMENTS_SELECTOR = {
  tippyFavorite: "[data-tippy-favorite]",
};

export default function () {
  let btnFavorites = $(ELEMENTS_SELECTOR.tippyFavorite);

  console.log(btnFavorites);
  btnFavorites.each(function (i, btn) {
    const content = btn.dataset.tippyFavorite;

    tippy(btn, {
      content: `<span class="tippy tippy--favorite">${content}</span>`,
      allowHTML: true,
      arrow: false,
      theme: "light",
    });
  });
}
