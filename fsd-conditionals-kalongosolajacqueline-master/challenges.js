/** Helper function code *//** Helper function code */
function problemNumber(number) {
  const problem = "\n%cProblem %d:";
  const cssRules = "color: blue; font-weight: bold";
  console.log(problem, cssRules, number);
}

// Your exercise begins here:

/*
1)
Finish this code so that getDrink is true
when thirsty is true, and getDrink is false
when thirsty is false.

hint to test the code:
console.log(thirsty, " should equal ", getDrink);
*/
const thirsty = true;
let getDrink = null;

if (thirsty === true) {
  getDrink = true;
} else {
  getDrink = false;
}

console.log(thirsty, " should equal ", getDrink);


/*
2)
Change the light variable to "red", then "green",
then "yellow" and see what prints. Now change the
light variable to "purple". What happens?
Change the code so that only "green" says "Go." and 
random words says "Light malfunction". Red should still say 
"Stop!" and yellow should still say "Wait..." after your changes

Hint to test output:
console.log("light is ", light, " so car should ", driveCar);
*/

const light = "red";
let driveCar = null;

// Function to update driveCar based on the light color
function updateDriveCar() {
  if (light === "green") {
    driveCar = "Go.";
  } else if (light === "red") {
    driveCar = "Stop!";
  } else if (light === "yellow") {
    driveCar = "Wait...";
  } else {
    driveCar = "Light malfunction";
  }
}

// Testing the initial state
console.log("light is ", light, " so car should ", driveCar);

// Changing light to "red"
light = "red";
updateDriveCar();
console.log("light is ", light, " so car should ", driveCar);

// Changing light to "green"
light = "green";
updateDriveCar();
console.log("light is ", light, " so car should ", driveCar);

// Changing light to "yellow"
light = "yellow";
updateDriveCar();
console.log("light is ", light, " so car should ", driveCar);

// Changing light to "purple"
light = "purple";
updateDriveCar();
console.log("light is ", light, " so car should ", driveCar);


/*
3)
Write the code for this situation:
If the temperature is colder than
15 degrees, the person should put
a sweater.
*/

let wearSweater = null;
let temperature = null; // Assume this variable holds the temperature value

if (temperature < 15) {
    wearSweater = true;
} else {
    wearSweater = false;
}

// Now you can use the wearSweater variable to determine whether the person should put on a sweater
console.log("Should the person wear a sweater?", wearSweater);




/*
4)
Define a number and check if it odd or even.
*/
// Define a number
let yourNumber = 15; // You can change this to any number you want to check

// Check if the number is odd or even
if (yourNumber % 2 === 0) {
    console.log(yourNumber + " is an even number.");
} else {
    console.log(yourNumber + " is an odd number.");
}

/*
5)
Write the code for this situation:
If the person is vegan, their dietary
restrictions are "no meat or dairy".
If the person is vegetarian, their
dietary restrictions are "no meat".
If the person is neither, their 
dietary restrictions are nothing (null).
*/
const person = "vegan";
let restrictions = null;

if (person === "vegan") {
    restrictions = "no meat or dairy";
} else if (person === "vegetarian") {
    restrictions = "no meat";
}

console.log(`Person: ${person}`);
console.log(`Dietary Restrictions: ${restrictions}`);


/*
6)
Debug the code below. You will need
to change the values of x, y, and z
to figure out where the error is!

text output:
console.log(answer);
*/

const x = 1;
const y = 2;
const z = 3;
let answer = "null";

if (x === y && y === z) {
  answer = "all are equal";
} else if (x === y) {
  answer = "x and y are equal";
} else if (x === z) {
  answer = "x and z are equal";
} else if (y === z) {
  answer = "y and z are equal";
} else {
  answer = "all are different";
}

console.log(answer);

/*
7)
Finish this code! Remove "true" as the
conditional statements and use the
variables eatsMeat and eatsDairy, as
well as the following: &&  !

text output:
console.log(diet);
*/
const eatsMeat = false;
const eatsDairy = false;
let diet = null;

if (!eatsMeat && !eatsDairy) {
  diet = "vegan";
} else if (!eatsMeat && eatsDairy) {
  diet = "vegetarian";
} else {
  diet = "no dietary restrictions";
}

console.log(diet);


/*
8)
Write code for the following situation:
Sofia can drive manual and automatic cars.
Diego only knows how to drive automatic.
Sofia prefers to drive long distances (> 10 km).
Diego prefers to drive short distances.

text output:
console.log("The car is ", car, " and the distance is ", distance, "km, so the driver is: ", driver);
*/
const car = "manual";
let driver = null;
const distance = 12;

if (car === "manual") {
    if (distance > 10) {
        driver = "Sofia";
    } else {
        driver = "Diego";
    }
} else if (car === "automatic") {
    driver = "Sofia";
}

console.log("The car is", car, "and the distance is", distance, "km, so the driver is:", driver);



/*
9)
Finish the code below. Update "canVote" to the following:
- "Input is not a number" if age is not a number
(use "typeof" to do this check - see the MDN docs for info)
- "Legal voting age" if age is at least 18
- "Too young" if younger than 18

text output:
console.log(canVote);
*/
const age = 16;
let canVote = null;

if (typeof age !== 'number') {
    canVote = "Input is not a number";
} else if (age >= 18) {
    canVote = "Legal voting age";
} else {
    canVote = "Too young";
}

console.log(canVote);



/*
10)
Get rid of the nested conditionals in
the code below by considering order of
operations. Also, add in a condition for
temperature between 15 & 30 degrees
(should be "warm")

text output:
console.log("The temp is ", temp, ", so the weather is ", weather);
*/

let temp;
let weather = null;

if (temp < 0) {
  weather = "freezing";
} else if (temp < 15) {
  weather = "chilly";
} else if (temp >= 15 && temp <= 30) {
  weather = "warm";
} else {
  weather = "hot";
}

console.log("The temp is ", temp, ", so the weather is ", weather);


/*
11)
Comment out all of your previous code.
Rewrite problem 3 and 4 using ternary operators.
Rewrite also problem 9 using ternary operators. Do it for these 2 scenarios:
a) you can asume the type of 'age' will be a number, so you don't need to check it.
b) check the type of 'age', as stated in the original problem. You will need to
stack two ternary operators in this case. In your opinion, is this code cleaner
than you original answer on problem 9?
*/

//ternary operators
// problem 3

let wearSweater = temperature < 15 ? true : false;
console.log("Should the person wear a sweater?", wearSweater);

let wearSweater = typeof temperature === 'number' ? (temperature < 15 ? true : false) : null;
console.log("Should the person wear a sweater?", wearSweater);

// promblem 4

let result = yourNumber % 2 === 0 ? yourNumber + " is an even number." : yourNumber + " is an odd number.";
console.log(result);

let result = typeof yourNumber === 'number' ? (yourNumber % 2 === 0 ? yourNumber + " is an even number." : yourNumber + " is an odd number.") : null;
console.log(result);

//promblem 9

let canVote = age >= 18 ? "Legal voting age" : "Too young";
console.log(canVote);

let canVote = typeof age === 'number' ? (age >= 18 ? "Legal voting age" : "Too young") : "Input is not a number";
console.log(canVote);
