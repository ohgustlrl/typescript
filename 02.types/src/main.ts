// 타입 단언(type assertion), *타입 표명이라고도 함 
// - type assertion을 사용하면 값의 type 을 컴파일러가 추론하지 않도록 지시하는 것, 프로그래머로써 컴파일러보다 변수 유형에
//   대해 더 잘 이해하고 있을 때 사용

let foo = {};
//foo.bar = 123; // 오류 : 속성 'bar'가 '{}' 에 존재하지 않음

interface Foo {
  bar : number
  bas : string
}

// 아래와 같이 as 키워드를 이용하여 type assertion을 사용함

let foo1 = {} as Foo
foo1.bar = 123;
foo1.bas = 'hello'