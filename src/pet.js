
const virtualPet = {
    minAge: 0,
    maxAge: 30,
    minHunger: 0,
    maxHunger: 10,
    minFitness: 0,
    maxFitness: 10,
    errorMessage: 'Your pet is no longer alive :('
}

class Pet {
    constructor (name) {
        this.name = name;
        this.age = virtualPet.minAge;
        this.hunger = virtualPet.minHunger;
        this.fitness = virtualPet.maxFitness;
        this.children = [];
    }

    get isAlive () {
        return this.fitness > virtualPet.minFitness && this.hunger < virtualPet.maxHunger && this.age < virtualPet.maxAge;
    }
   
    growUp () {
        if (!this.isAlive) throw new Error (virtualPet.errorMessage);

        this.age ++;
        this.hunger += 5;
        this.fitness -= 3;
    }

    walk () {
        if (!this.isAlive) throw new Error (virtualPet.errorMessage);
        
        if (this.fitness + 4 <= virtualPet.maxFitness) {
            this.fitness += 4;
        } else {
            this.fitness = virtualPet.maxFitness;
        };
    }

    feed () {
        if (!this.isAlive) throw new Error (virtualPet.errorMessage);

        if (this.hunger - 3 >= virtualPet.minHunger) {
            this.hunger -= 3;
        } else {
            this.hunger = virtualPet.minHunger;
        };
    }

    checkUp () {
        if (!this.isAlive) throw new Error (virtualPet.errorMessage);

        if (this.fitness <= 3 && this.hunger < 5) {
            return 'I need a walk';
        }
        if (this.hunger >= 5 && this.fitness > 3) {
            return 'I am hungry';
        }
        if (this.fitness <= 3 && this.hunger >= 5) {
            return 'I am hungry AND I need a walk';
        }
        return 'I feel great!';
    }
//to create the pet from inside another pet
    haveBaby(babyName) {
        if (!this.isAlive) throw new Error (virtualPet.errorMessage);

        const child = new Pet (babyName);
        this.children.push(child);
    }
//to use dependency injection to create a child pet
    adoptChild(child) {
        if (!this.isAlive) throw new Error (virtualPet.errorMessage);

        this.children.push(child);
    }
}


module.exports = { Pet };