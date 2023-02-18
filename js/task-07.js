const inputSize = document.querySelector("#font-size-control");
console.log(inputSize);
const textSize = document.querySelector("span#text");
console.log(inputSize);

inputSize.addEventListener("change", (event) => {
  textSize.style.fontSize = `${event.currentTarget.value}px`;
});
