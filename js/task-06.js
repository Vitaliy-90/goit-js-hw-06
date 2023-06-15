const input = document.querySelector("#validation-input");

const inputValid = (event) => {
  if (
    event.currentTarget.value.length ===
    Number(input.getAttribute("data-length"))
  ) {
    input.classList.remove("invalid");
    input.classList.add("valid");
  } else {
    input.classList.remove("valid");
    input.classList.add("invalid");
  }
};

input.addEventListener("blur", inputValid);
