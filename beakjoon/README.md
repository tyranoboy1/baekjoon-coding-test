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