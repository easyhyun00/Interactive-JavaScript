// [ HTML 속성 (HTML attribute) ]
const tomorrow = document.querySelector('#tomorrow');
const item = tomorrow.firstElementChild;
const link = item.firstElementChild;

// [ id 속성 ]
console.log(tomorrow.id);

// [ class 속성 ]
console.log(item.className);

// [ href 속성 ]
console.log(link.href);
/**
 * tomorrow 에 href 속성 있지만,
 * undefined 출력
 * => ol 태그에는 href 가 표준속성이 아니기 때문
 * 표준속성 https://html.spec.whatwg.org/#attributes-3
 */
console.log(tomorrow);
console.log(tomorrow.href);

/**
 * [ getAttribute - 속성 접근 ]
 * 표준/비표준 관계 없이 모든 속성 접근 가능
 * class 속성 접근할 때, className 아니라 'class'
 */
console.log(tomorrow.getAttribute('href'));
console.log(item.getAttribute('class'));

/**
 * [ setAttribute - 속성 추가(수정) ]
 * setAttribute('속성','값')
 */
tomorrow.setAttribute('class', 'list'); // 추가
link.setAttribute('href', 'https://www.naver.com'); // 수정

/**
 * [ removeAttribute - 속성 제거 ]
 */
tomorrow.removeAttribute('href');
tomorrow.removeAttribute('class');

/**
 * getAttribute, setAttribute, removeAttribute
 * 모두 속성이름 대소문자 구별 X
 */
console.log(item.getAttribute('ClasS'));
