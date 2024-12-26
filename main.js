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
