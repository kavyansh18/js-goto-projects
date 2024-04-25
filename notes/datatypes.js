//primitive
// number, bool, string, null, undefined, symbol

//non-primitive(reference)
//object, array, function
const heros = ["shaktiman", "nagraj","doga"]

let obj = {
    name: "shaktiman",
    power: "fly"
}

const myFunction = function(){
    console.log("hello")
}

//stack(primitive) and heap(non-primitive)

let name="kavyansh"
let anotherName = name
anotherName = "kavya"
console.log(anotherName) //kavya
console.log(name) //kavyansh

let userOne = {
    email:"k@gmail.com",
    upi:"k@okhdfc",
}

let userTwo = userOne 
userTwo.email ="j@gmail.com"
console.log(userOne.email) // j@gmail.com
console.log(userTwo.email) // j@gmail.com