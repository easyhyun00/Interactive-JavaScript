// 이벤트 버블링 (Event Bubbling)
const content = document.querySelector('#content');
const title = document.querySelector('#title');
const list = document.querySelector('#list');
const items = document.querySelectorAll('.item');

/**
 * [이벤트 버블링]
 * 이벤트가 발생하면, 같은 타입 이벤트를 가진 부모 핸들러도 동작
 * 최상단 window 객체 만날 때까지 반복
 */
/**
 * currentTarget
 * 실제 이벤트 핸들러가 동작하는 요소
 */
/**
 * stopPropagation
 * 버블링 막음
 * 꼭 필요한 경우가 아니라면 버블링 막는 거 추천X
 */
content.addEventListener('click', function (e) {
  console.log('content Event');
  console.log(e.currentTarget);
});

title.addEventListener('click', function (e) {
  console.log('title Event');
  console.log(e.currentTarget);
});

list.addEventListener('click', function (e) {
  console.log('list Event');
  console.log(e.currentTarget);
});

for (let item of items) {
  item.addEventListener('click', function (e) {
    console.log('item Event');
    console.log(e.currentTarget);
    e.stopPropagation();
  });
}
