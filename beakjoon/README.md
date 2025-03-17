## NOTE 
> 새롭게 알게 된 개념 & 메서드 정리


### charCodeAt()
> 문자열에서 특정 문자의 유니코드 값을 반환하는 메서드

```javascript
console.log("A".charCodeAt(0)); // 65
console.log("a".charCodeAt(0)); // 97
```

### fromCharCode()
> 유니코드 숫자를 문자로 변환하는  메서드
```javascript
console.log(String.fromCharCode(65)); // 'A'
console.log(String.fromCharCode(97)); // 'a'
```

### repeat()
> 문자열을 지정한 횟수만큼 반복, 붙인 새로운 문자열 반환
```javascript
console.log("Hello".repeat(3)); 
```

### JS 출력 방법
```javascript
// 역슬래시 \
console.log("\\");

// 큰따옴표 "
console.log("\"")
```

### Queue (연결리스트 구현)
```javascript
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
        if(!this.front) {
            const newNode = new Node(value)
            this.front = this.rear = newNode
        }
        else {
            this.rear.next = newNode
            this.rear = newNode
        }
        this.size++
    }
    deQueue() {
        if(!this.front) {
            return null
        }
        const value = this.front.value
        this.front = this.front.next
        if(!this.front) this.rear = null
        this.size--
        return value
    }
    getSize() {
        return this.size
    }
}
```

### Deque (연결리스트 구현)
```javascript
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
    pushFrontDeque(value) {
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
    pushBackDeque(value) {
        const newNode = new Node(value)
        if(!this.rear) {
            this.front = this.rear = newNode
        }
        else {
            newNode.prev = this.rear
            this.rear.next = newNode
            this.rear = newNode
        }
        this.size++
    }
    popFront() {
        if (!this.front) return -1;
        const value = this.front.value
        this.front = this.front.next
        if(this.front) this.front.prev = null
        else this.rear = null
        this.size--;
        return value
    }
    popBack() {
        if(!this.rear) return -1
        const value = this.rear.value
        this.rear = this.rear.prev
        if(this.rear) this.rear.next = null
        else this.front =null
        this.size--
        return value
    }
    
    getSize() {
        return this.size
    }
}
```
