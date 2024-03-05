// Extends
// Extends 키워드는 자바스크립트에서도 사용할 수 있으며,
// 부모 클래스에 있는 프로퍼티나 메소드를 상속해서 사용할 수 있게 만들어 줌


// Implements
// Implements 키워드는 새로운 클래스의 타입 체크를 위해서 사용되며,
// 그 클래스의 모양을 정의할 때 사용 (부모 클래스의 프로퍼티와 메소드를 상속받아서 사용하는게 아님)


//ex)

class Car {
  mileage = 0;
  price = 100;
  color = 'white'

  drive() {
    return 'drive!'
  }

  brake() {
    return 'brake!'
  }
}

class Ford extends Car {

}
// 위 처럼 extends로 만든 경우 myFordCar에서 부모의 속성들을 상속받아 사용가능
const myFordCar = new Ford();

class Men {
  age = 0;

  greet() {
    return 'hello'
  }
}

interface Part {
  hands : number;
  legs : number;
}

class godMen implements Men, Part {
// 위 처럼 Implements를 적용하면 godMen 의 에러가 표시되며, Men의 속성이 없다는 에러가 발생함.
// 따라서 아래와 같이 클래스의 내용을 Men의 클래스와 같이 만들어줘야 에러가 처리 됨
// 추가로 interface 를 추가하여 그 모양까지도 갖도록 할 수 있음
  age = 999;
  hands = 999;
  legs = 999;

  greet() {
    return 'hi!'
  }
}

