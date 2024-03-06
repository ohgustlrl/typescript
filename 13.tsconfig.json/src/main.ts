//1. lib

console.log('hi')
// console에 hover를 해보면 console은 Console 이라는 타입이 지정돼 있음을 알수 있음
// 위와 같이 적용된 이유는 lib에서 dom을 가져왔기 때문
// 컴파일러 옵션중 "lib" 의 배열을 비워 놓으면 아무것도 사용하지 않게되며,
// 아예 "lib"를 명시하지 않거나 주석처리하게 되면 타겟에 따라 다른 기본값을 가질 수 있다.
// 기본값
// 타겟이 es3를 사용할 때 => 기본값 lib.d.ts
// 타겟이 es5를 사용할 때 => 기본값 dom, es6, scripthost 


// 2. module-resolution
// 타입스크립트 컴파일러가 모듈을 찾는 방법을 명시하는 것
// 타입스크립트에서 모듈을 import 할 때 컴파일러는 해당 모듈이
// 상대적(Relative)인지 비상대적(Non-Relative)인지를 먼저 구분함
// 명시적인 방법은 2가지가 있으며 classic과 node 로 명시할 수 있으며
// 명시 된 전략을 통해서 import하는 모듈을 찾을 수 있음
// 상대적 경로 ex) import {b} from './module'
// 비-상대적 경로 ex) import {b} from 'module'

// 3. baseUrl
// 이 프로퍼티가 지정되어 있다면 비-상대적 import의 모듈 해석 과정에 하나의 과정을 추가함
// 만약 ./ 을 baseUrl을 지정했다면 비-상대적 모듈을 찾을 때 tsconfig.json의 동일한
// 폴더부터 찾게 됨

// 4. paths
// .
// └─ src
//    ├─ index.ts
//    ├─ foo
//    │  └─ a
//    │     └─ b
//    │        └─ index.ts
//    │
//    └─ bar
//       └─ index.ts
// 위 와 같은 폴더 구조가 있다고 가정할 때, src/foo/a/b/index.ts에서
// src/bar/index.ts에 있는 함수를 import 하려면
// import { bar } from '../../../../bar' 로 표기해야 함
// 이 떄 paths의 설정을 하게되면 아래와 같이 대체할 수 있다.
// import { bar } from '@src/bar'

// 5. isolatedModules
// 해당 옵션을 true로 설정하면 프로젝트 내에 모든 각각의 소스코드 파일을 모듈로 만들기를 강제함
// 소스코드 파일에서 import 또는 export를 사용하면 그 파일은 모듈이 되지만
// 만약 import / export를 하지 않으면 그 파일은 전역 공간으로 정의 되고 모듈로 정의되지 않아
// 에러가 발생하게 됩니다.
// 따라서 isolatedModules 옵션을 true로 지정한 경우 파일에 export {}를 넣어줘야 함

// 6. removeComments
// 컴파일 시 타입스크립 소스의 주석을 모두 제거할 지 설정할 수 있음

// 7. allowJs
// 타입스크립트에서 js 모듈을 import 해서 사용하고자 할 떄 설정
// 추가적으로 자바스크립트 파일을 가지고 왔을 때 타입이 있지만 자바스크립트라서 오류가 나지 않는
// 부분에 타입을 체크할 수 있도록 설정할 수 있는 checkJs도 같이 설정할 수 있음
// ex) parseFloat() 함수는 인수로 String타입을 받지만 자바스크립트에서는 Number를 넣어도
// 컴파일 전에는 에러가 발생하지 않음, 이때 checkJs를 사용하면 에러를 발생시켜줌

//  7. forceConsistentCasingInFileNames
// 모듈을 import 할 때 비-상대적경로 형태로 지정했을 때 파일의 이름을 대소문자 판별하게 하는 설정
// 기본은 대소문자를 구별하지 않지만, 해당 옵션을 설정하면 대소문자를 판별함

// 8. declaration
// 해당 설정을 true로 설정하게 되면 ts파일을 js로 컴파일 하는 과정에서 js파일과 함께 
// d.ts 선언 파일이 생성되게 됨. 이 선언 파일에서 타입들만 따로 관리할 수 있음

// 9. strict
// 해당 설정을 true인 경우 모든 타입에 대해 엄격한 검사를 진행
// 해당 설정을 true 로 설정하게 되면 아래 세부적인 모든 것들이 true로 설정됨
// noImplicitAny - 명시적이지 않은 'any' type으로 표현식 및 선언 사용 시 오류
// strictNullChecks - null type에 대해 엄격한 검사 설정
// strictFunctionTypes - function type에 대해 엄격한 검사 설정
// strictBindCallApply - 'bind', 'call', 'apply' 함수 메서드 사용 설정
// strictPropertyInitialization - 클래스에서 속성 초기화에 대한 엄격한 검사 설정
// noImplicitThis - 명시적이지 않은 'any' type으로 'this' 표현식 사용 시 오류 검출
// alwaysStrict - strict 모두에서 구문 분석 후, 각 소스 파일에 'use strict' 코드 출력