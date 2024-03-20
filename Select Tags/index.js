/**
 * id로 태그 선택하기
 * 빈 값 = null
 */
const myNumber = document.getElementById('myNumber');
console.log(myNumber);

/**
 * class로 태그 선택하기
 * class 는 여러개 이므로 Elements <-복수
 * 유사 배열배 (완전 배열이라고 부를 수 없음, push splice 이런거 못씀)
 * 깊이 상관없이 코드 상 위에서 부터 차례대로 보여줌
 * 내용이 한 개 있어도 배열로 나와서 colorBtn[0] 으로 봐야함
 * 빈 값 = 빈 배열 = undefined
 */
const colorBtns = document.getElementsByClassName('color-btn');
console.log(colorBtns);
for (let btn of colorBtns) {
  console.log(btn);
}

/**
 * 태그 이름으로 선택하기
 * Elements <- 복수, 유사 배열
 * ('*') <- 모든 태그 선택
 */
const btns = document.getElementsByTagName('button');
console.log(btns);
for (let btn of btns) {
  console.log(btn);
}

const allTags = document.getElementsByTagName('*');
console.log(allTags);

/**
 * css 선택자로 태그 선택하기
 * id 는 #, class 는 .
 * querySelector 는 한개 (여러개면 첫번째 요소만)
 * querySelectorAll 는 NodeList 라는 유사배열 형태
 * getElment 보다는 querySelector 를 더 자주 사용
 */
const myNumber2 = document.querySelector('#myNumber');
console.log(myNumber2);

const colorBtns2 = document.querySelectorAll('.color-btn');
console.log(colorBtns2);

/**
 * 이벤트 핸들링
 * onclick <- 이거 소문자임...
 */
const decrease = document.querySelector('#decrease');
// 이벤트 핸들러
decrease.onclick = function () {
  console.log('감소버튼');
};
