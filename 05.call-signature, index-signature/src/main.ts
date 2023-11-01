// 1. 호출 시그니처 방식 - 함수를 재사용하기 위해 만드는 방식

interface getLikeNumber {
  (like: number) : number // 매개변수와 리턴타입 넣어주기
}

interface Post {
  id: number
  title : string
  getLikeNumber: getLikeNumber
}

const post1: Post = {
  id : 1,
  title : 'post1',
  getLikeNumber(like: number) {
    return like
  }
}

post1.getLikeNumber(1);

// 2. 인덱스 시그니처 방식 - 속성의 모든 이름을 미리 알지 못하는 경우가 있지만 값의 형태는 알고 있을 때, index signature을 사용하여 가능한 값의 Type을 지정하는 방식

// 2-1. 객체 인덱스 시그니처

// 객체 인덱스 시그니처 예제 - 계속 속성이 더해져서 post 객체에 모든 속성의 이름을 알지 못하는 경우 사용 가능
interface Post2 {
  [key : string] : unknown // 객체 인덱스 시그니처 지정 부분
  id : number
  title: string
}

const post2: Post2 = {
  id : 1,
  title : 'post'
}

post2['description'] = 'post2 description'
post2['pages'] = 300;

// 2-2. 배열 인덱스 시그니처

// 배열 인덱스 시그니처 예제

interface Names {
  [item: number] : string; // 배열 인덱스 시그니처 지정 부분
}

const userNames = ['john','kim','joe']
userNames[0] === 'john'
