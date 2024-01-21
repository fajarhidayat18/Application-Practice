const result = document.querySelector(".__result_calculator_new_number");
const resultContain = document.querySelector(
  ".__result_calculator_last_number_or_preceding_operation"
);
const button = document.querySelectorAll(".__button_input");

for (const btn of button) {
  btn.addEventListener("click", (e) => {
    let resultCalc = resultContain.textContent;

    // membersihkan kalkulator
    if (e.target.id == "AC") {
      result.innerHTML = "";
      resultContain.innerHTML = "";
      return;
    }
    // akhiri kalkulasi
    if (e.target.id == "=") {
      result.innerHTML = calculateExpression(resultCalc);
      resultContain.innerHTML = "";
      return;
    }
    // tambahkan angka baru yang akan di kalkulasi
    result.innerHTML += e.target.id;

    // lakukan kalkulasi jika tombol operator aritmatika ditekan
    if (
      e.target.id === "+" ||
      e.target.id === "-" ||
      e.target.id === "*" ||
      e.target.id === "/"
    ) {
      result.innerHTML = "";
      if (
        resultCalc.includes("+") ||
        resultCalc.includes("-") ||
        resultCalc.includes("*") ||
        resultCalc.includes("/")
      ) {
        console.log();
        resultContain.innerHTML = calculateExpression(resultCalc);
      }
    }

    // tambahkan angka dan atau operator matematika ke dalam operasi aritmatika
    resultContain.innerHTML += e.target.id;

    // menambahkan koma(,) dalam kasus ini titik(.) jika angka di awal adalah 0
    if (result.textContent === "0" && e.target.id === "0") {
      result.innerHTML += ".";
      resultContain.innerHTML += ".";
    }
  });
}

// fungsi operasi aritmatika
function calculateExpression(expression) {
  const operators = expression.match(/[\+\-\*\/]/g);
  const numbers = expression.split(/[\+\-\*\/]/).map(Number);

  let result = numbers[0];

  for (let i = 0; i < operators.length; i++) {
    switch (operators[i]) {
      case "+":
        result += numbers[i + 1];
        break;
      case "-":
        result -= numbers[i + 1];
        break;
      case "*":
        result *= numbers[i + 1];
        break;
      case "/":
        result /= numbers[i + 1];
        break;
      default:
        break;
    }
  }

  return result;
}
