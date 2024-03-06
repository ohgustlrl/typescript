// keyof 연산자
// keyof 연산자는 제공된 타입의 키를 추출하여 새로운 Union 타입으로 반환함

interface IUser {
  name : string;
  age : number;
  address : string;
}

type UserKeys = keyof IUser
//  "name" | "age" | "address" 가 반환됨

const user = {
  name : "john",
  age : 20,
  address : "seoul"
}

//위와 같은 객체를 타입으로 변경하기 위해 typeof 를 사용

type KeyUser = keyof typeof user

//위와 같이 처리하면 이미 만들어진 객체를 타입으로 변환하고 key를 Union 타입으로 반환할 수 있음

enum UserRole {
  admin,
  manger
}

//enum 형태에서 key추룰하는 형태는 아래와 같다.

type UserRoleKey = keyof typeof UserRole