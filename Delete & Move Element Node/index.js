const yesterday = document.querySelector('#yesterday');
const today = document.querySelector('#today');
const tomorrow = document.querySelector('#tomorrow');

// [노드 삭제]
yesterday.remove();
today.children[1].remove();

/**
 * [노드 이동]
 * prepend - 호출한 노드의 제일 첫번째 자식 노드로
 * append - 호출한 노드의 제일 마지막 자식 노드로
 * before - 호출한 노드의 뒤에 형제 노드로
 * after - 호출한 노드의 앞에 형제 노드로
 */
// tomorrow 의 1번째 자식을 toady 자식 맨 뒤로 이동
today.append(tomorrow.children[1]);

// today 의 1번째 자식을 tomorrow 의 1번째 자식 앞으로 이동
tomorrow.children[1].after(today.children[1]);
