/**
 * HTML 태그에 onclick 속성 사용
 * 잘 사용 X
 * <button onclick="console.log('HTML Btn!')">HTML Click!</button>
 */

/**
 * Dom 요소에 접근해
 * onclick 프로퍼티 사용
 * but, 기존 이벤트 덮어쓰고 여러 이벤트 핸들러 못 다룸
 */
let btn = document.querySelector('#myBtn');

btn.onclick = function () {
  console.log('JS Btn!');
};

/**
 * addEventListener(evnet,handler);
 * 이벤트 등록
 * 가장 권장되는 방법
 */
let eventBtn = document.querySelector('#myEventBtn');

function event1() {
  console.log('click! - 1');
}

function event2() {
  console.log('click! - 2');
}

eventBtn.addEventListener('click', event1);
eventBtn.addEventListener('click', event2);

/**
 * removeEventListener(evnet,handler);
 * 이벤트 제거
 * 등록할 때 사용한 핸들러를 등록해야 정상 삭제됨
 */
eventBtn.removeEventListener('click', event2);
