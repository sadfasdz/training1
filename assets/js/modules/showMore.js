const ELEMENTS_SELECTOR = {
  moreText: "[data-more]",
  moreBtn: "[data-more-btn]",
};

const CLASSES = {
  infoMoreBtnActive: "info__more-btn--active",
};

export default function () {
  const btns = $(ELEMENTS_SELECTOR.moreBtn);
  const texts = $(ELEMENTS_SELECTOR.moreText);

  btns.each((i, btn) => {
    $(btn).on("click", function () {
      const dataValue = $(this).data("more-btn");

      $(this).toggleClass(CLASSES.infoMoreBtnActive);

      texts.each((i, text) => {
        if (dataValue === $(text).data("more")) {
          $(text).slideToggle();
        }
      });
    });
  });
}
