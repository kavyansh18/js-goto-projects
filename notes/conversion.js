let score = "33"

console.log(typeof score) //string

let scoreAsNumber = Number(score)

console.log(typeof scoreAsNumber) //number;

let error = "33abc"
console.log(Number(error)) //NaN;

/* null => 0
undefined => NaN
true => 1
false => 0
"33" => 33
"33abc" => NaN
*/

console.log("1" + 2 +2); //122
console.log(1 + 2 + "2"); //32 

console.log(+true); //1
console.log(+"45"); //45
console.log(+"a56"); //NaN

console.log(2 == "2"); //true
console.log(2 === "2"); //false  
console.log(null == 0); //false