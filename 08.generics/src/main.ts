
function getArrayLength(arr: number[] | string[] | boolean[]):number {
  return arr.length
}

const arr1 = [1,2,3]
const arr2 = ['a','b','c']
const arr3 = [false, true, false]

getArrayLength(arr1)
getArrayLength(arr2)
getArrayLength(arr3)


// 위 처럼 arr 매개변수에 union 타입으로 속성을 줄 수도 있지만 아래와 같이 generic을 이용할 수 있다.

function getArrayLength2<T>( arr: T[] ):number { // <T> 타입을 매개변수처럼 받아서 사용이 가능하며 관습적으로 T를 사용함
  return arr.length
}

getArrayLength2<number>(arr1)
getArrayLength2<string>(arr2)
getArrayLength2<boolean>(arr3)


// 추가 예제 

interface Vehicle {
  name : string
  color : string
  option : any
}

const car:Vehicle = {
  name : 'car',
  color : 'red',
  option : {
    price : 1000
  }
}

const bike:Vehicle = {
  name : 'bike',
  color : 'black',
  option : true
}

// 위와 같은 예제 중 interface 의 option 타입을 any 타입을 주고 싶지 않을 때 generic을 이용해서 처리할 수 있음

interface Vehicle2<T> {
  name : string
  color : string
  option : T
}

const car1:Vehicle2< { price : number} > = {
  name : 'car',
  color : 'red',
  option : {
    price : 1000
  }
}

const bike1:Vehicle2<boolean> = {
  name : 'bike',
  color : 'black',
  option : true
}

// 아래와 같은 상황에서 함수에 매개변수가 두 개 이상인 경우 generic 사용법

// const makeArr = <T> (x: T) => {
//   return [x]
// }

// const array = makeArr(5);
// const array2 = makeArr('a')

const makeArr = <X, Y>(x:X, y:Y): [X, Y] => {
  return [x, y]
}

const arr99 = makeArr<number, number>(4, 5)
const arr98 = makeArr<string, string>('a', 'b')

const makeArr1 = <X, Y = string>(x:X, y:Y): [X, Y] => {
  return [x, y]
}

const arr97 = makeArr1<string>('a', 'b')


// 제네릭을 extends 와 같이 사용해보기 

const makeFullName = <T extends { firstName : string, lastName : string}>(obj: T) => { //제네릭을 사용하여 추가할 매개변수를 지정하고 extends를 이용하여 기본값을 넣어줄 수 있음
  return {
    ...obj,
    fullName : obj.firstName + " " + obj.lastName
  }
}

makeFullName({firstName : "john", lastName: "doe", location : 'seoul'})


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