// Mapped Type
// Mapped Type를 사용하면 중복을 피하기 위해서 다른 타입을 바탕으로
// 새로운 타입을 생성할 수 있음

// Mapped type을 사용하는 것은 type이 다른 type에서 파생되고 동기화 상태를 
// 유지해야 경우에 특히 유용함

// 두 type에 대한 적절한 업데이틀 ㄹ동시에 수행하기 위해 향후 프로그램 편집자의
//규칙에 의존하는 것보다 type 시스템이 관계를 관리하도록 할 때 Mapped type을 사용할 수 있음

// CS에서 "맵(map)"이라하면 어떤 type을 다른 type으로 변환하거나
// 유사한 type을 변환된 type의 다른 목적으로 바꾸는 것을 의미
// js에서 대표적인 예로 Array.prototype.map() 이 있음

// ex) [1,2,3].map(value => value.toString()); 과 같이 배열의 아이템을 가져와
// 문자열로 반환하듯 typeScript에서 Mapped Type은 하나의 type을 가져와 각 속성에
// 변환을 적용하여 다른 type으로 변환시킨다는 의미

type Users = 'john' | 'han' | 'kim';

type UserFirstName = { [K in Users]: String };
const UserFirstNameInfo: UserFirstName = {
  john : 'doe',
  han : 'ho',
  kim : 'jun'
}

type UserAge = { [K in Users]: Number };
const UserAges : UserAge = {
  john : 10,
  han : 20,
  kim : 30
}

// 위 처럼 type을 지정한 후 각 아이템에 타입을 바꿔서 값을 할당할 수 있음

type DeviceFormatter<T> = {
  [K in keyof T]?: T[K];
}

type Device = {
  manufacturer : String;
  price : number;
}

const iphone: DeviceFormatter<Device> = { manufacturer : 'apple', price : 100 }
const priceOnly : DeviceFormatter<Device> = { price: 200 };
const manufacturerOnly : DeviceFormatter<Device> = { manufacturer : 'samsong' }