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

let kg = Number(prompt("What's your weight (kgs)?"));
let cm = Number(prompt("What's your height (cm)?"));

function bmi(height, weight) {
    console.log((height / weight**2) * 10000);
    return bmi();
}

let bm = bmi();

bmi(kg, cm);

function calc(bm) {
    if (bm < 18.5) {
        console.log("You're underweight.")
    }
    else {
        if (bm > 25) {
            console.log("You're unhealthy.")
        }
        else {
            console.log("You're Healthy")
        }
    }

}

calc(bm);

