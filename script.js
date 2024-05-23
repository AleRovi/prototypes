let x = new Object();
let y = {};
console.log(x.constructor);
console.log(x.__proto__.constructor);
console.log(y.constructor === x.constructor);
console.log(y.__proto__ === x.__proto__);
console.log(y.constructor.prototype === y.__proto__);


function Alien(planetName, canFly){
    this.planetName = planetName;
    this.canFly = canFly;
}

Alien.prototype.attack = function(target) {
    console.log(`L'alieno proveniente da ${this.planetName} attacca ${target}`);
}
let a1 = new Alien("Marte", false);
a1.attack("Ciccio");
console.log(a1.constructor);
console.log(typeof a1);
console.log(a1.__proto__.__proto__ === x.__proto__);



function Predator(planetName, canFly, weapon){
    Alien.call(this, planetName, canFly);
    this.weapon = weapon;
}
//Predator.prototype = new Alien();
Predator.prototype = Object.create(Alien.prototype);
Predator.prototype.attack = function(target){
    Alien.prototype.attack.call(this, target);
    console.log(`Il predator proveniente dal pianeta ${this.planetName} ha ucciso ${target} con la sua ${this.weapon}.`)
}
console.log(Predator.prototype === Predator.__proto__);
let p1 = new Predator("Giove", true, "Laser gun");
console.log(p1.__proto__ === Predator.prototype)
console.log(p1.constructor);
Predator.prototype.constructor = Predator;
console.log(p1.constructor);
console.log(p1.weapon);
console.log(p1.planetName);

//console.log(window.planetName);


p1.attack("Pippo");
