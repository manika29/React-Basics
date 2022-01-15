//*****const keyword*****
const obj = {
  name: "Manika",
};
obj.name = "zen";
console.log(obj.name);

// *****Template String*****
let fnmae = "Manika";
let lname = "Sharma";
let age = prompt("Enter your age");

let result = `${fnmae} ${lname} is ${age} years old`;
alert(result);

// *****Functions*****
function welcome(user) {
  alert(`Hello ${user}`);
}
welcome("Manika");

// *****Arrow Functions*****
let greeting = (message) => alert(`${message}`);
greeting("Hello");

//this keyword
let australia = {
  cities: ["Sydney", "Melbourne"],
  printWithDash: function () {
    alert(this.cities.join("-"));
  },
};

australia.printWithDash();

//Object Destructuring
let thingsToDo = {
  Morning: "Exercise",
  Afternoon: "Work",
  Evening: "Code",
  night: ["Sleep", "Dream"],
};

let { morning, afternoon, evening, night } = thingsToDo;
morning = "run";
console.log(morning);

//Passing object to a function
// const uniStudent = (student) => {
//   console.log(`${student.fname} is a student from sydney`);
// };

// uniStudent({
//   fname: "Manika",
// });

//Passing an object as function argument and destructuring it
const uniStudent = (student) => {
  let { fname, lname } = student;
  console.log(`${fname} is a student from sydney`);
};

uniStudent({
  fname: "Manika",
});

//Array Destructuring
const [first] = ["one", "two", "three"];
console.log(first);

//Spread operator
const Acities = ["Sydney"];
const USCities = ["Boston", "CF"];

const Cities = [...Acities, ...USCities];
console.log(Cities);

//Rest Operator
const cities = ["sydney", "melbourne"];
cities.push("city");
const [first, ...rest] = cities;
console.log(first);
console.log(rest);
