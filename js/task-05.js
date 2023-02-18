const textInput = document.querySelector("#name-input");
const span = document.querySelector("#name-output");

span.textContent = "Anonymous";

textInput.addEventListener("input", (event) => {
  span.textContent = event.currentTarget.value;

  if (event.currentTarget.value === "") {
    span.textContent = "Anonymous";
  }
});
