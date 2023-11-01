// 접근 제어자

// 에러가 발생하는 예제

// class Post {
//   constructor(id: number , title: string) {
//     this.id = id
//     this.title = title
//   }
  
//   getPost() {
//     return `postID: ${this.id}, postTitle : ${this.title}`
//   }
// }

// const post: Post = new Post(1, "title 1")

// 위와 같은 경우 Post 형식에 'id' 속성이 없습니다와 Post 형식에 'title'속성이 없습니다 와 같은 에러가 발생함
// this로 접근하는 경우 아래와 같이 class의 body 안에 타입을 지정해준다.

class Post {
  id : number = 0 // 타입 지정
  title : string = '' // 타입 지정
  constructor(id: number , title: string) {
    this.id = id
    this.title = title
  }
  
  getPost() {
    return `postID: ${this.id}, postTitle : ${this.title}`
  }
}

const post: Post = new Post(1, "title 1")

// 위 처럼 타입을 지정할 수 있지만 접근제어자(access-modifier)를 이용가능
// 접근제어자 종류

// 1. public - default 값이며, 어디서나 접근 가능
// 퍼블릭 타입 예제 - 타입 지정 시 접근제어자가 없으면 public과 같다

class Post1 {
  public id : number = 0 // 타입 지정
  public title : string = '' // 타입 지정
  constructor(id: number , title: string) {
    this.id = id
    this.title = title
  }
  
  getPost() {
    return `postID: ${this.id}, postTitle : ${this.title}`
  }
}

const post1: Post1 = new Post(1, "title 1")

console.log(post1.id)
console.log(post1.title)
// public일 때, 위와 같이 접근해도 에러가 발생하지 않음

// 2. protected - 클래스 내, 상속받은 자식 클래스에서 접근 가능
// 프로텍티드 접근 제어자 예제

class Post2 {
  protected id : number = 0 // 타입 지정
  protected title : string = '' // 타입 지정
  constructor(id: number , title: string) {
    this.id = id
    this.title = title
  }
  
  getPost() {
    return `postID: ${this.id}, postTitle : ${this.title}`
  }
}

// const post2: Post2 = new Post(1, "title 1")

// console.log(post2.id) - 에러 : 'id'속성은 보호된 속성이며 'Post' 클래스 및 해당 하위 클래스 내에서만 엑세스할 수 있음
// console.log(post2.title) - 에러 : 'title'속성은 보호된 속성이며 'Post' 클래스 및 해당 하위 클래스 내에서만 엑세스할 수 있음
// 따라서 아래와 같이

class PostB extends Post {
  getPost() {
    return this.title
  }
}


// 3. private - 클래스 내에서만 접근 가능

class Post3 {
  private id : number = 0 // 타입 지정
  protected title : string = '' // 타입 지정
  constructor(id: number , title: string) {
    this.id = id
    this.title = title
  }
  
  getPost() {
    return `postID: ${this.id}, postTitle : ${this.title}`
  }
}

// class PostC extends Post {
//   // getPost() {
//     return this.id
//   }
// }  위 클래스에서 프라이빗 접근제어자를 설정하게 되면 해당 클래스 내부에서만 접근이 가능해진다.


// 클래스의 매개변수와 접근제어자는 아래와 같이 깔끔하게 정리할 수 있다.

class Post4 {
  constructor(
    private id: number,
    protected title: string
  ) {}
  
  getPost() {
    return `postID: ${this.id}, postTitle : ${this.title}`
  }
}
