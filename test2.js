//using jquery to
let height = $("#height");
let weight = $("#weight");
let bminum = $("#bmi-num");

const username = $("#username");

//button
const calculate = $("#calculate");

let bmi = 0;

calculate.click(function calculateBMI() {
  bmi = (weight.val() / (height.val() * height.val())).toFixed(2);
  if (bmi >= 0 && bmi < 18.5) {
    bminum.text(bmi);
    alert(`You are underweight: ${username.val()}`);
  } else if (bmi >= 18.5 && bmi <= 24.9) {
    bminum.text(bmi);
    alert(`You have a normal bmi : ${username.val()}`);
  } else if (bmi >= 25.0 && bmi <= 29.9) {
    bminum.text(bmi);
    alert(`You are overweight: ${username.val()}`);
  } else if (bmi >= 30.0 && bmi <= 39.9) {
    bminum.text(bmi);
    alert(`You are obese: ${username.val()}`);
  } else if (bmi >= 40.0) {
    bminum.text(bmi);
    alert(`You are morbidly obese: ${username.val()}`);
  } else {
    bminum.text(0);
  }
});
