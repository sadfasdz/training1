import jqueryValidate from "jquery-validation";

const ELEMENTS_SELECTOR = {
  profileEditorForm: "[data-profileEditor-form]",
  selectControl: "[data-select-control]",
};

export default function () {
  $(ELEMENTS_SELECTOR.profileEditorForm).validate({
    errorClass: "input__error",
    rules: {
      name: {
        required: true,
      },
      surname: {
        required: true,
      },
      patronymic: {
        required: true,
      },
      specialization: {
        required: true,
      },
      phone1: {
        required: true,
      },
      email1: {
        required: true,
        email: true,
      },
      email2: {
        email: true,
      },
    },
    messages: {
      name: {
        required: "",
      },
      surname: {
        required: "",
      },
      patronymic: {
        required: "",
      },
      specialization: {
        required: "",
      },
      phone1: {
        required: "",
      },
      email1: {
        required: "",
        email: "Пожалуйcта введите корректный Email",
      },
      email2: {
        email: "Пожалуйcта введите корректный Email",
      },
    },
  });

  $(".select__control").on("change", function () {
    $(this)
      .closest(".select")
      .find(".select2-selection--single")
      .addClass("valid");

    $(this).addClass("valid");
  });
}
