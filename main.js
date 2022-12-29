//object literal
let person={
    name:"pavan",
    class:"12th"
}
console.log(person)
//
let obj1 = new Object();
        obj1.name = "pavan";
        obj1.age = 21,
        console.log(obj1)
//object constructor
function Obj3(name, age){
    this.name = name;
    this.age = age;
}
let obj2 = new Obj3('pavan' , 23)
console.log(obj2)

function value(Name,age){
    this.Name=Name;
    this.age=age;
}
let pav=new value("anu","23")
console.log(pav)

//4Q
function person1(){
    this.name='john',
    this.age=23
}
const person12 = new person1();
console.log(person12)
//console.log(person12.prototype)
//6q
function child(name, age){
    this.name = name;
    this.age = age;
};
function description(name, age, id, cls,gender){
    child.call(this, name, age, id, cls,gender);
    this.id = id;
    this.cls=cls;
    this.gender = gender;
};
let student1 = new child('Nithin', 135);
let student2 = new description('pavn', 118, 143, 'Btech','male');
console.log(student1);
console.log(student2);
//7call backs
function callback(greeting){
    console.log("congratulations");
    greeting();
};
function show(){
    console.log("hey are you there");
};
callback(show);