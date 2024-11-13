// COUNTER PROGRAM
/*
const decreaseBtn = document.getElementById("decreaseBtn");
const resetrBtn = document.getElementById("resetBtn");
const increaseBtn = document.getElementById("increaseBtn");
const countLabel = document.getElementById("countLabel");
                 
let count = 0;
increaseBtn.onclick = function(){
    count++;
    countLabel.textContent = count; 
}
decreaseBtn.onclick = function(){
    count--;
    countLabel.textContent = count;
}
resetrBtn.onclick = function(){
    count =0;
    countLabel.textContent = count;
}
*/

// Math = build-in object that provides a 
//        collection of properties and methods

//console.log(Math.PI);
//console.log(Math.E);
/*
let x = 3;
let y = 2;
let z = 1;
 
//z = Math.round(x);             ROUNDOFF
//z = Math.floor(x);
//z = Math.ceil(x);
//z = Math.trunc(x);
//z = Math.pow(x, y);
//z = Math.sqrt(x);
//z = Math.log(x);
//z = Math.sin(x);
//z = Math.cos(x);
//z = Math.tan(x);
//z = Math.abs(x);
//z = Math.sign(x);
let max = Math.max(x,y,z);
let min = Math.min(x,y,z);
console.log(min); 
*/

//                           RANDOM NUMBER GENERATOR
/*
const min = 50;
const max = 100;
let randomNum = Math.floor(Math.random() * (min - max)) + min;
console.log(randomNum);
*/

//              ROLL DICE
/*
const myButton = document.getElementById("myButton");
const Label1 = document.getElementById("Label1");
const Label2 = document.getElementById("Label2");
const Label3 = document.getElementById("Label3");
const min = 1;
const max = 6;
let randomNum1;
let randomNum2;
let randomNum3;

myButton.onclick = function(){
    randomNum1 = Math.floor(Math.random() * max) + min;
    randomNum2 = Math.floor(Math.random() * max) + min;
    randomNum3 = Math.floor(Math.random() * max) + min;
    Label1.textContent = randomNum1;
    Label2.textContent = randomNum2;
    Label3.textContent = randomNum3;
}
*/


//       IS STATEMENTS = if a condition is true, execute s some code if not , do something else
/*
    let time = 2;
    if(time < 12){
        console.log("good morning")
    }
    else{
        console.log("good afternoon")
    }
*/
/*
    let student = true;

    if(student){
        console.log("student");
    }
    else{
        console.log("your NOT student")
    }
*/
/*
    let age = 15
    let hasLicense = false;

    if(age >= 16){
        console.log("Your are old enough to drive");

        if(hasLicense){
            console.log("you have your license!")
        }
        else{
            console.log("But you do not have your license yet!")
        }
    }
    else{
        console.log("You Must 16+ to have a license");
    }
*/

//                 SIMPLE INPUTING A AGE 
/*
const myText = document.getElementById("myText");
const mySubmit = document.getElementById("mySubmit");
const resultElemet = document.getElementById("resultElement");
 let age =

 mySubmit.onclick = function(){
    age = myText.value;
    age = Number(age);

    if(age >= 100){
        resultElemet.textContent = `Your are too OLD for this site`;
     }
     else if(age == 0){
        resultElemet.textContent = `You can't enter. You were just born.`;
     }
     else if(age >= 18){
        resultElemet.textContent = `You are old enough to enter this site`;
     }
     else if(age < 0){
        resultElemet.textContent = `Your age can't be below 0`;
     }
     else{
        resultElemet.textContent = `You must be 18+ to enter this site`;
     }
 }
*/

//                check = property that determines the checked state of an 
//                        HTML checkbox or radio button element
/*
const myCheckbox = document.getElementById("mycheckbox");
const visaBtn = document.getElementById("visaBtn");
const masterCardBtn = document.getElementById("masterCardBtn");
const paypalBtn = document.getElementById("paypalBtn");
const mySubmit = document.getElementById("mySubmit");
const subResult = document.getElementById("subResult");
const paymentResult = document.getElementById("paymentResult");

mySubmit.onclick = function(){

    if(myCheckbox.checked){
        subResult.textContent = `You are subscribe`;
    }
    else{
        subResult.textContent = `you are NOT subscribe!`;
    }

    if(visaBtn.checked){
        paymentResult.textContent = `You are paying with visa`;
    }
    else if (masterCardBtn.checked){
        paymentResult.textContent = `You are paying with MasterCard`;   
    }
    else if(paypalBtn.checked){
        paymentResult.textContent = `You are paying with paypal`;
    }
    else {
        paymentResult.textContent = `You need to select a payment method `;
    }
}
*/


