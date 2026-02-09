let n =[1,3,553,234,4];
let [a, b, c, ...d] = n;
console.log(a);
console.log(b);
console.log(c);
console.log(d);

let obj = {
    name: "Alice",
    age: 20,    
    city: "New York"
};
let {name, age, ...rest} = obj;
console.log(name);
console.log(age);
console.log(rest);
let employee={
    name:"bob",
    position:"developer",
    salary:50000
}
let {name:empName, position:empPosition, ...empRest} = employee;
employee.position = "manager";
console.log(empName);
console.log(empPosition);
console.log(empRest);
let s = employee.name;
console.log(s);