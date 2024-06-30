/** Lab2.1
* Get input from user about height(m) and weight(kg) then calculate BMI
* Underweight = <18.5
* Normal weight = 18.5 – 24.9
* Overweight = 25–29.9
* Obesity = BMI of 30 or greater
* BMI = weight / (height x height)
 */
const readline = require('readline-sync');
let weight = Number(readline.question('Your weight: '));
let height = Number(readline.question('Your height: '));
let BMI = weight/(height * height);

if(BMI < 18.5){
    console.log("Underweight");
} else if(BMI <= 24.9 ){
    console.log("Normal");
} else if (BMI <= 29.9){
    console.log("Overweight");
} else{
    console.log("Obesity");
}

/** Lab 2.2
 * Allow user to input a number, print out it’s an odd or even number
 */
let returnedValue = checkNumber();
function checkNumber(){
    return 1;}
    {
    if(returnedValue % 2 == 0){
        console.log("it’s an even number");
    }else{
        console.log("it’s an odd number");
    }
}

/** Lab2.3
 * Lab 2.1 + Suggest user to increase/decrease weight
 */
const readline = require('readline-sync');
let weight = Number(readline.question('Your weight: '));
let height = Number(readline.question('Your height: '));
let BMI = weight/(height * height);

if(BMI < 18.5){
    console.log("Underweight. You may need to gain some weight for better health");
} else if(BMI <= 24.9 ){
    console.log("Normal. Keep maintaining your current lifestyle");
} else if (BMI <= 29.9){
    console.log("Overweight. You might consider losing some weight for better health");
} else{
    console.log("Obesity. It's advisable to lose weight for improved health");
}
