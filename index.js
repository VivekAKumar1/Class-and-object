const student = {
    fullNmae : "vivek",
    marks : 99.6,
    printMarks : function (){
        console.log("markes =", this.marks);//here 'this' object
    },
};
console.log(student);


let arr =  ["apple", "mango", "anjir"];
arr.push("banana");
arr.pop([1]);
console.log(arr);


// ===========================CLASS=================================

class car {
    constructor(brand, milaege){
        console.log("creating the object"); // method one
        this.brand = brand;
        this.milaege  = milaege;
    }
    start (){
        console.log("start the car");
    }
    stop (){
        console.log("off the car engine");
    }

    setBrand (brand){ //this brand is arrgument // Method two
        this.barandName = brand;//'this' its is working on the each obejct.
    }
}

let supra = new car ("King Supra", 14);
console.log(supra);
supra.setBrand("King Supra", 14);
//both method in one code
supra.start();
supra.stop();

// ===================================Inheritance===============================

class Parent {
    constructor (){
        this. species = "Homo Species"
    }
    hello(){
        console.log("hello");
    }
}

class child extends Parent{};

let obj = new child();

// second example


class all {
    cal(){
        const aNumber = Number(prompt("Enter the value of A :", ""));
        console.log("The value of A :" ,aNumber);
        const bNumber = Number(prompt("Enter the value of B :", ""));
        console.log("The value of B :" ,bNumber);
        let sum =  aNumber + bNumber;
        let sub = aNumber - bNumber;
        let mul = aNumber * bNumber;
        let div = aNumber/bNumber;
        console.log("Additon of the two value : ",sum);
        console.log("Subtration of the two value : ",sub);
        console.log("multiplication of the two value : ",mul);
        console.log("devide of the two value : ",div);
    }
}
let obj1= new all();
obj.cal();

class Person {
    constructor (){
        this.species = "Homo Species"
    }
    eat(){
        console.log("eat");
    }
}

class doctor extends Person {
    constructor (branch){
        super(); //to invoke parent class constructor
        this.depart = branch;
    }
    work (){
        console.log("work");
    }
}

let Vivek = new doctor("Heart");


class Person {
    constructor (name){
        this.name = name;
        this.species = "Homo Species"
    }
    eat(){
        console.log("eat");
    }
}

class doctor extends Person {
    constructor (name) {
        super(name); //to invoke parent class constructor
        
    }
    
    work (){
        super.eat();
        console.log("work");
    }
}

let newMen = new doctor("vivek");



let data = "some information";

class User {
    constructor (name, email){
        this.name = name;
        this.email = email;
    }
    viewData (){
        console.log("Data = ", data);
    }      
}

class Admin extends User {
    constructor (name, email){
        super (name, email);
    }
    editData (){
        data = "some new information"
        console.log(data)
    }
}

let stduent1 = new User("anurag", "abc@gmail.com");
let stduent2 = new User("vedant", "ahd@gmail.com");

let Admin1  = new Admin("admin", "admin@gamail.com");





    