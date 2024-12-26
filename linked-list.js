class _Node {
    constructor(value) {
        this.value = value ? value : null;
        this.nextNode = null;
        this.prevNode = null;
    }
}

class LinkedList {
    #head = null;
    #tail = null;
    #size = 0;

    static from(array) {
        const list = new LinkedList();
        for (let value of array) {
            list.append(value);
        }
        return list;
    }

    append(value) {
        const newNode = new _Node(value);
        this.#size++;
        if (this.#head === null) {
            this.#head = newNode;
            this.#tail = newNode;
        } else {
            newNode.prevNode = this.#tail;
            this.#tail.nextNode = newNode;
            this.#tail = newNode;
        }
    }

    prepend(value) {
        const newNode = new _Node(value);
        this.#size++;
        if (this.#head === null) {
            this.#head = newNode;
            this.#tail = newNode;
        } else {
            newNode.nextNode = this.#head;
            this.#head.prevNode = newNode;
            this.#head = newNode;
        }
    }

    get size() {
        return this.#size;
    }

    get head() {
        return this.#head.value;
    }

    get tail() {
        return this.#tail.value;
    }

    at(index) {
        return this.#nodeAt(index).value;
    }

    #nodeAt(index) {
        this.#indexHandler(index);
        let current = this.#head;
        for (let i = 0; i < index; i++) {
            current = current.nextNode;
        }
        return current;
    }

    #indexHandler(index, includeTail = true) {
        if (typeof index !== "number" || index !== Math.floor(index))
            throw new TypeError(`Index must be a whole number`);
        if (index < 0) throw new RangeError(`Index must be 0 or higher!`);
        if (index >= this.#size || (includeTail && index > this.#size))
            throw new RangeError(`Index "${index}" does not exist!`);
    }

    pop() {
        if (this.#size === 0) return null;
        this.#size--;
        const node = this.#tail;
        const newTail = this.#tail.prevNode;
        newTail.nextNode = null;
        this.#tail = newTail;
        return node.value;
    }

    shift() {
        if (this.#size === 0) return null;
        this.#size--;
        const node = this.#head;
        const newHead = this.#head.nextNode;
        newHead.prevNode = null;
        this.#head = newHead;
        return node.value;
    }

    contains(value) {
        if (this.#size === 0) return false;
        let current = this.#head;
        while (current.nextNode !== null) {
            if (current.value === value) return true;
            current = current.nextNode;
        }
        return false;
    }

    find(value) {
        if (this.#size === 0) return null;
        let current = this.#head;
        let index = 0;
        while (current.nextNode !== null) {
            if (current.value === value) return index;
            current = current.nextNode;
            index++;
        }
        return null;
    }

    toString() {
        if (this.#size === 0) return "null";
        let string = "";
        let current = this.#head;
        while (current !== null) {
            string += `( ${current.value} ) -> `;
            current = current.nextNode;
        }
        return string + "null";
    }

    insertAt(value, index) {
        this.#indexHandler(index, false);
        this.#size++;
        const newNode = new _Node(value);
        let oldNode = this.#nodeAt(index);
        newNode.prevNode = oldNode.prevNode;
        newNode.nextNode = oldNode;
        oldNode.prevNode.nextNode = newNode;
        oldNode.prevNode = newNode;
    }

    removeAt(index) {
        this.#indexHandler(index);
        this.#size--;
        let node = this.#nodeAt(index);
        node.prevNode.nextNode = node.nextNode;
    }
}

module.exports = LinkedList;
