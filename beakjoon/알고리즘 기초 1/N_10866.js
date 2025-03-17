class Node {
    constructor(value) {
        this.value = value
        this.next = null
        this.prev = null
    }
}
class Deque {
    constructor() {
        this.front = null
        this.rear = null
        this.size = 0
    }
    pushFront(value){
        const newNode = new Node(value)
        if(!this.front) {
            this.front = this.rear = newNode
        }
        else {
            newNode.next = this.front
            this.front.prev = newNode
            this.front = newNode
        }
        this.size++
    }
    pushBack(value) {
        const newNode = new Node(value);
        if (!this.rear) {
            this.front = this.rear = newNode;
        } else {
            newNode.prev = this.rear;
            this.rear.next = newNode;
            this.rear = newNode;
        }
        this.size++;
    }
    popFront() {
        if (!this.front) return -1;
        const value = this.front.value;
        this.front = this.front.next;
        if (this.front) this.front.prev = null;
        else this.rear = null;
        this.size--;
        return value;
    }
    popBack() {
        if (!this.rear) return -1;
        const value = this.rear.value;
        this.rear = this.rear.prev;
        if (this.rear) this.rear.next = null;
        else this.front = null;
        this.size--;
        return value;
    }
    getSize() {
        return this.size
    }
    getFront() {
        return this.front ? this.front.value : -1
    }
    getBack() {
        return this.rear ? this.rear.value : -1
    }
    isEmpty() {
        return this.size === 0 ? 1 : 0
    }
}

let fs = require('fs')
let path = require('path')

const input = fs.readFileSync(path.join(__dirname, "../../input.txt")).toString().trim().split('\n')
const deque = new Deque()

const n = Number(input[0])
const result = []

for(let i = 1; i <= n; i++) {
    const [command, number] = input[i].split(' ')
    const num = Number(number)

    switch (command) {
        case 'push_front':
            deque.pushFront(num);
            break;
        case 'push_back':
            deque.pushBack(num)
            break;
        case 'pop_front':
            result.push(deque.popFront(num))
            break;
        case 'pop_back':
            result.push(deque.popBack(num))
            break;
        case 'size':
            result.push(deque.getSize())
            break;
        case 'empty':
            result.push(deque.isEmpty())
            break;
        case 'front':
            result.push(deque.getFront())
            break;
        case 'back':
            result.push(deque.getBack())
            break;
    }
}
console.log(result.join('\n'))