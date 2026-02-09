// setTimeout(()=>console.log('async'), 10000);
// setInterval(()=>console.log('async'), 1000);





// new Promise((resolve, reject)=>{
//     setTimeout(()=>{
//         reject("Promise rejected");
//     }, 2000);
// }).then((message)=>{
//     console.log(message);
// }).catch((error)=>{
//     console.log("Error caught in catch block");
//     console.error(error);
// });




// function bakeCake(mycallBack){
//     console.log("i am baking the cake");
//     setTimeout(()=>{
//         console.log("the cake is ready");
//         mycallBack();
//     }, 3000);

// }
// bakeCake(()=>{
//     console.log("now i can eat the cake");
// });


// function delay(ms = 1000) {
//   return new Promise(resolve => setTimeout(resolve, ms))
// }
//  function foo() {
//   console.log('A')
// //   await delay()
// setTimeout(()=>{

// },2000);
//   console.log('B')
// }

// console.log('C')
// foo()
// console.log('D')


// write a program in js that you go kashmir using given patrol then i go or not


function goToKashmir(patrol){
    return new Promise((resolve, reject)=>{
        if(patrol >= 100){
            resolve("You can go to Kashmir");
        }else{
            reject("You cannot go to Kashmir");
        }
    });
}

goToKashmir(10).then((message)=>{
    console.log(message);
}).catch((error)=>{
    console.log(error);
});

