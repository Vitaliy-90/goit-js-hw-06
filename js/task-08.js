const form = document.querySelector(".login-form");
let dataForm = {};
form.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
  const {
    elements: { email, password },
  } = event.currentTarget;

  if (email.value === "" || password.value === "") {
    return alert("Please fill in all the fields!");
  }
  dataForm.email = email.value;
  dataForm.password = password.value;

  console.log(dataForm);
  event.currentTarget.reset();
}
