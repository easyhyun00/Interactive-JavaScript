/**
 * window
 * 전역객체 Global Object
 * https://developer.mozilla.org/ko/docs/Web/API/Window
 */
console.log(window);
console.log(window.innerWidth);
console.log(window.innerHeight);

// console 도 window 객체 안에 들어있음
window.console.log(window);
window.console.log(window.innerWidth);
window.console.log(window.innerHeight);

/**
 * Dom (Document Object Model)
 * 문서 객체 모델
 * html 문서를 객체로 표현한 것
 * 타입은 객체지만 직접 출력하면 html 태그 출력
 * Dom 을 사용하면 html 을 객체처럼 자유롭게 다룸
 */
console.log(document);
console.log(typeof document);

/**
 * dir
 * 문자열 / 숫자 / 불린 => 문자열로 출력
 * 여러 값 전달해도, 첫 번째 값만 출력
 * log => 파라미터로 전달받은 값 위주로 출력
 * dir => 객체의 속성을 자세히 출력
 * 결론: 객체의 속성들을 살펴보고 싶다면 dir 메소드
 */
// document 를 객체로 출력
console.dir(document);

// 출력 테스트
const str = 'Codeit';
const num = 123;
const bool = true;
const arr = [1, 2, 3];
const obj = {
  name: 'lee jihyun',
  email: 'leejihyun0324@gmail.com',
};

console.dir(str);
console.dir(num);
console.dir(bool);
console.dir(arr);
console.dir(obj);
