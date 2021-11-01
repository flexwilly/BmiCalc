let height = document.getElementById("height");
let weight = document.getElementById("weight");
let bminum = document.getElementById("bmi-num");
let reset = document.getElementById("reset");

const username = document.getElementById("username");

//button
const calculate = document.getElementById("calculate");

let bmi = 0;
function calculateBMI() {
  bmi = (weight.value / (height.value * height.value)).toFixed(2);
  if (bmi >= 0 && bmi < 18.5) {
    bminum.textContent = bmi;
    alert(`You are underweight: ${username.value}`);
  } else if (bmi >= 18.5 && bmi <= 24.9) {
    bminum.textContent = bmi;
    alert(`You have a normal bmi : ${username.value}`);
  } else if (bmi >= 25.0 && bmi <= 29.9) {
    bminum.textContent = bmi;
    alert(`You are overweight: ${username.value}`);
  } else if (bmi >= 30.0 && bmi <= 39.9) {
    bminum.textContent = bmi;
    alert(`You are obese: ${username.value}`);
  } else if (bmi >= 40.0) {
    bminum.textContent = bmi;
    alert(`You are morbidly obese: ${username.value}`);
  } else {
    bminum.textContent = 0;
  }
}

calculate.addEventListener("click", calculateBMI);

//reset button JS
reset.addEventListener("click", function () {
  height.value = " ";
  weight.value = " ";
  username.value = " ";
});
