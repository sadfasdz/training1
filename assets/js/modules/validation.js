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
        required: "Имя обязательно должно быть заполнено",
      },
      surname: {
        required: "Фамилия обязательно должно быть заполнена",
      },
      patronymic: {
        required: "Отчество обязательно должно быть заполнено",
      },
      specialization: {
        required: "Пожалуйcта выберите один из вариантов",
      },
      phone1: {
        required: "телефон обязательно должно быть заполнен",
      },
      email1: {
        required: "Email обязательно должно быть заполнено",
        email: "Пожалуйcта введите корректный Email",
      },
      email2: {
        email: "Пожалуйcта введите корректный Email",
      },
    },
  });
}
