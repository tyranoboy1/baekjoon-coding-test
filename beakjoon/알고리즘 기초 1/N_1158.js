class Node {
    constructor(value) {
        this.value = value
        this.next = null
    }
}

class Queue {
    constructor() {
        this.front = null
        this.rear = null
        this.size = 0
    }

    enQueue(value) {
        const newNode = new Node(value)
        if (!this.front) {
            this.front = this.rear = newNode
        } else {
            this.rear.next = newNode
            this.rear = newNode
        }
        this.size++
    }

    dequeue() {
        if (!this.front) {
            return null
        }
        const value = this.front.value
        this.front = this.front.next
        if (!this.front) this.rear = null
        this.size--
        return value
    }

    getSize() {
        return this.size
    }
}

// 파일 입력 받기 (테스트용)
let fs = require('fs')
let path = require('path')

const input = fs.readFileSync(path.join(__dirname, "../../input.txt")).toString().trim().split(' ')
const n = Number(input[0])
const k = Number(input[1])

const result = []
const queue = new Queue()

// 1부터 N까지 큐에 넣기
for (let i = 1; i <= n; i++) {
    queue.enQueue(i)
}

// K번째 사람을 제거하는 과정
while (queue.getSize() > 0) {
    // (K-1)번째까지 앞에서 빼서 뒤로 보냄 (회전)
    for (let i = 1; i < k; i++) {
        queue.enQueue(queue.dequeue())
    }
    // K번째 사람을 제거하고 결과에 추가
    result.push(queue.dequeue())
}

// 출력 형식 맞추기
console.log(`<${result.join(', ')}>`)

