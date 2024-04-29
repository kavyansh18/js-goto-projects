document.getElementById('title')
document.getElementById('title').getAttribute('class') //'heading'
document.getElementById('title').setAttribute('class', 'test heading')

title.style.backgroundColor = 'green'

title.textContent //give content whoose display is none too
title.innerHTML //gives tas too
title.innerTe
title.innerText //does not give content whoose display is none

document.querySelector('h1') //gives first h1
document.querySelector('.heading') //gives first element with class heading

const tempLiList = document.querySelectorAll('li') //gives all li node list
tempLiList[0].style.color = 'red'

tempLiList.forEach((li) => {
    li.style.color = 'blue'
})

const tempClassList = document.getElementsByClassName('list-item') //gives html collection
const myConvArray = Array.from(tempClassList) //converts html collection to array
myConvArray.forEach((li) => {
    li.style.color = 'green'
})

const parent = document.querySelector('.parent')
// console.log(parent);
// console.log(parent.children) //gives html collection;
// console.log(parent.childNodes) //gives node list;
// console.log(parent.children[1].innerHTML) //gives inner html of 2nd child;

for(let i=0; i<parent.children.length; i++) {
    console.log(parent.children[i].innerHTML)
}
parent.children[1].style.color = "orange"
console.log(parent.firstElementChild) //returns the first element child, if it exists, otherwise null

const dayOne = document.createElement('.day')
console.log(dayOne);
console.log(dayOne.parentElement);
console.log(dayOne.nextElementSibling);

console.log("NODES: ", parent.childNodes);
