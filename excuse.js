import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

          //.0               1         2              3            4
let who = ['The dog', 'My grandma', 'The mailman', 'My bird', 'London'];
let action = ['ate', 'peed', 'crushed', 'broke'];
let what = ['my homework', 'my phone', 'the car'];
let when = ['before the class', 'when I was sleeping', 'while I was exercising', 'during my lunch', 'while I was praying'];


function getRandomNumber(a, b) {
  return Math.floor(Math.random() * (b - a) + a);
}

function getRandom(anyArray){
let max = anyArray.length -1;
let min = 0;
console.log(max, min, anyArray);
let random = getRandomNumber(min, max);
return anyArray[random];

}
