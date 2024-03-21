// Scroll 이벤트

/**
 * screenY
 * => 웹문서 위에서 부터 몇 px 스크롤했는지
 */
function printEvent(e) {
  console.log(e);
  console.log(window.screenY);
}

window.addEventListener('scroll', printEvent);

/**
 * 스크롤 이벤트 활용
 */

let lastScrollY = 0;

function onSroll() {
  const nav = document.querySelector('#nav');
  const toTop = document.querySelector('#to-top');
  const STANDARD = 30; // 기준값

  // 스크롤이 기준값을 넘었을 때
  if (window.scrollY > STANDARD) {
    nav.classList.add('shadow');
    toTop.classList.add('show');
  } else {
    nav.classList.remove('shadow');
    toTop.classList.remove('show');
  }

  // 스크롤 방향이 아랫쪽 일 때
  if (window.scrollY > lastScrollY) {
    nav.classList.add('lift-up');
  } else {
    nav.classList.remove('lift-up');
  }

  lastScrollY = window.scrollY;
}

window.addEventListener('scroll', onSroll);