//                  ternary operator = shortcut to if {} and else {} statement 
//                                      helps to assigne a variable base on a condition
//                                        condition ? codeIftrue : codeIffalse;
/*
let age = 18;
let message = age  >= 18 ? "You're an adult!" : "You're a minor";
console.log(message);
*/
//                INSTEAD OF USING LONG METHOD OF IF ELSE STATEMENT 
/*
let time = 12;
let greeting = time < 12 ? "Good Morning " : "Good Afternoon";
console.log(greeting);
*/
/*let message ;
if(age >= 18){
        message = "You're an Adult!";
}
else{
    message = "You're an Minor!";
}
*/
/*
let isStudent = false;
let message = isStudent ? "You are an student" : "You are not Student ";
console.log(message);
*/
/*
let purchaseAmount = 125;
let discount = purchaseAmount >= 100 ? 10 : 0;
console.log(`Youre total is $${purchaseAmount - purchaseAmount * (discount/100)}`);
*/

//                          SWITCH = can be an efficient replacement to many else statements 
/*
let day = 1;
if(day == 1){
    console.log(`It is Monday`);
}
else if(day == 2){
    console.log(`It is Tuesday`);
}
else if(day == 3){
    console.log(`It is Wednesday`);
}
else if(day == 4){
    console.log(`It is Thursday`);
}
else if(day == 5 ){
    console.log(`It is Friday`);
}
else if(day == 6){
    console.log(`It is Saturday`);
}
else if(day == 7 ){
    console.log(`It is sunday`);
}
else{
    console.log(`${day} its not a day`)
}
*/
//                                              Instead if-else use switch,case, default short cut
/*
 let day = 3;
 switch(day){
    case 1:
        console.log(`it is monday`);
        break;
    case 2:
        console.log(`it is tuesday`);
        break;
    case 3:
        console.log(`it is wednesday`);
        break;
    case 4:
        console.log(`it is thursday`);
        break;
    case 5:
        console.log(`it is friday`);
        break;
    case 6:
        console.log(`it is saturday`);
        break;
    case 7:
        console.log(`it is sunday`);
        break;
    default:
        console.log(`${day} is not a day `)
 }
*/
/*
let testScore = 80;
let grade;
switch(true){
    case testScore >= 90:
         grade = "A";
         break;
    case testScore >= 80:
        grade = "B";
        break;
    default:
        grade = 'F';
}
console.log(grade);
*/



//                      String methods = allow you to manipulate and work with text (string)
//let userName = "Brocode";--------------SAMPLE THAT I USED 

//userName.charAt(1)---------------letter 
//userName.indexOf("e")-------------Number 
/*
//userName.lastIndexOfindexOf("e")------ counting like indexOf
//userName.(length)--------------value of all letter and space
//userName = userName.trim();-----------ALL letter show Brocode
//userName = userName.toUpperCase();-------to CAPS all letters
//userName = userName.toLowerCase();---- to small all letters
//userName = userName.repeat(1000);----- how many you want to repeat the word 
//let result = userName.startsWith-----reverse of the endsWith
//let result = userName.includes---- can include letter 
//phoneNumber = phoneNumber.padEnd------reverse of padStart

/*
let phoneNumber = "09490579091";
phoneNumber = phoneNumber.padEnd(0, 1);
console.log(phoneNumber);
*/



//             string slicing = creating a substring from a
//                              portion of another string

//                              string.slice(start, end)

//const fullName = "Broseph code";--- SAMPLE THAT I USED
/*                  COUNTING STRING 
let firstName = fullName.slice( 0 , 7);
let lastName = fullName.slice(8, 12);
let firstchar = fullName.slice(0, 7);
let lastchar = fullName.slice(-4);
*/
/*
const fullName = "Broseph code"; -------SAMPLE THAT I USED
let firstName = fullName.slice(0, fullName.indexOf(" "));
let lastName = fullName.slice(fullName.indexOf(" ") + 1)
console.log(firstName);
console.log(lastName);
*/
/*
const email = "allen@gmail.com";
let userName = email.slice(0, email.indexOf("g"));

console.log(userName);
*/




//  Method chaining = Calling one method after another 
//                      in on continuous line of code.

// ------- NO METHOD OF CHAINING ----
/*
let username = window.prompt("What is you Name ?");

username = username.trim();
let letter = username.charAt(0);
letter = letter.toUpperCase();

let extraChars = username.slice(1);
extraChars = extraChars.toLowerCase();
username = letter + extraChars;

console.log(username);
*/

// ----------------------METHOD CHAINING ----------
// CONNECT ALL IN ONE LINE VARIABLE 
/*
let username = window.prompt("What is you Name ?");
username = username.trim().charAt(0).toUpperCase() + username.trim().slice(1).toLowerCase();
console.log(username);
*/


// LOGICAL OPERATOR = used to combine or manipulate boolean values (true or false )
//                     AND = &&
//                     OR  = ||
//                     NOT = ! 


/*                    SAMPLE IN = AND / OR 
const temp = 0;
if(temp < 0 || temp >= 30){
    console.log("the weather is bad");
}
else{
    console.log("the weather is good ");
}
*/
/*                      SAMPLE IN NOT 
const isSunny = true;
if(isSunny){
    console.log("It is CLOUDY");
}
else[
    console.log("it is SUNNY")
]
*/



// = assignment operator 
// == comparison operator (Compare if values are equal)
// === strict equality operator (Compare if values & datatype are equal)
// != inequality operator 
// !==  strict inequality operator 

