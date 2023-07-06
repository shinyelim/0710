//dropdown-btn을 클릭했을때 dropdown-menu한테 active class추가
//dropdown-menu가 active 를 가지고 있을때 클릭하면 active class remove 해줘야한다.
//toggle
let dropdownBtn = document.querySelector('.dropdown-btn');
let dropdowMenu = document.querySelector('.dropdown-menu ');
console.log(dropdownBtn,dropdowMenu )
dropdownBtn.addEventListener('click',function (e) {
  e.preventDefault();//a태그를 쓸경우에는 함수(e) e.preventDefault();을 쓰면됨//
  dropdowMenu.classList.toggle('active');
  //<=프로필사진을 클릭하면 메뉴판이 생겨나다 사라지는 기능이다./
  //조건문으로 구현하기
//()안에있는 조건이 참(T)일시 중괄호 안에 있는 코드를 실행한다. 
//반대로 거짓(E)일경우에는 else을 써서 실행
//active로 현재 버튼의 활성화상태를 확인
//활성화상태이면 참이면 if에있는{}코드로 실행함/반대로 F면 밑에있는 else{}실행됨
if (this.actvie) {
  dropdowMenu.classList.remove('active');
}else{
dropdowMenu.classList.add('active');
}

//not연산자
//버튼이 비활성화 상태라면 활성상태로
//활성상태 => 비활성화상태
//this.active
//
this.actvie = !this.active
}) 


