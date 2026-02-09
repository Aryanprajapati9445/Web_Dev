// const user={
//     name:"Anvjfe",
//     age:34,
//     Welcome:function(){
//         console.log(`${this.name} welcome to ES6`)
//         console.log(this.age)
//     }

// }
// // user.Welcome();
// employee={
//     name:"Abhishek",
//     age:"56",
//     display:function(){
//         console.log(`${this.name } is employee of KIET`);
//     },
//     test:function( name){
//         this.name=name;
//     },
// }
// employee.test("fendjhefgb");
// employee.display();

let a=5;
function outer(){
    let b=20
    function inner(){
        let c=30;
        console.log(a,b,c)

    }
    inner();
}
outer();
let abc={
    outer:function(){
        console.log("dfnjvn");
        inner=()=>{
            console.log("fndhfv");
        }
        inner();
    }

}
abc.outer();