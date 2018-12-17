# 리액트 리덕스 공부

## 리덕스 생성

1. 액션과 액션함수 생성
```
const INCREMENT = 'INCREMENT'
```
```
const increment = () => ({
    type : INCREMENT
})
```
2. 리듀서
```
const counter = (state = init, action) => {
    switch(action.type){
        case action.INCREMENT :
        return {}
    }
    (...)
}
```
3. 스토어
```
const { createStore } = Redux
const sotre = createStore(counter)
```

## 리덕스 규칙

1. 스토어는 단한개
2. state는 읽기 전용
3. 변화는 순수 함수로 구성

