// 스타일 다루기
const today = document.querySelector('#today');
const tomorrow = document.querySelector('#tomorrow');

/**
 * [ style 프로퍼티 ]
 * 스타일 속성은 카멜표기법 사용
 * 태그에 직접 값이 적용
 * 여러 스타일 적용 어렵
 * => 권장되는 방식 아님
 */
today.children[0].style.textDecoration = 'line-through';
today.children[0].style.backgroundColor = 'pink';

/**
 * [ className 사용해서 스타일 적용 ]
 * css 에 done 스타일 만들고
 * class 이름을 done 으로 설정해 스타일 적용
 * => but, 기존 class 사라짐
 */
today.children[1].className = 'done';

/**
 * [ classList 사용해서 스타일 적용 ]
 * classList: class 목록을 유사배열로 표현
 * 여러 class 전달할 때, 쉼표로 전달 ('a','b')
 * add, remove, toggle 함수 사용 가능
 * add: 클래스 추가
 * remove: 클래스 제거
 * toggle: 없으면 추가, 있으면 제거 (클래스 하나만 전달 가능)
 */
const item = tomorrow.children[0];
item.classList.add('done', 'hello');
item.classList.remove('hello');
