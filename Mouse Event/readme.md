# 인터렉티브 자바스크립트

## 마우스 기본 이벤트

### [ MouseEvent.button ]

- 0: 마우스 왼쪽 버튼
- 1: 마우스 휠
- 2: 마우스 오른쪽 버튼

### [ MouseEvent.type ]

> 한 동작에 여러 이벤트 발생할 수 있음 <br/>
> 운영체제에 따라 이벤트 발생 순서가 달라질 수 있음

#### click

마우스 왼쪽 버튼을 눌렀을 때

#### contextmenu

마우스 오른쪽 버튼을 눌렀을 때

#### dblclick

동일한 위치에서 빠르게 두번 click할 때

#### mousedown

마우스 버튼을 누른 순간

#### mouseup

마우스 버튼을 눌렀다 뗀 순간

## 마우스 이동 이벤트

### [ MouseEvent.type ]

#### mousemove

마우스 포인터가 이동할 때

#### mouseover

마우스 포인터가 요소 밖에서 안으로 이동할 때

#### mouseout

마우스 포인터가 요소 안에서 밖으로 이동할 때

#### mouseenter

마우스 포인터가 요소 바깥에서 안쪽으로 들어갈 때 <br/>
(버블링 발생X, 자식 요소의 영역 계산X)

#### mouseleave

마우스 포인터가 요소 안쪽에서 바깥으로 나갈 때 <br/>
(버블링 발생X, 자식 요소의 영역 계산X)

#### 마우스 포인터 위치

- MouseEvent.clientX, clientY <br/>
  => 화면에 표시되는 창 기준 마우스 포인터 위치
  => 이벤트가 발생한 순간에 브라우저가 콘텐츠를 표시할 수 있는 영역 내에서 마우스의 좌표 정보
  => 좌측 상단의 모서리 위치는 (0,0)

- MouseEvent.pageX, pageY <br/>
  => 웹 문서 전체 기준 마우스 포인터 위치
  => 스크롤로 인해서 보이지 않게된 화면의 영역까지 포함해서 측정

- MouseEvent.offsetX, offsetY <br/>
  => 이벤트가 발생한 요소 기준 마우스 포인터 위치
  => 이벤트가 발생한 대상의 좌측 상단 모서리 위치는 (0,0)

### [ MouseEvent.target ]

#### MouseEvent.target

이벤트가 발생한 요소

#### MouseEvent.relatedTarget

이벤트가 발생하기 직전(또는 직후)에 마우스가 위치해 있던 요소
