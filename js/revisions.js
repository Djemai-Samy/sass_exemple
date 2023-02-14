console.log("Bonjour je suis un script."); //chaine de caractère - string

//1- Les variables:
//Déclarer des variables:
let firstName = "Samy";
let bonjour = "Bonjour je suis une variable de type chaine de caractères.";
console.log("variable firstName : ", firstName);
console.log("variable bonjour : ", bonjour);
console.log(console);
console.dir(document);

//Affecter une nouvelle valeur a la variable:
firstName = "John";
console.log("variable firstName : ", firstName);

//Déclarer une variable aillant une chaine de caractères: "Bonsoir!"
//Afficher la variable avec le console.log()
let greeting = "Bonsoir";
console.log("variable greeting : ", greeting);
//On ne peut pas déclarer deux fois la meme variable:
// let greeting = "Bonjour";

//2- Types:
//Les strings - chaine de caractères:
let textSimple = 'J"ai manger!';
console.log("variable textSimple : ", textSimple);
//Concatenation:
let greetUser = "Bonjour! " + firstName + ". Comment allez vous?";
console.log("variable greetUser : ", greetUser);

//Exercice:
//1- Déclarer 3 variables: nom, prenom, age.
//2- Afficher la phrase: Bonjour, (nom) (prenom). Vous avez (age).
let nom = "Djemai";
let prenom = "Samy";
let age = "28";

console.log(
  "Bonjour, " + nom + " " + prenom + ". Vous avez " + age + " ans."
);
console.log(`Bonjour, ${nom} ${prenom}. Vous avez ${age} ans.`);

//Les numbers:
let a = 25;
console.log(`nombre a = ${a}`);
//Les opération mathematiques:
let b = 10;

let add = a + b;
console.log("variables add :", add);

console.log("a - b = ", a - b);
console.log(`a + b = ${a + b}`);
console.log(`a x b = ${a * b}`);
console.log(`a / b = ${a / b}`);
console.log(`a / 0 = ${a / 0}`);

console.log(`a ^ b = ${a ** b}`);

console.log(`a % b = ${a % b}`);

let bool1 = true;
let bool2 = false;

//Opérateur logique:
// Egalité et inegalité:
console.log("a = b : ", a == b);

let bString = "10";
console.log("b = bString : ", bString === b);
let test = 0;
console.log(test == false);

console.log("b != bString : ", bString !== b);

console.log("a > b ", a > b);

console.log("a >= b ", a >= b);

// Condition if else
if(a > b){
  console.log("a est sup a b" );
}else{
  console.log("a est inf a b" );
}

let userAge = 20;
if(userAge >=18){
  console.log("Utilisateur majeur");
}else{
  console.log("Utilisateur mineur");
}

//Opérateur ternaire:
console.log( userAge >=18 ? "Utilisateur majeur" : "Utilisateur mineur" );
// condition ? si vrai : si faux;


let hobbies = [ "Programmation", "Graphisme", "Dessin" ];
console.log(hobbies[0]);
console.log(hobbies[1]);
console.log(hobbies);
let newSize = hobbies.push("Musique");
console.log(hobbies);
console.log(newSize);

for( let i = 0; i<=10; i++ ){
  console.log(i);
}

//Utiliser la boucle for pour afficher les nombres pairs entre 0 et 50.
// i = i + 2 / i += 2
// i = i + 1 / i++
for( let i = 0; i<=50; i +=2){
  console.log("nombre pair : ", i);
}

for( let i = 0; i<=25; i++){
  console.log("nombre pair : ", i * 2);
}

for( let i = 0; i<=50; i++){
  if(i % 2 == 0){
    console.log("nombre pair avec modulo : ", i );
  }
}

//Boucler sur un tableau:
for (let i = 0; i < hobbies.length; i++){
  console.log(`Boucle ${i} : ${hobbies[i]}`);
}

let index = 0;
while(index <= 50){
  console.log("Boucle while: ", index);
  index +=2;
}
//Type null.
//Type undefined.

//Fonctions:
function disBonjour(){
  console.log('Bonjour!!!')
}

disBonjour();
disBonjour();

function disBonjourUser(nom, prenom){
  console.log(`Bonjour, ${nom} ${prenom}!`)
}
disBonjourUser("Djemai","Samy");
disBonjourUser("Doe","John");

function getBonjour(nom, prenom){
  return `Bonsoir, ${prenom} ${nom}`
}

let variableBonjour = getBonjour("Samy","Djemai")
console.log(variableBonjour);

//Exercice:
//Créer 4 fonctions:
//- add(num1, num2) => num1 + num2
//- sub(num1, num2) => num1 - num2
//- div(num1, num2) => num1 / num2
//- mul(num1, num2) => num1 * num2
//Les utiliser avec num1 = 10 et num2 = 20.

