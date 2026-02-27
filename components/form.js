export default function init() {
  const formEl = document.querySelector(".form__content");

  const inputName = formEl.querySelector("#name");
  const inputDate = formEl.querySelector("#date");
  const inputEmail = formEl.querySelector("#email");

  const checkboxButton = formEl.querySelector(".form__checkbox-button");
  const submitButtonForm = formEl.querySelector(".form__submit-button");

  let spanNameValidation = document.createElement("span");
  inputName.after(spanNameValidation);

  inputName.addEventListener("input", () => {
    const nameIsValid = inputName.checkValidity();

    if (!nameIsValid) {
      spanNameValidation.textContent =
        "The name must contain between 5 and 50 characters.";
      spanNameValidation.classList.add("span-class");
    } else {
      spanNameValidation.textContent = "";
      spanNameValidation.classList.remove("span-class");
    }
  });

  let spanDateValidation = document.createElement("span");
  inputDate.after(spanDateValidation);

  inputDate.addEventListener("input", () => {
    const dateIsValid = inputDate.checkValidity();

    if (!dateIsValid) {
      spanDateValidation.textContent = "Minimum date 01/01/1910";
      spanDateValidation.classList.add("span-class");
    } else {
      spanDateValidation.textContent = "";
      spanDateValidation.classList.remove("span-class");
    }
  });

  let spanEmailValidation = document.createElement("span");
  inputEmail.after(spanEmailValidation);

  inputEmail.addEventListener("input", () => {
    const emailIsValid = inputEmail.checkValidity();

    if (!emailIsValid) {
      spanEmailValidation.textContent =
        "Maximum 254 characters, including @ and a valid email address.";
      spanEmailValidation.classList.add("span-class");
    } else {
      spanEmailValidation.textContent = "";
      spanEmailValidation.classList.remove("span-class");
    }
  });

  let spanCheckboxValidation = document.createElement("span");
  checkboxButton.after(spanCheckboxValidation);

  function checkBoxValidation() {
    if (!checkboxButton.checked) {
      checkboxButton.setCustomValidity("required");
      spanCheckboxValidation.textContent = "This field is required.";
      spanCheckboxValidation.classList.add("span-class");
    } else {
      checkboxButton.setCustomValidity("");
      spanCheckboxValidation.textContent = "";
      spanCheckboxValidation.classList.remove("span-class");
    }
  }

  checkboxButton.addEventListener("change", checkBoxValidation);

  submitButtonForm.disabled = true;
  submitButtonForm.classList.add("sub-button-is-off");

  function isFormInvalid() {
    return !formEl.checkValidity();
  }

  formEl.addEventListener("input", () => {
    submitButtonForm.disabled = !formEl.checkValidity();
    if (submitButtonForm.disabled) {
      submitButtonForm.classList.remove("sub-button-is-on");
      submitButtonForm.classList.add("sub-button-is-off");
    } else {
      submitButtonForm.classList.remove("sub-button-is-off");
      submitButtonForm.classList.add("sub-button-is-on");
    }
  });

  formEl.addEventListener("change", () => {
    submitButtonForm.disabled = isFormInvalid();
    if (submitButtonForm.disabled) {
      submitButtonForm.classList.remove("sub-button-is-on");
      submitButtonForm.classList.add("sub-button-is-off");
    } else {
      submitButtonForm.classList.remove("sub-button-is-off");
      submitButtonForm.classList.add("sub-button-is-on");
    }
  });

  formEl.addEventListener("submit", (event) => {
    event.preventDefault();
    checkBoxValidation();

    if (!formEl.checkValidity()) {
      return;
    } else {
      formEl.reset();

      submitButtonForm.disabled = true;
      submitButtonForm.classList.remove("sub-button-is-on");
      submitButtonForm.classList.add("sub-button-is-off");

      spanNameValidation.textContent = "";
      spanDateValidation.textContent = "";
      spanEmailValidation.textContent = "";
      spanCheckboxValidation.textContent = "";
    }
  });
}
