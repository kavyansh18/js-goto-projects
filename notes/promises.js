const promiseOne = new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log('async task completed');
        resolve();
    },1000)
})
promiseOne.then(function(){
    console.log('promiseOne consumed');
})

new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log('async 2 task completed');
        resolve();
    },1000)
}).then(function(){
    console.log('promiseTwo consumed');
})

const promiseThree = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve({name: 'John', age: 30});
    },1000)
})

promiseThree.then(function(data){
    console.log(data);
})

const promiseFour = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = false;
        if(!error){
            resolve({username: 'John', age: 30});
        }else{
            reject('Error occurred');
        }
    },1000)
})

promiseFour
.then((user) => {
    console.log(user);
    return user.username
})
.then((username) => {
    console.log(username);
})
.catch((error) => {
    console.log(error);
})
.finally(() => {
    console.log('Promise completed either resolved or rejected');
})

const promiseFive = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true;
        if(!error){
            resolve({username: 'kavyansh', age: 20});
        }else{
            reject('Error kavyansh got mad');
        }
    },1000)
})

async function consumePromiseFive(){
        try {
            const response = await promiseFive
            console.log(response);
        } catch (error) {
            console.log(error);
        }
}

consumePromiseFive();

// async function getAllUsers(){
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')
//         const data = await response.json();
//         console.log(data);
//     } catch (error) {
//         console.log('some error');
//     }
// }
// getAllUsers()

fetch('https://jsonplaceholder.typicode.com/users')
.then(response => response.json())
.then(data => console.log(data))
.catch((err)=>console.log(err)) 