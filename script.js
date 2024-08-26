 //            chapter 12-13

12.1

let character = "1";
let s = character.charCodeAt();
console.log(s);

12.2

let num1 = +prompt("Please Enter First number");
let num2 = Number(prompt("Please Enter Second number"));
if (num1 > num2) {
  alert(`${num1} is greater than ${num2}`);
} else if (num1 === num2) {
  alert(`Both ${num1} and ${num2} are equal`);
} else {
  alert(`${num2} is greater than ${num1}`);
}

//12.3

let inputNumber = prompt("Please Enter a Positive or Negative number.");
let asciiValue = inputNumber.charCodeAt();
if (asciiValue >= 49 && asciiValue <= 57) {
  alert(`${inputNumber} is a positive number`);
} else if (asciiValue === 48) {
  alert(`${inputNumber} is neither positive nor negative`);
} else if (asciiValue === 45) {
  alert(`${inputNumber} is a negative number`);
} else {
  alert(`Please Enter a valid Number`);
}
//12.4

let alphabet = prompt("Please enter a single character (A - Z) or (a - z)");
let asciivalOfAplhabet = alphabet.charCodeAt();
if (alphabet.length > 1) {
  alert(`Please enter a single character`);
}
else {
  if (
    asciivalOfAplhabet === 65 ||
    asciivalOfAplhabet === 69 ||
    asciivalOfAplhabet === 73 ||
    asciivalOfAplhabet === 79 ||
    asciivalOfAplhabet === 85 ||
    asciivalOfAplhabet === 97 ||
    asciivalOfAplhabet === 101 ||
    asciivalOfAplhabet === 105 ||
    asciivalOfAplhabet === 111 ||
    asciivalOfAplhabet === 117
  ) {
    alert(`${alphabet} is a vowel character : TRUE`);
  } else {
    alert(`${alphabet} is a consonant character : FALSE`);
  }
}

 //12.5

let password = "@Hitachi1230987@";
let passFromUser = prompt("Please Enter a Password");
if (passFromUser.length === 0) {
  alert(`Please Enter your Password`);
} else {
  if (passFromUser === password) {
    alert(`Correct ! The Password you entered matches the original Password`);
  } else {
    alert("Incorrect Password");
  }
}

//12.6


var greeting;
var hour = 13;
if (hour<18){
    greeting = "Good day";
}else{
    greeting = "Good evening";
}


