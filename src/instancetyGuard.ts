//

class Person {
    name : string;

    constructor(name:string){
        this.name = name;
    }

    getSleep(numOfHours : number){
        console.log(`${this.name} doinik ${numOfHours} ghonta ghumai`);
    }
}

class Student extends Person {
    constructor(name: string) {
        super(name); 
    }

    doStudy(numOfHours : number){
        console.log(`${this.name} doinik ${numOfHours} ghonta study kore`);
    }
}
class Teacher extends Person {
    constructor(name: string) {
        super(name); 
    }

    takeClass(numOfHours : number){
        console.log(`${this.name} doinik ${numOfHours} ghonta class nai`);
    }
}

const isStudent = (user: Person) =>{
    return user instanceof Student;
}
const isTeacher = (user: Person) =>{
    return user instanceof Teacher;
}
const getUserInfo = (user: Person)=>{
    if(isStudent(user)){
        user.doStudy(10);
    } else if(isTeacher(user)){
        user.takeClass(5);
    }else {
        user.getSleep(4);
    }
}
const student1 = new Student("Mr. student");
const Teacher1 = new Teacher("Mr. Teacher");
getUserInfo(student1);
