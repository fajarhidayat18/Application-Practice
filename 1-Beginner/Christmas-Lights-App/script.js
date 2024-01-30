const btnPower = document.getElementById("__btn_power");
const lights = document.querySelectorAll(".__light");
const textLights = document.querySelector(".__text");

btnPower.addEventListener("click", () => {
  let power = "OFF";
  for (let i = 0; i < lights.length; i++) {
    lights[i].classList.toggle("active");

    lights[i].classList.contains("active") ? (power = "ON") : (power = "OFF");
  }
  btnPower.innerText = power;
  textLights.classList.toggle("active");
});
