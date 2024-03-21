// mousemove
const box1 = document.querySelector('#box1');

function onMouseMove(e) {
  console.log(`client: (${e.clientX}, ${e.clientY})`);
  console.log(`page: (${e.pageX}, ${e.pageY})`);
  console.log(`offset: (${e.offsetX}, ${e.offsetY})`);
  console.log('------------------------------------');
}

box1.addEventListener('mousemove', onMouseMove);

// mouseover & mouseout
const box2 = document.querySelector('#box2');

function printEventData(e) {
  console.log('event:', e.type);
  console.log('target:', e.target);
  console.log('relatedTarget:', e.relatedTarget);
  console.log('------------------------------------');
  if (e.target.classList.contains('cell')) {
    e.target.classList.toggle('on');
  }
}

box2.addEventListener('mouseover', printEventData);
box2.addEventListener('mouseout', printEventData);
