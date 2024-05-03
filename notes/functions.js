function add2num(num1,num2){
    console.log(num1+num2)
}

add2num(1,2)

function calculateCardPrice(...num1){
    return num1
}
console.log(calculateCardPrice(1,2,3,4,5));


//vairable scope
if(true){
    let a=10
    const b=21
    var c=32
}

console.log(a) //error
console.log(b) //error
console.log(c) //32


function one(){
    const username = "kavyansh"

    function two(){
        const website = "kavyansh.com"
        console.log(username)
    }
    //console.log(website) //error

    two()
}

one()


const addTwo = function(num){
    return num+2
}
addTwo(1)

const chai = () => {
    let username = "kavyansh"
    console.log(this.username) //undefined
}

const addTwoo = (num1, num2) => (num1+num2)
console.log(addTwo(1,2))


//IIFE
(function chai(num){
    console.log(`${num}`);
    console.log("DB Connected");
})(5); // ; imp here so that we can use IIFE next time too