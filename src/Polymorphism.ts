//
class Person {
    getSleep(){
        console.log(`I sleep for 8 hours`);
    }
}
class Student extends Person {
    getSleep(){
        console.log(`I am a normal happy person.I sleep for 6 hours`);
    }
}
class NextLevelDeveloper extends Person {
    getSleep(){
        console.log(`I am a next level developer.I sleep for 5 hours`);
    }
}
const getSleepingHours = (param : Person)=> {
    param.getSleep();
};

const person1 = new Person()
const person2 = new Student()
const person3 = new NextLevelDeveloper()

getSleepingHours(person3);