/*const PI = 3.14;             SAMPLE THAT I USED 
if(PI != "3.14"){
    console.log("its a PI value ")
}
else{
    console.log("its not PI value")
}
*/



//                      while loop = repeat some code WHILE some condition is true
/*
let username = "";
do{
    username = window.prompt(`Enter your name`); 
}while (username === "" || username === null)

    console.log(`hello ${username}`);
*/

//                  for loop = repeat somde code a LIMITED amount of times 

/*
for(let i  = 10; i > 0; i--){
    console.log(i);
}
console.log("WELCOME TO THE REALITY")
*/
//------------------------------------------------------------------------
/*
for(let i = 1; i < 20; i++){
    if(i == 13){
        continue;
    }
    else{
        console.log(i);
    }
}
*/

//                      NUMBER GUESSING GAME 
/*
const minNum = 1;
const maxNum = 100;
const answer = Math.floor(Math. random() * (maxNum - minNum + 1));
let attemps = 0;
let guess;
let running = true;

while(running){

    guess = window.prompt(`Guess a number between ${minNum} - ${maxNum}`);
    guess = Number(guess);

    if(isNaN(guess)){
        window.alert('please enter a valid number');
    }
    else if(guess < minNum || guess > maxNum){
        window.alert("please enter a Valid number ");
    }
    else{
        attemps++;
        if(guess < answer){
            window.alert("TOO LOW! TRY AGAIN!");
        }
        else if(guess > answer){
            window.alert("TOO HIGH! TRY AGAIN!");
        }
        else{
            window.alert(`Correct the asnwer was ${answer}. It took you ${attemps} attemps`)
        }
    }  
}
    */



//                   function = A section of reusable code.
//                              Declare code once, use it whenever you want.
//                              Call the function to execute that code.

/*                  EXAMPLE 
function Happybday(username , age){
    console.log("Happy bday to you");
    console.log("Happy bday to you");
    console.log(`Happy bday dear ${username}!`);
    console.log("Happy bday to you");
    console.log(`You are ${age} years old`);
}
Happybday("PAUL ALLEN" , 22);
*/
/*
function add(x,y){
    return x + y;
}
function subtract(x, y){
    return x - y;
}
function multiply(x, y){
    return x * y;
}
function divide(x, y){
    return x / y;
}
function isEven(number){
    return number % 2 === 0 ? true : false;
}
function isValidEmail(email){
// shortcut 
//      return email.includes("@") ? true : false
    if(email.includes("@")){
        return true;
    }
    else{
        return false;
    }
}
console.log(isValidEmail("Bro@fake.com"));
//console.log(isEven(101))
//console.log(divide(3, 3))
*/



//                      Variable scope = where a variable is recognized 
//                                       and accessible (local vs global)
/*
let x = 3;           //       GLOBAL 

function2();

//      LOCAL 
function function1(){
    let x = 1
    console.log(x);
}
function function2(){
    let x = 2
    console.log(x) 
}
*/



//                              TEMPERATURE CONVERSION
/*
//     ID                                 ID 
const textBox = document.getElementById("textBox");
const toFahrenheit = document.getElementById("toFahrenheit");
const toCelsius = document.getElementById("toCelsius");
const result = document.getElementById("result")
let temp;
function convert(){

    if(toFahrenheit.checked){
        temp = Number(textBox.value);
        temp = temp * 9 / 5 +32;
        result.textContent = temp.toFixed(1) + "°F"
    }
    else if(toCelsius.checked){
        temp = Number(textBox.value);
        temp = (temp - 32) * (5/9)
        result.textContent = temp.toFixed(1) + "°C"
    }
    else{
       // result.textContent = "Select a unit"
       alert("Selecct teaaaa")
    }
}
*/





//          Array = a variable like structure that can hold more than 1 value
// array always start zero 

//let fruits = ["apple", "orange", "banana", "coconut"];

/*
for(let i = 0; i < fruits.length; i++){
    console.log(fruits[i]);
}
//          REVERSE 
for(let i = fruits.length - 1; i >= 0 ; i--){
    console.log(fruits[i]);
}
//          SHORT CUT
for(let fruit of fruits){
    console.log(fruit)
}
*/

//fruits[] = "coconut"
//fruits.push("coconut");
/*
let numfruits = fruits.length
let index = fruits.indexOf("banana")
console.log(numfruits)

console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[2]);
console.log(fruits[3]);
*/


//           spread operator =  ... allows an iterable such as an array or string to be 
//                              expanded into seperate elements (unpacks the elements )
/*
let fruits = ["apple", "orange", "banana", "coconut"];
let vegetables  = ["carrots", "potato", "celery", "cabbage"];
// SPREAD OPERATOR is = ...
let foods = [... fruits, ...vegetables, "hotdog", "egg"]
console.log(foods)
*/



//             rest parameters = (...rest) allow a function work with a variable
//                                number of argumets by bundling them into an array 

//           spread = expands an array into seperate elements 
//           rest = bundles seperate elements into an array 
/*
function combineStrings(...strings){
    return strings.join(" ");
}

const Fullname = combineStrings("Paul", "allen", "C", "Dungca");
console.log(Fullname);
*/



