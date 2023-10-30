"use strict";
// 1. Boolean 타입
let boolean;
let falseBoolean = false;
// 2. Number 타입
let number;
let integer = 6;
let float = 1.12345;
// 3. String 타입
let string;
let firstName = "Doe";
let firstName2 = "Doe";
// 4. Array 타입
// 한가지 타입만 가지는 배열
let arr1 = ["john", "kim"];
let arr2 = ["john", "kim"]; //인터페이스 Array에 타입을 준 방법, 위와 같음
// 여러 타입을 가지는 배열 (유니언 타입 사용)
let arr3 = ["John", 1, 2];
let arr4 = ["John", 1, 2];
// 여러 타입을 단언할 수 없는 경우 - any 타입
let someArr = ["John", 1, false, [], {}];
// 읽기전용 배열 생성(readonly, readonlyArray)
let stringArr = ['a', 'b'];
let numberArr = [1, 2];
//stringArr.push('c') // readonly 에서 푸시했을 경우 에러
//numberArr[0] = 3 // readonly에서 인덱스 밸류값을 변경하려 할 때 나는 에러
// 5. Tuple 타입
let tuple1;
tuple1 = ['a', 1];
//tuple1 = ['a', 1, 2] // 튜플타입 지정 시 2개만 지정했지만 소스가 3개가 들어가 나는 에러
//tuple1 = [1, 'a'] // 튜플타입 지정 시 순서가 맞지 않아 나는 에러
let users; // 2차원 배열을 의미
users = [[1, "john"], [2, "Doe"]];
let tuple2;
tuple2 = ['a', 1];
tuple2.push(2); // 튜플타입에서 푸시로 추가하는 것은 허용됨
console.log(tuple2);
// tuple2.push(false) 튜플타입에서 푸시로 값을 추가하는 것 중 타입에 맞지 않는 값은 추가 시 에러 발생 
// 6. any 타입
let any = 'abc';
any = 1;
any = [];
// 7. unknown 타입
let unknown = false;
// let string1: string = unknown  언노운 타입에는 스트링 타입을 사용할 수 없음
let string2 = unknown; // 해당 형태는 약간 강제로 타입을 지정하는 형태로 강제 지정하는 방법 중 하나
// 8. object 타입
let obj = {};
let arr = [];
// let nul:object = null // ts strict 모드에서 null 은 오브젝트가 아닌것으로 취급함
let date = new Date();
const obj1 = {
    id: 1,
    title: "타이틀1"
};
// 9. union 타입
let union;
union = 'hi';
union = 1;
// 10. function 타입
// let func1;
// func1 = function (x, y) { // 함수 매개변수는 암시적으로 any 타입이 포함되기 떄문에 에러가 발생함
//   return x * y
// }
// 따라서 아래와 같이 지정해야 함(반환되는 값이 있는 경우)
let func1; // (argument : type ) => 반환하는 값에 대한 type
func1 = function (x, y) {
    return x * y;
};
//반환되는 값이 없는 경우
let func2; // 반환되는 값이 없는 경우 () => void 타입을 지정
func2 = function () {
    console.log('hi');
};
// 11. null, undefined 타입
// let number1: number = undefined; number 타입에는 undefined 타입은 지정할 수 없음
// 다만 typescript config 파일에서 "strictNullChecks"의 false 속성값을 통해 할당할 수 있음
// 보통은 strictNullChecks 모드를 true 를 사용해야 함
// let number1:number = undefined;
// let string3:string = null;
// let obj2: {a: 10, b: false} = {
//   a : undefined,
//   b : false
// }
// let arr5:any[] = null;
// let undefined1:undefined = null
// let null1:null = undefined
// let void1: void = null
// 12. void 타입 - 보통 함수에서 리턴을 반환하지 않는 경우 void 를 지정함
let void2 = undefined; // void 타입에는 undefined는 할당 가능함
function greeting() {
    console.log("함수 실행결과는?", 'hi');
}
const hi = greeting();
console.log("반환하는 값은?", hi);
// 13. never - 항상 오류를 출력하거나 리턴값을 절대로 내보지 않을 때 사용
function throwError() {
    throw new Error('error');
}
function keepProcessing() {
    while (true) {
        console.log('hi');
    }
}
const never = []; //빈 배열을 타입으로 지정하는 경우, 암시적으로 never타입으로 할당이 됨 
//never.push(1) // 따라서 빈 배열인 경우에 배열의 값을 바꾸려는 경우 에러가 발생함
