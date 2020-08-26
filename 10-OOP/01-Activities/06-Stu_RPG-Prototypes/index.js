function Character(name, profession, strength, hitpoints) {
    this.name = name;
    this.profession = profession;
    this.age = 1;
    this.strength = strength;
    this.hitpoints = hitpoints;
    this.stats = function () {
        console.log(this.name);
        console.log(this.profession);
        console.log(this.age);
        console.log(this.strength);
        console.log(this.hitpoints);
    }
}
    
let char1 = new Character("Bojangles", "belly dancer", 100, 150,);

let char2 = new Character ("Cleatus", "spoon player", 65, 50);

let char3 = new Character ("Siracha", "being hot", 60, 80);

let char4 = new Character ("Janga", "snake wrestler", 100, 90);


char1.stats();
char1.isAlive();
char1.levelUp();

char2.stats();
char2.isAlive();
char2.levelUp();

char3.stats();
char3.isAlive();
char3.levelUp();

char4.stats();
char4.isAlive();
char4.levelUp();