/*             ROLLING DICE -------- I CAN'T GET IT     

function rollDice(){
    const numOfDice = document.getElementById("numOfDice").value;
    const diceResult = document.getElementById("diceResult");
    const diceImage = document.getElementById("diceImage");
    const values = [];
    const images = [];

    for(let i = 0; i < numOfDice; i ++){
        const value = Math.floor(Math.random() * 6) + 1;
        values.push(value);
        images.push(`<img src="dice_images/${value}.png" alt="Dice ${value}">`);
    }

    diceResult.textContent = `dice: ${values.join(`, `)}`;
    diceImage.innerHTML = images.join(` `);
}
*/





//           RAMDOM PASSWORD GENERATOR 
/*
function generatePassword(length, includeLowercase, includeUppercase, includeNumbers, includeSybols){

    const toLowerCase = "abcdefghijklmnopqrstuvwxz";
    const toUpperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const numberChars = "0123456789";
    const symbolsChars = "!@!#$$%^&*()_+=-/*";

    let allowedChars = "";
    let password = "";

    allowedChars += includeLowercase ? toLowerCase: "";
    allowedChars += includeUppercase ? toUpperCase: "";
    allowedChars += includeNumbers ? numberChars: "";
    allowedChars += includeSybols ? symbolsChars: "";

    if(length <= 0){
        return `(password length must be at least 1)`
    }
    if(allowedChars.length === 0){
        return `(At least 1 set of character needs to be selected)`;
    }
    for(let i = 0; i < length; i++){
        const randomIndex = Math.floor(Math.random() * allowedChars.length);
        password += allowedChars[randomIndex];
    }
    return password;
}

const passwordLength = 100;
const includeLowercase = true;
const includeUppercase = true;
const includeNumbers = true;
const includeSybols = true;

const password = generatePassword(passwordLength, 
                                 includeLowercase,
                                 includeUppercase,
                                 includeNumbers,
                                 includeSybols)
console.log(`generate password: ${password}`);
*/



//                 callback = a function that is passed as an argument 
//                             to another function.

//                              used to handle asychronus operations:
//                              1. Reading a file 
//                              2. Network requests 
//                              3. Interacting with databases

//                      "Hey, when you're done, call this next."
/*
sum(displayPage, 30, 10);
function sum(callback, x, y){
    let result = x + y;
    callback(result);
}
function displayConsole(result){
    console.log(result);
}
function displayPage(result){
    document.getElementById("myH1").textContent = result
}
*/




//       .map() = accepts a callback and applies that function
//                to each element of an array, then return a new array 
/* EXAMPLES 
const numbers = [1 ,2, 3, 4, 5];
const squares = numbers.map(square);
const cubes = numbers.map(cube);

console.log(cubes);

function square(element){
    return Math.pow(element, 2) 
}
function cube(element){
    return Math.pow(element, 3)
}
*/
/*
const students = ["Spongebob", "Patrick", "Sandy", "Paul"];
const studentsUpper = students.map(upperCase);
const studentsLower = students.map(lowerCase);

console.log(studentsLower);
function upperCase(element){
    return element.toUpperCase();
}
function lowerCase(element){
    return element.toLowerCase();
}
*/
/*
const dates = ["2024-1-10", "2025-2-20", "2026-3-30"];
const formattedDates = dates.map(formatDates);
 console.log(formattedDates);

 function formatDates(element){
    const parts = element.split("-");
    return `${parts[2]}/${parts[1]}/${parts[0]}`;
 }
*/



//                  .filter() = creates a new array by filtering out elements 
/*
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let evenNums = numbers.filter(isEven);
let oddNums = numbers.filter(isOdd);

console.log(oddNums)

function isEven(num){
    return num % 2 === 0;
}

function isOdd(gy){
    return gy % 2 !==0;
}
*/


//              .reduce() = reduce the element of an array to a single value
/*     EXAMPLE 
const prices = [5, 30, 10, 25, 15, 20];
const total = prices.reduce(sum);

console.log(`$${total.toFixed(2)}`)
function sum(accumulated, element){
    return accumulated + element;
}
*/
/*
const grades = [75, 23, 75, 80, 90, 100];
const maximu = grades.reduce(maximum);
const minimu = grades.reduce(minimum);

console.log(minimu)
function maximum(accum, element){
    return Math.max(accum, element);
}
function minimum(accum, element){
    return Math.min(accum, element);
}
*/


//    functions expressions = a way to define functions as values or variables
/*
const numbers = [1, 2, 3, 4, 5, 6];
const squares = numbers.map(square);

console.log(squares)
function square (element){
    return Math.pow(element, 2);
}
*/





//  arrow functions = a concise way to write function expressions good for simple funtions 
//                    that you use only once (parameters) => some code 

