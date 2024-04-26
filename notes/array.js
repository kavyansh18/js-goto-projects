const myArr = [1, 2, 3, 4, 5];
const  myArr2 = new Array(1, 2, 3, 4, 5);

//array method
myArr.push(6); //add element to the end of array    
myArr.pop(); //remove element from the end of array
myArr.shift(); //remove element from the start of array
myArr.unshift(0); //add element to the start of array

//slice, spice
const myArr3 = myArr2.slice(1, 3); // [1,2]
const myArr4 = myArr2.splice(1, 3); // [1,2,3] will take out this subarray from the main arra myArr2

const marve_heros = ['Ironman', 'Thor', 'Hulk', 'Spiderman', 'Black Panther'];
const dc_heros = ['Superman', 'Batman', 'Wonder Woman', 'Joker'];

const heros = marve_heros.concat(dc_heros); //combine two arrays into one
console.log(heros)

const heros2 = [...marve_heros, ...dc_heros]; //combine two arrays into one using spread operator


const another_array = [1,2,3, [4,5, [6,7,8]],9]
const real_another_array = another_array.flat(Infinity); // [1,2,3,4,5,6,7,8,9]

console.log(Array.from('hello')) // ['h','e','l','l','o']

let s1=100
let s2=200
let s3=300
console.log(Array.of(s1,s2,s3)) // [100,200,300]