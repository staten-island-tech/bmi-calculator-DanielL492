/*//declare and defince function, input output machines
//we can pass in arguements or parameters
function test(mess) {
    console.log(mess);
}
//run the function
test("Hi");

//String ""
const x = "String";
//declaring a variable, defining a variable
test(x);

//Number/Integer
const y = 98;
test(y);

//Boolean true or false
const z = true;
test(z);*/

function getbmi(weight, height) {
  console.log("Your BMI value is: " + (weight / height ** 2) * 10000);
  return (weight / height ** 2) * 10000;
}

let kg = Number(prompt("What's your weight (kgs)?"));
let cm = Number(prompt("What's your height (cm)?"));
getbmi(kg, cm);
let bmi = getbmi(kg, cm);

function calc(bmivalue) {
  if (bmivalue < 18.5) {
    console.log("You're underweight.");
  } else if (bmivalue >= 25) {
    console.log("You're unhealthy.");
  } else {
    console.log("You're healthy.");
  }
}

calc(bmi);
