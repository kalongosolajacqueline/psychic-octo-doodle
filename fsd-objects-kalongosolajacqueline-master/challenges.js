/*------------------
1)
Finish creating the object below.
Add three more keys and values!
------------------*/
// Original object
const person = {
  name: "Sofia",
  age: 20
};

// Adding three more keys and values
person.gender = "Female";
person.location = "Cityville";
person.hobbies = ["Reading", "Painting", "Traveling"];
person["city"] = "Paris"

// Displaying the updated object
console.log(person);

/*------------------
2)
Access the name value from
the person object.

Hint: you may use either dot notation or
bracket notation. 
------------------*/
// Assuming the person object is defined as follows:
const person = {
  name: "John Doe",
  age: 30,
  occupation: "Engineer"
};

// Using dot notation:
console.log("The person's name is:", person.name);

// Using bracket notation:
console.log("The person's name is:", person['name']);

/*------------------
3)
Update the person's name to
"Marco". Don"t change the original
object– do an update by reassigning
the value. If you do this correctly,
the printed statement will be true.
------------------*/

const person = {
  name: "John",
  age: 30,
  occupation: "Engineer"
};

// Reassigning the value of the name property
person.name = "Marco";

// Checking if the update was successful
console.log("The person's name has been updated:", (person.name === "Marco"));



//Fix the statement so that it prints
//what is expected!

const book = {
  isbn: "9781593275846",
  title: "Eloquent JavaScript, Second Edition",
  subtitle: "A Modern Introduction to Programming",
  author: "Marijn Haverbeke",
  published: "2014-12-14T00:00:00.000Z",
  publisher: "No Starch Press",
  pages: 472,
  description: "JavaScript lies at the heart of almost every modern web application, from social apps to the newest browser-based games. Though simple for beginners to pick up and play with, JavaScript is a flexible, complex language that you can use to build full-scale applications.",
  website: "http://eloquentjavascript.net/"
};

console.log("The book " + book.title + " was written by " + book.author + " and is " + book.pages + " pages.");

 
// Time to learn something new! There"s a new way of
//writing a string– it is called a template literal. 
//You can learn more about it here:
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals

 //Encapsulate the entire string in backticks: `` //Anytime you want to add JavaScript (or a variable name),
//Everything else is assumed to be a string!

//Finish filling out the statement below. 
//rom now, on we will be switching between template literals
//and quotations for console.logs.


const book = {
  isbn: "9781593275846",
  title: "Eloquent JavaScript, Second Edition",
  subtitle: "A Modern Introduction to Programming",
  author: "Marijn Haverbeke",
  published: "2014-12-14T00:00:00.000Z",
  publisher: "No Starch Press",
  pages: 472,
  description: "JavaScript lies at the heart of almost every modern web application, from social apps to the newest browser-based games. Though simple for beginners to pick up and play with, JavaScript is a flexible, complex language that you can use to build full-scale applications.",
  website: "http://eloquentjavascript.net/"
};

console.log(`The book ${book.title} was written by ${book.author} and is ${book.pages} pages.`);


/*------------------
6)
Fix the statement so that it prints
what is expected! You may use dot notation
or bracket notation– look back at the slides
if you forgot how to access values from 
nested objects.
------------------*/


// Define a user object with nested structure
let user = {
  id: 101,
  email: "sofia@dev.com",
  personalInfo: {
    name: "Sofia",
    address: {
      line1: "Carrer de CodeOp",
      line2: "42",
      city: "Barcelona",
      country: "Spain"
    }
  }
}

// Destructure nested objects to access values
let { personalInfo: { name, address: { line1, line2, city, country } } } = user;

// Print a formatted string using the extracted values
console.log(`${name} lives at ${line1} ${line2}, ${city}, ${country}.`);


/*------------------
7)
Update the user's email and address
so that the console.log statement
prints true!

The new email should be "sofia@prod.com"
and the new city should be "Madrid".
------------------*/

let user = {
  id: 101,
  email: "sofia@dev.com",
  personalInfo: {
    name: "Sofia",
    address: {
      line1: "Carrer de CodeOp",
      line2: "42",
      city: "Barcelona",
      country: "Spain"
    }
  }
};

// Update email and address
user.email = "sofia@prod.com";
user.personalInfo.address.city = "Madrid";

// Check if the updates are reflected
console.log("The person's name has been updated:", (user.email === "sofia@prod.com") && (user.personalInfo.address.city === "Madrid"));



/*------------------
8)
Create a new object from scratch.
Name this variable "animal".
Then, choose an animal, and describe it–
include things like color, type,
food, etc. Make at least one nested object.
------------------*/

// Create the "animal" object
const animal = {
  type: "Mammal",
  species: "Giant Panda",
  color: "Black and White",
  size: "Medium",
  diet: ["Bamboo", "Fruits", "Vegetables"],
  habitat: {
    location: "Eastern Himalayas",
    climate: "Temperate Forests",
    altitude: "1,200 to 3,400 meters",
  },
  isEndangered: true,
};

// Log information about the "animal" object
console.log("Animal Object:", animal);

// Log the data type of the "animal" object
console.log(`The data type of "animal" is a ${typeof animal}`);



/*------------------
9)
Update at least one value
in your object. Write your own
console.log statement to test this
(look at questions 3 or 6 for an idea).
------------------*/
const animal = {
  name: "Lion",
  type: "Mammal",
  legs: 4
};

// Update the value of legs
animal.legs = 3;

// Test the updated value
console.log(`The number of legs of ${animal.name} is now ${animal.legs}`);




/*------------------
10)
There are three bugs in the object
below. Find them and fix them!
------------------*/

// let user2 = {
//   id: 102,
//   email: "pedro@dev.com"
//   personalInfo: {
//       name: Pedro,
//       address: {
//           line1: "Carrer de CodeOp",
//           line2: "42",
//           city; "Barcelona",
//           country: "Spain"
//       }
//   }
// }

// Fixed code
let user2 = {
  id: 102,
  email: "pedro@dev.com",//I added the comma to separate the email properties correctly.
  personalInfo: {
    name: "Pedro", // Bug 1: Added quotes around Pedro to make it a string
    address: {
      line1: "Carrer de CodeOp",
      line2: "42",
      city: "Barcelona", // Bug 2: Corrected the colon used for city
      country: "Spain"
    }
  }
};

/*------------------
11)
Go back through all of your previous
code. Comment out every line where you
used either dot notation or bracket notation, 
and then rewrite that line using the opposite.
Make sure your code still works!
------------------*/
