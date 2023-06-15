const refs = {
  input: document.querySelector("#name-input"),
  output: document.querySelector("#name-output"),
};

const makeName = (event) => {
  if (event.currentTarget.value !== "") {
    return (refs.output.textContent = event.currentTarget.value);
  }

  return (refs.output.textContent = "Anonymous");
};
refs.input.addEventListener("input", makeName);
