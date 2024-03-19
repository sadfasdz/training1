import Inputmask from "inputmask";

const ELEMENTS_SELECTOR = {
  inputMaskPhone: "[data-inputmask-phone]",
  inputMaskEmail: "[data-inputmask-email]",
  inputMaskDate: "[data-inputmask-date]",
};

export default function () {
  Inputmask("+7(999) 999-9999").mask(ELEMENTS_SELECTOR.inputMaskPhone);
  Inputmask(
    "*{1,50}[.*{1,50}][.*{1,50}]@*{1,50}.*{1,20}[.*{1,20}][.*{1,20}]"
  ).mask(ELEMENTS_SELECTOR.inputMaskEmail);
  Inputmask("99/99/9999").mask(ELEMENTS_SELECTOR.inputMaskDate);
}
