const form = document.getElementById("form");
const returnDecimal = document.getElementById("returnDecimal");
const button = document.getElementById("button");
const input = document.getElementById("input");

const bin2Dec = (value) => {
  const arr = Array.from(value, Number);

  let total = 0;
  let numbers = [];

  for (let i = 0; i < arr.length; i++) {
    const element = arr[i] * Math.pow(2, arr.length - i - 1);
    numbers.push(element);
  }
  for (let i = 0; i < numbers.length; i++) {
    total += numbers[i];
  }

  return total;
};

form.addEventListener("submit", (e) => {
  e.preventDefault();

  returnDecimal.classList.add("show");
  returnDecimal.innerHTML = bin2Dec(input.value);

  input.classList.add("disabled");
  button.setAttribute("type", "button");
  button.innerText = "clear";
});

button.addEventListener("click", (e) => {
  if (button.getAttribute("type") == "button") {
    input.classList.remove("disabled");
    returnDecimal.classList.remove("show");

    button.setAttribute("type", "submit");
    input.value = "";
    button.innerText = "Convert binner";
  }
});
