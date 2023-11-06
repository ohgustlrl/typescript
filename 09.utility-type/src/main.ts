//Utility Type
// 1. Partial 타입 - 파셔 타입은 특정 타입의 부분 집합을 만족하는 타입을 정의할 수 있음
// ex)

interface Address {
  email : string
  address : string
}

const me: Partial<Address> = {}
const you: Partial<Address> = { email: 'john@abc.com' }
const all: Address = { email: 'john@abc.com', address : 'john' }

// 2. Pick - 특정 타입에서 몇 개의 속성을 선택해서 타입을 정의할 수 있음
// ex)

interface Todo {
  title: string
  description : string
  completed : boolean
}

type TodoPreview = Pick<Todo, "title" | "completed">;

const todo: TodoPreview = {
  title: "Clean Room",
  completed : false
}

// 3. Omit - 특정 타입에서 몇 개의 속성만 제거한 타입을 정의할 수 있음
// ex)

interface Todo2 {
  title : string
  description : string
  completed : boolean
  createdAt : number
}

type TodoPreview2 = Omit<Todo2, "description">

const todo2:TodoPreview2 = {
  title: "Clean Room",
  completed : false,
  createdAt : 1234
}

// 3. Exclude - 일반 Union 유형을 전달한 다음 두번째 인수에서 제거할 멤버를 지정할 수 있음
// ex)

type myUnionType = "kim" | "lee" | "doe" | "john"

let lee : myUnionType = "lee"

let noLeePlease : Exclude<myUnionType, "lee"> = "kim" // Type is "kim" | "doe" | "john"
let noLeeOrKimPlease : Exclude<myUnionType, "lee" | "kim"> = "doe"


// 4. Required - 기존 타입의 유형 중, 일부 속성을 선택사항(옵셔널)으로 정의한 경우에도, Required 속성을 지정하면
//               모든 속성이 있는지 확인해야 함
// ex)

type User = {
  firstName : string
  lastName? : string
}

let firstUser: User = {
  firstName : "John"
}

// let secondUser: Required<User> = {  이 경우 Required 타입 때문에, lastName 속성이 없음으로 에러가 발생
//   firstName : "john"
// }


// 5. Record <Keys, Type> - 속성 키가 Keys이고 속성 값이 Type인 객체 type을 구성함
//                          이 유틸리티는 type의 속성을 다른 type에 매핑하는데 사용함
// ex)

interface CatInfo {
  age : number
  breed : string
}

type CatName = "miffy" | "boris" | "mordred"

const cats : Record<CatName, CatInfo> = {
  miffy : {age : 10, breed : "persian"},
  boris : {age : 5, breed : "maine coon"},
  mordred : {age: 16, breed : "british shorthair"}
}


// 6. ReturnType<T> - 함수 T의 반환 타입으로 구성된 타입을 만듦
// ex)

type T0 = ReturnType<() => string>
type T1 = ReturnType<(s: string) => void>

function fn(str : string) {
  return str
}

const a: ReturnType<typeof fn> = 'hello'
// const b: ReturnType<typeof fn> = true - 함수로 반환된 값이 string 이기 때문에 boolean 값은 에러가 발생함