//obj literals
const mysym = Symbol("my symbol");

const JsUser = {
    name: "Kavyansh",
    [mysym]: "symbol",
    age:19,
    location: "Chennai",
    "full name": "Kavyansh Kumar",
}
console.log(JsUser.name);
console.log(JsUser["name"]);
console.log(JsUser[mysym]);
console.log(JsUser["full name"]);

//Object.freeze(JsUser); //freeze the object

JsUser.greeting = function(){
    console.log(`hello, ${this.name}`);
}
console.log(JsUser.greeting);
console.log(JsUser.greeting());


const tinderUser = {}
tinderUser.name = "Kavyansh";
tinderUser.age = 19;
console.log(tinderUser);

function User (name, age){
    this.name = name;
    this.age = age;
}
let user1 = new User("John Doe", 25);
console.log(user1)

const obj = {1:"a", 2:"b", 3:"c"};
const obj2 = {4:"d", 5:"e", 6:"f"};
const obj3 = {...obj, ...obj2};
console.log(obj3);
const obj4 = Object.assign({},obj, obj2);
console.log(obj4);

console.log(Object.keys(obj));
console.log(Object.values(obj));
console.log(Object.entries(obj));

console.log(obj.hasOwnProperty('1')); //true


const course = {
    title: "JS",
    duration: 3,
    price: 200,
    isEnrolled : false,
}

const {title: topic} = course
console.log(topic); //JS