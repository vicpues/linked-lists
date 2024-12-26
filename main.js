const LinkedList = require("./linked-list");

const list = new LinkedList();

list.append("dog");
list.append("cat");
list.append("parrot");
list.append("hamster");
list.append("snake");
list.append("turtle");
console.log(list.toString());
list.insertAt("crocodile", 1);
console.log(list.toString());
list.removeAt(1);
console.log(list.toString());
