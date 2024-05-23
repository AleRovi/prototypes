function Persona(firstname, lastname){
    this.firstname = firstname;
    this.lastname = lastname;
    
}
Persona.prototype.greet = function(){
    console.log(`Ciao sono ${this.firstname} ${this.lastname}`);
}
Persona.prototype.work = function(){
    console.log(`Io non lavoro perchè sono sardo`);
}
let p = new Persona("Ciccio", "Pasticcio");
p.greet();
p.work();

function Developer(firstname, lastname, favouriteLanguage){
    Persona.call(this, firstname, lastname);
    this.favouriteLanguage = favouriteLanguage;
}
Developer.prototype = Object.create(Persona.prototype);

Developer.prototype.sleep = function(){
    console.log(`Sogno di programmare anche quando dormo.`);
}
Developer.prototype.work = function(){
    console.log(`Adesso mi tocca lavorare perchè mi sono trasferito a Milano.`)
}
let d1 = new Developer("Pico", "DePaperis", "javascript");
d1.sleep();
d1.work();
console.log(Developer.__proto__ === Persona.__proto__);
console.log(Developer.constructor);
function f1(){

}
let z = new f1();