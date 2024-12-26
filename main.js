const LinkedList = require("./linked-list");

const list = new LinkedList();

list.append("dog");
list.append("cat");
list.append("parrot");
list.append("hamster");
list.append("snake");
list.append("turtle");

console.log(list.size); // 6
console.log(list.toString()); // ( dog ) -> ( cat ) -> ( parrot ) -> ( hamster ) -> ( snake ) -> ( turtle ) -> null

list.insertAt("crocodile", 1);
console.log(list.size); // 7
console.log(list.toString()); // ( dog ) -> ( crocodile ) -> ( cat ) -> ( parrot ) -> ( hamster ) -> ( snake ) -> ( turtle ) -> null

list.removeAt(1);
console.log(list.size); // 6
console.log(list.toString()); // ( dog ) -> ( cat ) -> ( parrot ) -> ( hamster ) -> ( snake ) -> ( turtle ) -> null

list.prepend("cow");
console.log(list.size); // 7
console.log(list.toString()); // ( cow ) -> ( dog ) -> ( cat ) -> ( parrot ) -> ( hamster ) -> ( snake ) -> ( turtle ) -> null

list.size = 10;
console.log(list.size); // 7

console.log(list.at(1)); // dog

console.log(list.pop()); // turtle
console.log(list.toString()); // ( cow ) -> ( dog ) -> ( cat ) -> ( parrot ) -> ( hamster ) -> ( snake ) -> null

console.log(list.shift()); // cow
console.log(list.toString()); // ( dog ) -> ( cat ) -> ( parrot ) -> ( hamster ) -> ( snake ) -> null

console.log(list.contains("parrot")); // true
console.log(list.contains("dragon")); // false

console.log(list.find("parrot")); // 2

const pokemon = LinkedList.from(["vulbasaur", "squirtle", "charmander"]);
console.log(pokemon.toString()); // ( vulbasaur ) -> ( squirtle ) -> ( charmander ) -> null

pokemon.replaceAt("charizard!!", 2);
console.log(pokemon.toString()); // ( vulbasaur ) -> ( squirtle ) -> ( charizard!! ) -> null

pokemon.append("treecko").append("mudkip").append("torchic");
console.log(pokemon.toString()); // ( vulbasaur ) -> ( squirtle ) -> ( charizard!! ) -> ( treecko ) -> ( mudkip ) -> ( torchic ) -> null

const emptyList = new LinkedList();

try {
    emptyList.at(2);
} catch (e) {
    console.log(e.message); // Index "2" does not exist!
}

try {
    emptyList.at("elephant");
} catch (e) {
    console.log(e.message); // Index must be a whole number
}

try {
    emptyList.at(-2);
} catch (e) {
    console.log(e.message); // Index must be 0 or higher!
}

try {
    emptyList.insertAt("hamster", 0);
    console.log(emptyList.toString()); // ( hamster ) -> null
} catch (e) {
    console.log(e.message);
}
