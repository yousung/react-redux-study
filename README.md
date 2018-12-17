# 리액트 리덕스 공부

### 리덕스 생성

1. [액션](https://github.com/yousung/react-redux-study/blob/master/src/actions/ActionTypes.js)과 [액션함수](https://github.com/yousung/react-redux-study/blob/master/src/actions/index.js) 생성

```
const INCREMENT = 'INCREMENT'
```

```
const increment = () => ({
    type : INCREMENT
})
```
2. [리듀서](https://github.com/yousung/react-redux-study/blob/master/src/reducers/color.js) & [리듀서 합치기](https://github.com/yousung/react-redux-study/blob/master/src/reducers/index.js)
```
const counter = (state = init, action) => {
    switch(action.type){
        case action.INCREMENT :
        return {}
    }
    (...)
}
```
3. [스토어 생성](https://github.com/yousung/react-redux-study/blob/master/src/index.js)
```
const { createStore } = Redux
const sotre = createStore(counter)
```

### 리덕스 규칙

1. 스토어는 단한개
2. state는 읽기 전용
3. 변화는 순수 함수로 구성

### TODO
[x] ~~리덕스 정리하기~~
[ ] 반복학습
[ ] 리덕스 간편 활용하기 정리 (immutable.js, ducks 구조,  redux-actions)