/*              EXAMPLE 
const hello = (name, age) => {console.log(`hello ${name}`)
                        console.log(`what is your age?`)
                        console.log(`Im ${age} years old`)}
hello ("paul" , 22)
*/
//setTimeout( () => console.log("whaduawd"),3000 ) 
/*
const numbers = [1, 2, 3, 4, 5, 6,]
const squares = numbers.map((element) => Math.pow(element , 2));
const cubes = numbers.map ((element ) => Math.pow(element, 3));
const evenNums = numbers.filter((element) => element % 2 === 0);
const oddNums = numbers.filter((element) => element % 2 !== 0);
const total = numbers.reduce((accumulator, element) => accumulator + element);

console.log(total)
*/



//         object = A collection of related properties and/or methods
//                  Can represent real world objects (people, products, places)
//                  object = {key:value,
//                           function()}
/*
const second = {
    firstname: "Spongebob",
    lastname: "Squarepants",
    age: 30,
    Employed: true,
    hello1: function(){console.log("Hi! I am Spongebob")}, // using function
    eat: function(){console.log("Krabby Patty")},
}
const third = {
    firstname: "Patrick",
    lastname: "Star",
    age: 42,
    Employed: false,
    hello2: () => {console.log("Hey, I'm Patrick....")}  // using arrow

}
 second.hello1()
 third.hello2()
*/



//    this = reference to the object where THIS is used 
//           (the object depends on the immediate context)
//            person.name = this.name 
/*   NOW WORKING IN ARROW FUNCTION
const person1 = {
    name: "Spongebob",
    favFood: "Jollibee",
    hello: function(){console.log(`Hi I am  ${this.name}`)},
    hell: function(){console.log(`${person1.name} realy like ${this.favFood}`)}
}
person1.hell();
*/




//    constructor = special method for defining the
//                  properties and methods of objects 
/*
function Car(make, model, year, color){
    this.make = make,
    this.model = model,
    this.year = year,
    this.color = color
    this. drive = function(){console.log(`You drive this ${this.model}`)}
}
const car1 = new Car("Ford", "Mustang", 2024, "Red");
const car2 = new Car("Chevrolet", "Camero", 2025, "Blue")
*/
//car1.drive()
//car2.drive()

//console.log(car1)
//console.log(car2)
/*
console.log(car1.make);
console.log(car1.model);
console.log(car1.year);
console.log(car1.color);

console.log(car2.make);
console.log(car2.model);
console.log(car2.year);
console.log(car2.color);
*/




//         class = (ES6 feature) provides a more structured and cleaner way to 
//                  work with objects compared to traditional construction functions 
//                  ex. static keyboard, encapsulation, inheritance
/*           Example 1
class Product{
    constructor(name, price){
        this.name = name;
        this.price = price;
    }

    displayProduct(){
        console.log(`Product: ${this.name}`);
        console.log(`Price: ${this.price.toFixed(2)}`);
    }
    calculateTotal(salesTax){
        return this.price + (this.price * salesTax);
    }
}
const salesTax = 0.05;

const product1 = new Product("shirt", 19.99);
const product2 = new Product("pants", 22.50);
const product3 = new Product("underwear", 100.00);

product3.displayProduct();

const total = product3.calculateTotal(salesTax);
console.log(`total price (with tax): $${total.toFixed(2)}`);
*/

/*          Example 2 
function Product(name, price){

    this.name = name;
    this.price = price;

    this.displayProduct = function(){
        console.log(`Product: ${this.name}`);
        console.log(`Price: $${this.price.toFixed(2)}`);
    };

   this.calculateTotal = function (salesTax){
        return this.price + (this.price * salesTax);
   }
}

const salesTax = 0.05;

const product1 = new Product("shirt", 19.99);
const product2 = new Product("Pants", 22.50);
const product3 = new Product("underwear", 100.00);

product1.displayProduct();

const totalPrice = product1.calculateTotal(salesTax);

console.log(`Total Price (with tax): $${totalPrice.toFixed(2)}`);
*/



//         static = keyword that defines properties or methods that belong 
//                  to a class itself rather than the objects created 
//                  from that class (class owns anything static, not the object)

/*          EXAMPLES  1
class MathUtil{
    static PI = 3.14159

    static getDiameter(radius){
        return radius * 2;
    }
    static getcircumference(radius){
        return 2 * this.PI * radius;
    }
    static getArea(radius){
        return this.PI * radius * radius;
    }

}

console.log(MathUtil.PI);
console.log(MathUtil.getDiameter(10));
console.log(MathUtil.getcircumference(10));
console.log(MathUtil.getArea(10));
*/
/*
class User{
    static UserCount = 0;

    constructor(username){
        this.username = username;
        User.UserCount++;
    }
    static getUsercount(){
        console.log(`There are ${User.UserCount} users online`);
    }
    sayHello(){
        console.log(`Hello, my username is ${this.username}`);
    }
}
const user1 = new User("Spongebob");
const user2 = new User("Patrick");
const user3 = new User("Sandy");

user1.sayHello()
user2.sayHello()
user3.sayHello()
User.getUsercount();
*/
/*
console.log(user1.username);
console.log(user2.username);
console.log(user3.username);
console.log(User.UserCount);
*/

