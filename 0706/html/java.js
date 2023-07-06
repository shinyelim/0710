//dropdown-btn을 클릭했을때 dropdown-menu한테 active class추가
//dropdown-menu가 active 를 가지고 있을때 클릭하면 active class remove 해줘야한다.
//toggle
let dropdownBtn = document.querySelector('.dropdown-btn');
let dropdowMenu = document.querySelector('.dropdown-menu ');
console.log(dropdownBtn,dropdowMenu )
dropdownBtn.addEventListener('click',function () {
  dropdowMenu.classList.toggle('active');
})
//프로필사진을 클릭하면 메뉴판이 생겨나다 사라지는 기능이다.//