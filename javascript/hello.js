// alert("Hello world");

//let message = "Hello World";
//alert(message);
//message = "Hello World";
//alert(message);

const LINK_COLOR = "'ff0000";
console.log("link bitte in der Farbe", LINK_COLOR);

let highscore = 520233;
console.log(highscore / 10);

let firstname = "John";
let lastname = "Smith";

let fullname = "Jeffrey Lebowski";
console.log(fullname);

let template = "Dein Highscor sind $(highscore) Punkte";

let isOver18 = true;
console.log(isOver18);

let age = 19;
console.log("über 18?", age > 18);

let participants = ["John", "Jane", "Max"];
console.log(participants)
console.log("Einträge im Array:", participants.length)
console.log(participants[2]);

let gameHighscores = [2099, 3010, 3333, 5000];
console.log(gameHighscores);

let user = {
    firstname: "John",
    lastname: "Smith",
    age: 25
};

console.log(user)
console.log(user.firstname)
user.highscore = 200;
user ["highscore ever"
 = 400];
console.log(user)

let a = 2;
let b = 4;
console.log(a + b);
console.log(b / (a - 1));
a++;
console.log(a);

let myAge = prompt("Wie alit bist du");
console.log("Du bist ${myAge} Jahre alt")
console.log("über 18? ${myAge > 18}")

if (myAge > 18) {

    console.log("Glückwunsch über 18");

} else {

    console.log("Leider unter 18")

}

//Schleifen

for (let index = 0; index < 10; index++) {
    console.log = ("Schleife $(i)");
    
}

for (let J= 0; J < participants; J++) {
    const participant = array[J];
    console.log("Teilnehmr* in ${J} $ {participant})
    
}

participants.forEach(participant => {
    console.log("Teilnehmer* in ${"participant"}
})

//Funktionen

function showAge(birthYear) {
    console.log("Du bist ca. ${2020 - birthYear} Jahre alt");
    
}

showAge(1964);
showAge(1977);

function calcAge(birthYear) {
    return 2020 -birthYear;
    
}
