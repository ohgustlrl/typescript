// 함수오버로딩

function add1(a : string, b : string) : string {
  return a + b
}

function add2(a : number, b : number) : number {
   return a + b
}

// 위와 같이 기본적인 구조는 같지만 매개변수의 타입이 다를 때 오버로딩을 이용해서 두 함수를 아래와 같이 하나로 만들 수 있음


function add(a: string, b: string): string // 타입지정
function add(a: number, b: number): number // 타입지정

function add(a: any, b: any): any { // 함수를 하나로 처리
  return a + b;
}

console.log(add("hello", "world")) // 매개변수에 따라 결과값이 string이 됨
console.log(add(1, 1)) // 매개변수에 따라 결과값이 number가 됨

// 함수 오버로딩 추가 예제 - 1. 매개 변수를 유니온 타입으로 받는 방법

function saySomething(word : string | string[]) : string {
  if ( typeof word === "string") {
    return word
  } else if ( Array.isArray(word)) {
    return word.join(" ")
  }
  throw new Error("Unable to say something")
}

saySomething(['hello', 'world'])

// 함수 오버로딩 추가 예제 - 1. 매개 변수를 함수오버로딩으로 처리하는 방법

function saySomething2(word : string) : string
function saySomething2(word : string[]) : string

function saySomething2(word : any) : any {
  if ( typeof word === "string") {
    return word
  } else if ( Array.isArray(word)) {
    return word.join(" ")
  }
  throw new Error("Unable to say something")
}

saySomething2(['hello', 'world'])