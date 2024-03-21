// 이벤트 객체 (Event Object)
const myInput = document.querySelector('#myInput');
const myBtn = document.querySelector('#myBtn');

/**
 * 이벤트 함수의 첫 번째 파라미터로 이벤트 객체가 전달
 * @param {*} event
 * target(HTML 요소) 사용해서 스타일 변경할 수 있음
 */
function printEvent(event) {
  console.log(event);
  console.log(event.target);
  event.target.style.color = 'red';
}

myInput.addEventListener('keydown', printEvent);
myBtn.addEventListener('click', printEvent);