//      inheritance = allows a new class to inherit properties and methods 
//                     from an existing class (parent -> child )
//                     helps with code reusability
//Parent
/*
class Animal{
    alive = true

    eat(){
         console.log(`This ${this.name} is eating`);
    }
    sleep(){
        console.log(`This ${this.name} is sleeping`);
    }
}
class Rabit extends Animal{
    name = "rabbit";

    run(){
        console.log(`This ${this.name} is running`);
    }
}
class Fish extends Animal{
    name = "fish";

    swim(){
        console.log(`This ${this.name} is swimming`);
    }
}
class Hawk extends Animal{
    name = "hawk"

    fly(){
        console.log(`This ${this.name} is flying`);
    }
}
const rabbit = new Rabit();
const fish = new Fish();
const hawk = new Hawk();

console.log(Hawk.alive)
rabbit.eat();
rabbit.sleep();
fish.swim()
*/



//             super = keyword is used in clasess to call the constructor or 
//                     access the properties and methods of a parent (Superclass)
//                     this = this object 
//                      super = parent 
/*
class Animal{

    constructor(name, age){
        this.name = name;
        this.age = age;

    }

    move(speed){
        console.log(`The ${this.name} moves at a speed of ${speed} mph`);
    }
}
class Rabbit extends Animal{


    constructor(name, age, runSpeed){
        super(name, age);
        this.runSpeed = runSpeed;

    }

    run(){
        console.log(`this ${this.name} can run`);
        super.move(this.runSpeed);
    }
}
class Fish extends Animal{

    constructor(name, age, swimSpeed){
        super(name, age);     
        this.swimSpeed = swimSpeed;
    }

    swim(){
        console.log(`this ${this.name} can swimm`);
        super.move(this.swimSpeed);
    }
}
class Hawk extends Animal{

    constructor(name, age, flySpeed){
        super(name, age);
        this.flySpeed = flySpeed;
    }

    fly(){
        console.log(`this ${this.name} can fly`);
        super.move(this.flySpeed);
    }
}

const rabbit = new Rabbit("rabbit", 1, 25);
const fish = new Fish("fish", 2, 12);
const hawk = new Hawk("hawk", 3, 50);

fish.swim();
*/




//   getter = special method that makes a property readable
//   setter = special method that makes a property writeable 

//  validate and modify a value when reading / writing a property 


/*              CHAT GPT GUIDE 
class Rectangle {
    constructor(width, height) {
        this.width = width;  // This uses the setter
        this.height = height;  // This uses the setter
    }

    set width(newWidth) {
        if (newWidth > 0) {
            this._width = newWidth;
        } else {
            console.error("Width must be a positive number");
            this._width = this._width;  // Set a default value if invalid
        }
    }

    get width() {
        return `${this._width.toFixed(1)}cm`;  // Getter for width with formatting
    }

    set height(newHeight) {
        if (newHeight > 0) {
            this._height = newHeight;
        } else {
            console.error("Height must be a positive number");
            this._height = this._height;  // Set a default value if invalid
        }
    }

    get height() {
        return `${this._height.toFixed(1)}cm`;  // Getter for height with formatting
    }

    get area() {
        return `${(this._width * this._height).toFixed(1)}cm²`;  // Calculate area with formatting
    }
}

// Create an instance of Rectangle
const rectangle = new Rectangle(3, 4);

// Test setting invalid values
rectangle.width = -1000000;  // Invalid width
rectangle.height = "pizza";   // Invalid height

// Output the values
console.log(rectangle.width);  // Will print 1.0cm and show an error
console.log(rectangle.height);  // Will print 1.0cm and show an error
console.log(rectangle.area);    // Will calculate area based on valid values (1 * 1 = 1.0cm²)
*/

/*
class Person{
    constructor(firstName, lastname, age){
        this.firstName = firstName;
        this. lastname = lastname;
        this.age = age;
    }

    set firstName(newFirstname){
        if(typeof newFirstname === "string" && newFirstname.length > 0){
            this._firstName = newFirstname;
        }
        else{
            console.error("First name must be a non-empty string")
        }
    }

    set lastname(newlastname){
        if(typeof newlastname === "string" && newlastname.length > 0){
            this._lastname = newlastname;
        }
        else{
            console.error("Last name must be a non-empty string")
        }
    }
    
    set age(newAge){
        if(typeof newAge === "number" && newAge >= 0){
            this._age = newAge;
        }
        else{
            console.log("Age must be a non-negative number")
        }
    }

    get firstName(){
        return this._firstName;
    }
    get lastname(){
        return this._lastname;
    }

    get fullname(){
        return this._firstName + " " + this._lastname;
    }

    get age(){
        return this._age;
    }
}

const person = new Person("Paul", "Dungca", 22);

console.log(person.firstName);
console.log(person.lastname);
console.log(person.fullname);
console.log(person.age);
*/




//      destructuring = extract values from arrays and objects
//                      then assign them to variables in a convenient way
//                      [] = to perform array destructuring 
//                      {} = to perform object destructuring 

