//Boolean
let muted: boolean = true;
muted = false;

//Number
let numerator: number = 42;
let denominator: number = 6;
let result: number = numerator / denominator;

//String
let myName: string = "Jorge";
let hi: string = `My name is ${myName}`;

//Arrays
let people: string[] = [];
people = ["Isabel", "Nicole", "Raul"];

let peopleAndNumbers: Array<string | number> = [];
peopleAndNumbers.push(9000, "Jorge");

//Enum
enum Color {
  Red = "Red",
  Green = "Green",
  Blue = "Blue"
}

let favoriteColor: Color = Color.Red;

//Any
let joker: any = "Joker";
joker = { type: "Wildcard" };

//Object
let someObject: Object = {
  type: "Wildcard"
};

//FUNCTIONS
function add(a: number, b: number): number {
  return a + b;
}
const sum = add(4, 2);

function createAdder(a: number): (number) => number {
  return function(b: number): number {
    return b + a;
  };
}

const addFour = createAdder(4);
const fourSix = addFour(6);

function fullName(firstName: string, lastName: string = ""): string {
  return `${firstName} ${lastName}`;
}

const person1 = fullName("Jorge", "Moreno");
const person2 = fullName("Ernesto");

console.log(person2);

//INTERFACES
interface Rectangle {
  width: number;
  height: number;
  color?: Color;
}

let rect: Rectangle = {
  width: 4,
  height: 6,
};

function area(r: Rectangle): number {
  return r.width * r.width;
}

const areaRectangle = area(rect);

rect.toString = function() {
  return this.color ? `Rectangle ${this.color}` : `Rectangle`;
};

console.log(rect.toString())