// function demo(){
//     console.log("Demo function");
// }
// let add = (x, y) => x + y;
// console.log(add(3, 4));
// console.log(add(6,4));
class student{
    
constructor(name, age){
    this.name = name;
    this.age = age;
}
}
let stu1 = new student("Alice", 20);
console.log(stu1.name);





let arr = [1, 2, 3, 7, 5];
arr.sort((a,b)=> b - a  );

for(let i of arr){
    console.log(i);
}
 let a =9;
 let b = 8;
 let get = a > b ? "a is greater" : "b is greater";
 console.log(get);
//  if(a>b){
//     console.log("a is greater");
//  }
//     else{
//     console.log("b is greater");
//     }