//-----EXAMPLE 1 
/*
let a = 1; 
let b = 2;
[a, b] = [b, a];

console.log(a)
console.log(b)
*/
//----EXAMPLE 2 
/*const colors = ["red", "blue", "black", "green", "white"]

const [first, second, third, ...e] = colors
//const [a, b, ...d] = colors;

console.log(e)
*/
//--------EXAMPLE 3
/*
function displayPerson({firstname, second, lastname, age, job="student"}){
    console.log(`name: ${firstname} ${lastname}`);
    console.log(`name: ${age}`);
    console.log(`job: ${job}`);

}

const person1 = {
    firstname: "paul",
    second: "allen",
    lastname: "dungca",
    age: 22,
    job: "tech supp"
}

const person2 = {
    firstname: "franz",
    second: "jomar",
    lastname: "dungca",
    age: 23,
    job: "social work"
}

const person3 = {
    firstname: "mark",
    second: "joseph",
    lastname: "costales",
    age: 22,
}
displayPerson(person3)
*/
//const {firstname, second, lastname, age, job="unemployed"} = person3
//console.log(person1, person2, person3)






//  nested object = objects inside of other objects.
//                  allows you to represent more complex data structures 
//                  Child object is enclosed by a Parent object

//                  Person{address {}, ContactInfo{}}
//                  ShoppingCart{Keyboard{}, Mouse{}, Monitor{}}

//------ EXAMPLE 1
/*
const person = {
    fullname: "Paul Allen",
    age: 22,
    isWorking: true,
    hobbies: ["basketball", "Onlinegames", "cooking"],
    address: {
        street: "4th",
        barangay: "lara",
        city: "San Fernando",
        country: "Philippines"

    }
}

console.log(person)
console.log(person.hobbies)
for(const property in person.address){
    console.log(person.address[property])
}
*/

//-------EXAMPLE 2 
/*
class Person{

    constructor(name, age, ...address){
        this.name = name;
        this.age = age;
        this.address =  new Address(...address);
    }
}


class Address{

    constructor(street, city, country){
        this.street = street;
        this.city = city;
        this.country = country;
    }
}

const person1 = new Person ("Paul Allen", 22, "4th street", "San Fernando", "Philippines");
const person2 = new Person ("Franz Jomar", 23, "4th street", "San Fernando", "Philippines");
const person3 = new Person ("gabriel", 12, "4th street", "San Fernando", "Philippines");

console.log(person1.age)
*/





//                  ARRAYS OF OBJECTS 

//-------EXAMPLE 1 
/*
const fruits = [{name: "apple", color: "red", calories: 95},
                {name: "orange", color: "orange", calories: 45},
                {name: "banna", color: "yellow", calories: 105},
                {name: "coconut", color: "white", calories: 159},
                {name: "pineapple", color: "yellow", calories: 37}
];
*/
//--to add another ========         fruits.push({name: "grapes", color: "purple", calories: 62})
//--to remove the last part =========       fruits.pop();
//-- to remove specific item you want ===========    fruits.splice(0, 2 );

//-----------------------forEach()--------------------
//-- to list specific name =========            fruits.forEach(fruit => console.log(fruit.name))
//-----------------------map()-----------------------
/*
const fruitnames = fruits.map(fruit => fruit.name)
const colors = fruits.map(fruit => fruit.color)
const caloriess = fruits.map(fruit => fruit.calories)
console.log(fruitnames)
console.log(colors)
console.log(caloriess)
*/
//----------------------filter()------------------
//const yellowFruits = fruits.filter(fruit => fruit.color === "red");
//console.log(yellowFruits)

//const lowCalories = fruits.filter(fruit => fruit.calories <100);
//console.log(lowCalories)
//----------------------reduce()----------------------------
//const maxFruit = fruits.reduce((max, fruit) => fruit.calories > max.calories? fruit: max);
//console.log(maxFruit)

//const minFruit = fruits.reduce((min, fruit) => fruit.calories < min.calories? fruit: min);
//console.log(minFruit.calories)




//     sort() = method used to sort element of an array in place.
//              Sorts element as strings in lexicographic order, not alphabetical
//              lexicographic = (alphabet + numbers + symbols) as strings 

//-------EXAMPLE 1 ---------------
/*
let fruit = ["apple", "banana", "pineapple", "orange", "coconut", "grapes"];
fruit.sort();
console.log(fruit)
*/
//-------EXAMPLE 2--------------
/*
const numbers = [5, 3, 8, 1, 2];

// Sort in ascending order
numbers.sort((a, b) => a - b);
console.log(numbers); // Output: [1, 2, 3, 5, 8]

// Sort in descending order
numbers.sort((a, b) => b - a);
console.log(numbers); // Output: [8, 5, 3, 2, 1]
*/
//-----------EXAMPLE 2------------
/*
const people = [{name: "Paul Allen", age: 22, gpa: 3.0},
                {name: "Gabriel", age: 17, gpa: 1.5},
                {name: "Franz Jomar", age: 23, gpa: 2.5},
                {name: "Angel Cyril", age: 15, gpa: 4.0}]

people.sort((a, b) => b.age - a.age);  //ascending order 
console.log(people)

people.sort((a, b) => a.age - b.age);  //descending order 
console.log(people)

people.sort((a, b) => a.name.localeCompare(b.name));
console.log(people)
*/







