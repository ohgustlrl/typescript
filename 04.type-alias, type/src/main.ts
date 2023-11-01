// Type Alias(타입 별칭)과 Interface(인터페이스)는 타입의 이름을 지정하는 방법으로 매우 유사하며
// 대부분의 경우 자유롭게 선택할 수 있다.

// 인터페이스 예제

interface People { // 파스칼케이스로 생성
  name : string
  age : number
}

const me: People = {
  name : 'john',
  age : 50,
}


// 타입 별칭 예제

type People1 = { // 인터페이스와 마찬가지로 파스칼케이스 형태로 생성
  name : string
  age : number
}

const me1: People1 = {
  name : 'john',
  age : 50
}


// 1. 차이점

// 1-1. 확장 할 때
// Interface = extends 를 이용해서 확장
// Type alias = intersection을 이용해서 확장

// interface 확장 예제

interface Animal {
  name : string
}

interface Bear extends Animal {
  honey : boolean
}

const bear1 : Bear = {
  name : 'honey bear',
  honey : true
}

// Type alias 확장 예제

type Animal2 = {
  name : string
}

type Bear2 = Animal & {
  honey : boolean
}

const bear2 : Bear = {
  name : 'honey bear',
  honey : true
}

// 1-2. 선언병합
// interface는 선언 병합 (Declaration Merging)이 가능하며 Type alias 는 선언 병합 불가

interface Animal3 {
  name : string
}

interface Animal3 {
  honey : boolean
}

const bear3 : Animal3 = {
  name : 'honey bear',
  honey : true
}

// Type alias에서는 식별자가 중복되었다는 에러를 발생시킴.


// 2. 공통점
// 2-1. Implements 사용이 가능함
// Implements 예제
interface IArticle {
  category : String
  contens : string
}

class Article implements IArticle {
  public category = ''
  public contens = ''
}

type MyArticle = {
  category : string
  contents : string
}

class Article2 implements MyArticle {
  public category = ''
  public contents= ''
}


// 2-2. union 유형을 사용하면 개발자가 타입 A 또는 타입 B가 될 수 있는 새 Type을 만들 수 있음.
//      | 연산자를 사용하여 Type과 Interface를 모두 사용하여 새로운 Union 유형을 생성한다. 
//      주의할 점은 선언할 때 항상 Type이어야 한다.
// Union 유형 예제

interface Animal4 {
  name : string
}

interface Bear3 {
  honey : boolean
}

type NewType = Animal4 | Bear3

const bear4: NewType = {
  name : '',
  honey : true
}

type Animal5 = {
  name : string
}

type Bear4 = {
  honey : boolean
}

type NewType2 = Animal5 | Bear4 

const bear5: NewType2 = {
  name : '',
  honey : false
}