/**
 * [요소 노드 추가하기]
 * 1. 요소 노드 만들기
 * 2. 요소 노드 내용 넣기
 * 3. 요소 노드 추가하기
 */

const today = document.querySelector('#today');

// 1. 요소 노드 만들기
// createElement 사용하여 원하는 태그 노드 만들기
const first = document.createElement('li');

// 2. 요소 노드 내용 넣기
// 단순 텍스트가 아닌 경우 innerHTML 사용
first.textContent = '마트에서 장보기';

// 3. 요소 노드 추가하기
/**
 * prepend - 호출한 노드의 제일 첫번째 자식 노드로 추가
 * append - 호출한 노드의 제일 마지막 자식 노드로 추가
 * before - 호출한 노드의 뒤에 형제 노드로 추가
 * after - 호출한 노드의 앞에 형제 노드로 추가
 */

// prepend
today.prepend(first);

// append
const last = document.createElement('li');
last.textContent = '넷플릭스 보기';
today.append(last);

// before
const prev = document.createElement('p');
prev.textContent = '이전';
today.before(prev);

// after
const next = document.createElement('p');
next.textContent = '이후';
today.after(next);