//------------------SHUFFLE AN ARRAY--------------------------
// fisher-Yates algortihm
/*
const cards = ["A", 2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K"];

shuffle(cards);
console.log(cards)

function shuffle(array){
    for(let i = array.length - 1; i > 0; i--){
        const random = Math.floor(Math.random() * (i + 1));

        [array[1], array[random]] = [array[random], array[1]];
    }
}
*/





// Data objects = Objects that contains values that represent dates and times 
//                These data objects can be changed and formatted 

//const date = new Date(2024, 0, 1, 2, 3, 4, 5);
//---------EXAMPLE 1------------
/*
const date1 = new Date("2023-12-31");
const date2 = new Date("2025-01-01");

if(date2 > date1){
    console.log("Happy New Year!");
}
*/


//-----------CONSTANT VALUE -------------------
/*
const year = date.getFullYear();
const month = date.getMonth();
const day = date.getDate();
const hour = date.getHours()
const min = date.getMinutes()
const sec = date.getSeconds();
const dateWeek = date.getDay();

console.log(year)
console.log(month)
console.log(day)
console.log(hour)
console.log(min)
console.log(sec)
console.log(dateWeek)
*/




//-------------closure = A function defined inside of another function,
//                       The inner function has access to the variables 
//                       and scope of the outer function.
//                       Allows for private variables and state maintenance
//                       Used frequently in JS frameworks: React, Vue, Angular

/*  //----EXAMPLE 1----------
function createCounter(){
    
    let count = 0;


    function increment(){
    count++;
    console.log(`Count increased to ${count}`);
    }
    function getCount(){
        return count;
    }

    return{increment, getCount};
}
const counter = createCounter();
counter.increment();
counter.increment();
counter.increment();
counter.increment();
counter.increment();
counter.increment();
counter.increment();
counter.increment();

console.log(`Current count is ${counter.getCount()}`);
*/

//-------EXAMPLE 2----------
/*
function createGame() {
    let score = 0;

    function increaseScore(points) {
        score += points;
        console.log(`+${points}pts`);
    }

    function decreaseScore(points) {
        score -= points;
        console.log(`-${points}pts`);
    }

    function getScore() {
        return score;
    }
    
    return {increaseScore, decreaseScore, getScore}
}
const game = createGame();  

game.increaseScore(5);
game.increaseScore(6);
game.decreaseScore(7);
game.increaseScore(9);
game.decreaseScore(10);
console.log(`The final score is ${game.getScore()}pts`);
*/




// setTimeout() = function in javascript that allows you to schedule 
//                the execution of a function after an amount of this (milliseconds)
//                Times are approximate (varies based on the workload of the Javascript runtime env.)


//             setTimeout(callback, delay);

/* //----------EXAMPLE 1----------
function sayHello(){
    window.prompt("Hello");
}

setTimeout(sayHello, 3000);
*/
//------------EXAMPLE 2-----------
/*
let timeoutId;

function startTimer(){
    timeoutId = setTimeout(() => window.alert("Hello"), 3000); 
    console.log("STARTED");
}
function clearTimer(){
    clearTimeout(timeoutId);
    console.log("CLEARED")
}
*/




//-------------------DIGITAL CLOCK PROGRAM----------------

function updateClock() {
    const now = new Date();
    let hours = now.getHours();
    const meridiem = hours >= 12 ? "PM" : "AM";
    hours = (hours % 12 || 12).toString().padStart(2, '0'); // Ensure it's a string
    hours = hours.toString().padStart(2,0);
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const seconds = now.getSeconds().toString().padStart(2, '0');
    const timeString = `${hours}:${minutes}:${seconds} ${meridiem}`;
    document.getElementById("clock").textContent = timeString;
}

updateClock();
setInterval(updateClock, 1000);




//              -------------------STOPWATCH---------------

// const display = document.getElementById("display");
// let timer = null;
// let startTime = 0;
// let elapsedTime = 0;
// let isRunning = false;

// function start() {
//     if (!isRunning) {
//         startTime = Date.now() - elapsedTime;
//         timer = setInterval(update, 10);
//         isRunning = true;
//     }
// }

// function stop() {
//     if (isRunning) {
//         clearInterval(timer);
//         isRunning = false;
//     }
// }

// function reset() {
//     clearInterval(timer);
//     elapsedTime = 0;
//     isRunning = false;
//     display.textContent = "0:0:0:0";
// }

// function update() {
//     const currentTime = Date.now();
//     elapsedTime = currentTime - startTime;

//     let hours = Math.floor(elapsedTime / (1000 * 60 * 60));
//     let minutes = Math.floor((elapsedTime / (1000 * 60)) % 60);
//     let seconds = Math.floor((elapsedTime / 1000) % 60);
//     let milliseconds = Math.floor((elapsedTime % 1000) / 10);

//     display.textContent = `${hours}:${minutes}:${seconds}:${milliseconds}`;
// }




7.34









































