//

class Animal {
    name : string;
    species : string;
    sound : string;

    constructor(name:string,species:string,sound : string){
        this.name = name;
        this.species = species;
        this.sound = sound;
    }
    makingSound(){
        console.log(`${cat.name} is making sound ${cat.sound}`);
    }
}

const dog = new Animal("dogesh bhai","dog", "Ghew ghew");

const cat = new Animal("cat bhai","cat", "mewa mewa");

// console.log(cat.sound);
cat.makingSound();