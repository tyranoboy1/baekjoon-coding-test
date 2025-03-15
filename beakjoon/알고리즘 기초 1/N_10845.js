let fs = require('fs')
let path = require('path')

let input = fs.readFileSync(path.join(__dirname, "../../input.txt")).toString().trim().split('\n')

class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class Queue {
    constructor() {
        this.front = null;
        this.rear = null;
        this.size = 0;
    }

    enqueue(value) {
        const newNode = new Node(value);
        if (!this.front) {
            this.front = this.rear = newNode;
        } else {
            this.rear.next = newNode;
            this.rear = newNode;
        }
        this.size++;
    }

    dequeue() {
        if (!this.front) return '-1';
        const value = this.front.value;
        this.front = this.front.next;
        if (!this.front) this.rear = null;
        this.size--;
        return value;
    }

    getSize() {
        return String(this.size);
    }

    isEmpty() {
        return this.size === 0 ? '1' : '0';
    }

    getFront() {
        return this.front ? this.front.value : '-1';
    }

    getBack() {
        return this.rear ? this.rear.value : '-1';
    }
}

const n = Number(input[0]);
const queue = new Queue();
const result = [];

for (let i = 1; i <= n; i++) {
    let [a, b] = input[i].split(' ');

    switch (a) {
        case 'push':
            queue.enqueue(b);
            break;
        case 'pop':
            result.push(queue.dequeue());
            break;
        case 'front':
            result.push(queue.getFront());
            break;
        case 'back':
            result.push(queue.getBack());
            break;
        case 'size':
            result.push(queue.getSize());
            break;
        case 'empty':
            result.push(queue.isEmpty());
            break;
    }
}

console.log(result.join('\n'));
