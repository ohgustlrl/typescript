"use strict";
function getArrayLength(arr) {
    return arr.length;
}
const arr1 = [1, 2, 3];
const arr2 = ['a', 'b', 'c'];
const arr3 = [false, true, false];
getArrayLength(arr1);
getArrayLength(arr2);
getArrayLength(arr3);
// 위 처럼 arr 매개변수에 union 타입으로 속성을 줄 수도 있지만 아래와 같이 generic을 이용할 수 있다.
function getArrayLength2(arr) {
    return arr.length;
}
getArrayLength2(arr1);
getArrayLength2(arr2);
getArrayLength2(arr3);
const car = {
    name: 'car',
    color: 'red',
    option: {
        price: 1000
    }
};
const bike = {
    name: 'bike',
    color: 'black',
    option: true
};
const car1 = {
    name: 'car',
    color: 'red',
    option: {
        price: 1000
    }
};
const bike1 = {
    name: 'bike',
    color: 'black',
    option: true
};
// 아래와 같은 상황에서 함수에 매개변수가 두 개 이상인 경우 generic 사용법
// const makeArr = <T> (x: T) => {
//   return [x]
// }
// const array = makeArr(5);
// const array2 = makeArr('a')
const makeArr = (x, y) => {
    return [x, y];
};
const arr99 = makeArr(4, 5);
const arr98 = makeArr('a', 'b');
const makeArr1 = (x, y) => {
    return [x, y];
};
const arr97 = makeArr1('a', 'b');
// 제네릭을 extends 와 같이 사용해보기 
const makeFullName = (obj) => {
    return Object.assign(Object.assign({}, obj), { fullName: obj.firstName + " " + obj.lastName });
};
makeFullName({ firstName: "john", lastName: "doe", location: 'seoul' });
// 리액트에서 Generic
// ex) 함수에서의 Generic
// import React from 'react';
// 
// interface Props {
// name : string;
// }
// 
// const ReactComponent : React.FC<Props> = ({ nmae }) => {  // 컴포넌트에 props로 무엇이 올지 모르기에 Generic을 사용
// return <div>{name}</div>
// }
// ex) useState 에서의 Generic
// import React from 'react';
// 
// interface Props {
// name : string;
// }
// 
// const ReactComponent : React.FC<Props> = ({ nmae }) => {  
// const [state] = useState<{name : string | null}>({name : ""}); // useState도 Generic 타입을 사용하
// state.name
// return <div>{name}</div>
// }
