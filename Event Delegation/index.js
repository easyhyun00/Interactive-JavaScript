const list = document.querySelector('#list');

// for (let item of list.children) {
//   item.addEventListener('click', function (e) {
//     e.target.classList.toggle('done');
//   });
// }

/**
 * 새로운 아이템을 추가하면 기존 등록한 이벤트 핸들러 동작 X
 * => 매번 이멘트 핸들러 추가해야 함
 * => 버블링을 사용하여 해결 가능
 */
const item1 = document.createElement('li');
item1.classList.add('item');
item1.textContent = '일기 쓰기';
list.append(item1);

/**
 * 이벤트 위임 (Event Delegation)
 * 자식 요소에서 발생하는 이벤트를 부모 요소에서 다루는 방식
 */

list.addEventListener('click', function (e) {
  // 부모 요소에도 적용될 수 있어
  // 자식 요소를 명시해서 이벤트를 적용함
  if (e.target.classList.contains('item')) {
    e.target.classList.toggle('done');
  }
});

// 새로운 아이템 추가 시, 이벤트 적용 잘 됨
const item2 = document.createElement('li');
item2.classList.add('item');
item2.textContent = '넷플릭스 시청';
list.append(item2);
