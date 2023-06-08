// Primitives: number, string, boolean
// More complex: arrays, objects
// Function types, parameters

// Primitives
let age: number;
let username: string;
let foo: boolean;

let x: null;

// More complex

let hobbies: string[];
let bools: boolean[];
let nums: number[];

let person: {
    name: string;
    age: number;
};

person = {
    name: "Max",
    age: 32,
};

let people: {
    name: string;
    age: number;
}[];

let course: string | number = "React - the complete guide";
course = 32;

type Person = {
    name: string;
    age: number;
};

let myself: Person;

// Functions & types
function add(a: number, b: number): number {
    return a + b;
}

function my_print(value: any): void {
    console.log(value);
}

// Generics
function insertAtBeginning<T>(array: T[], value: T): T[] {
    const newArray = [value, ...array];
    return newArray;
}
