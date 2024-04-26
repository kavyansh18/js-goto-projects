const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min)


//dates
let myDate = new Date()
console.log(myDate)
console.log(myDate.toString())
console.log(myDate.toDateString());
console.log(typeof myDate);

let myPastDate = new Date("Jan 1 2020 7:30:59")
let mynewdate = new Date(2020, 0, 1, 7, 30, 59) //months are zero indexed so January is 0
console.log(mynewdate);
console.log(myPastDate)

let myTimeStamp = Date.now()
console.log(myTimeStamp)
console.log(Math.floor(Date.now() / 1000));

mynewdate.toLocaleString('default',{
    weekday:"long",
    year:"numeric",
    month:"long",
    day:"numeric"
});