//Fonction addition:
function addition(num1, num2){
  return num1 + num2;
}
//Utilisation directe
console.log("addition : ", addition(10, 20))
console.log("addition : ", addition(50, 100))

//Utilisation en passant par des variables
let a1 = 10;
let b1 = 20;
let addition10et20 = addition(a1, b1)
console.log('addition10et20 = ', addition10et20);

//Fonction soustraction:
function sub(x1, x2){
    return x1 - x2;
}
console.log("10 - 20 = ", sub(10, 20));
console.log("20 - 5 = ", sub(20, 5));

let sous = sub
console.log(sous);
console.log("20 - 5 = ", sous(20, 5));

//Fonction division anonyme:
let div = function(num1, num2){
  if(num2 == 0){
    return 'On ne peut diviser pas zero!'
  }
  return num1 / num2;
}
console.log("20 / 10 = ", div(20, 10));
console.log("20 / 0 = ", div(20, 0));

//Fonction multiplication anonyme:
let mul = (num1, num2)=>{
  return num1 * num2
}

console.log("20 x 10 = ", mul(20, 10));

let user1 = {
  email:"sam.djm93@gmail.com",
  fistName:"Samy",
  lastName:"Djemai",
  age:20,
  isMajeur:true,
  hobbies:["Programmation", 'Dessin', 'Musique'],
  afficheUser: function(){
    console.log(`Bonjour je suis ${this.lastName} ${this.fistName}. Mon email c'est ${this.email}.`);
  },
  afficheHobbies:function(){
    console.log("Mes hobbies sont:");
    for(let i = 0; i < this.hobbies.length; i++){
      console.log(`${i+1}- ${this.hobbies[i]}`);
    }
  },
  afficheMajeur: function(){
    // console.log( this.isMajeur ? "Je suis majeure!" : "Je suis mineur" )
    if(this.isMajeur && this.age >= 18){
      console.log("Je suis majeure!")
    }else{
      console.log("Je suis mineur" )
    }
  }
}
console.log('user1 email:', user1.email);
console.log("Hobby 1 de user 1 :", user1.hobbies[0]);

user1.afficheUser();
user1.afficheHobbies();
user1.afficheMajeur()
//Créer deux fonctions:
// afficheHobbies: Utiliser une boucle pour afficher les hobbies de user1.
// afficheMajeur: Utiliser une condition pour afficher si user1 est majeur ou mineur

//Déclaration d'une classe
class User{
  constructor(email, firstName, lastName, age){
    this.email = email;
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.isMajeur = age >= 18;
    
    this.afficheUser = function(){
      console.log(`Bonjour je suis ${this.lastName} ${this.firstName}. Mon email c'est ${this.email}.`);
    }
    
    this.afficheHobbies = function(){
      console.log("Mes hobbies sont:");
      for(let i = 0; i < this.hobbies.length; i++){
        console.log(`${i+1}- ${this.hobbies[i]}`);
      }
    }
    
    this.afficheMajeur = function (){
      console.log(this.isMajeur ? "Je suis majeure!" : "Je suis mineur!")
    }
  }
}

//Instancier un objet depuis la classe User:
let utilisateur1 = new User("John.Doe@exemple.com", "Doe", "John", 30)
let utilisateur2 = new User("Sam@exemple.com", "Sam", "Sam", 16)
console.log("utilisateur email : ", utilisateur1.email);
utilisateur1.afficheUser()
console.log(utilisateur1)

utilisateur2.afficheMajeur();

//Exercice: 
// Créer une classe Eleve: 
// attributs: nom, prenom, note
// fonctions: afficheEleve => je suis nom prenom. Ma note est de note.

//Instancier deux élèves.

class Eleve{
  constructor(nom, prenom, note){
    this.nom = nom;
    this.prenom = prenom;
    this.note = note;
  }
  afficheEleve(){
    console.log(`Je suis ${this.nom} ${this.prenom}. Ma note est de ${this.note}.`)
  }
}

let eleve1 = new Eleve("Djemai", "Samy", 13);
let eleve2 = new Eleve("Doe", "John", 15);
eleve1.afficheEleve();
eleve2.afficheEleve();

///
class Voiture{
  constructor(marque, kilometr){
    this.marque = marque;
    this.kilometr = kilometr;
  }

  getMarque(){
    return this.marque;
  }
  getKilometr(){
    return this.kilometr;
  }

  afficheVoiture(){
    console.log(`Voiture ${this.marque}.`)
  }
  static getNombreRoues(){
    return 4;
  }
}
let voiture1 = new Voiture("Clio", 15000);
voiture1.afficheVoiture()

 console.log(Voiture.getNombreRoues()) 