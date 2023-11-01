"use strict";
// 타입 단언(type assertion) * 또는 타입 표명이라고도 함
// - type assertion을 사용하면 값의 type을 프로그래머가 설정하고 컴파일러에 이를 유추하지
//   않도록 지시할 수 있음
//ex) 타입단언 사용법
const bodyEl = document.querySelector('body');
bodyEl.innerHTML = "hello";
// ! => undefined와 null이 절대 아니라고 타입스크립트에 전달하는 방법
// ! => exclamation or bang operator 라고 함 (느낌표 연산자)
// ex) ! 연산자 사용법
const bodyEl1 = document.querySelector('body');
bodyEl1.innerHTML = "hello";
// ex) 타입 가드 사용법 - el이 무조건 있을 때만 innerText를 사용하도록 조건 추가하기
const bodyEl2 = document.querySelector('body');
if (bodyEl2) {
    bodyEl2.innerHTML = "hello";
}
// 타입 단언의 잘못된 예
function func(arg) {
    return arg.toLowerCase();
}
func('hello');
func(null);
// 타입 단언을 string으로 줌으로써 string이 들어올땐 문제가 없지만 null 값이 들어가면 에러가 발생한다.
// 해결방법은 타입 가드를 사용할 수 있음
function func1(arg) {
    if (arg) {
        return arg.toLowerCase();
    }
}
func1('hello');
func1(null);
