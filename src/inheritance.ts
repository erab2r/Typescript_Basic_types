class Parent {
    name : string;
    age : number;
    address : string;

    constructor(name:string,age:number, address: string){
        this.name = name;
        this.age = age;
        this.address = address;
    }
    getSound(numOfHours : number){
        console.log(`${this.name} ${numOfHours} ghonta ghumai`);
    }

}



class Student extends Parent {}

const student1 = new Student("Mr Fakibaaz", 18, "Bangladesh");
student1.getSound(15);


class Teacher  extends Parent {
    designation : string;

    constructor(name:string,age:number,address: string,designation : string){

        super(name,age,address)
        this.designation = designation;
    }
    takeClass(numoFClass : number){
        console.log(`${this.name} ${numoFClass}  ghonta class nei`);
    }
}

const teacher1 = new Teacher(
    "Mr smart teacher",
    25,
    "ctg",
    "Senior teacher"
);
teacher1.takeClass(4);