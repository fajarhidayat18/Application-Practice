const form = document.getElementById("form");
const returnDecimal = document.getElementById("returnDecimal");
const button = document.getElementById("button");
const input = document.getElementById("input");

const bin2Dec = (value) => {
  let total = 0;

  for (let i = 0; i < value.length; i++) {
    const digit = Number(value[i]);
    total += digit * 2 ** (value.length - i - 1);
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
