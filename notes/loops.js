for (let index = 0; index <7; index++) {
    console.log(index);
}

let index = 10;
while (index > 5) {
    console.log(index);
    index--
}

do {
    console.log(index);
    index--
} while (index > 5);

const arr = [1, 2, 3, 4, 5];
for (const iterator of arr) { //we get value in for of loop
    console.log(iterator);
}

//maps
const map = new Map();
map.set('IN', 'India');
map.set('US', 'United States');
console.log(map);

for (const [key,value] of map) {
    console.log(key,':',value);
}

const obj = {
    cpp: "C++",
    py: "Python",
    swift: "Swift by apple",
}

for (const key in obj) { //we get key in for in loop
        console.log(key,':',obj[key]);
}   

const coding = ['C++', 'Python', 'Swift'];

coding.forEach(function (item) { //takes a function as an argument
    console.log(item);
})

coding.forEach((item) => {
    console.log(item);
})

const nums = [1, 2, 3, 4, 5];
const mynums = nums.filter((num) => num > 3) //filter returns a new array whereas foreach don't
// if u use {} <opens the scope> in arrow function then u have to write  return the value else if u use () u don't need to write return 
console.log(mynums);

const newnums = nums.map((num) => num+10)
console.log(newnums)

const nested = nums
    .map((num) => num+10)
    .map((num) => num+1)
    .filter((num) => num > 13)

console.log(nested);

const number = [1, 2, 3, 4, 5];
const total = number.reduce(function (accumulator, currentValue) {
    console.log(`accumulator: ${accumulator}, currentValue: ${currentValue}`);
    return accumulator + currentValue;
}, 0);
console.log(total);

const total1 = number.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
console.log(total1);