//const slidewrapper = document.querySelector('.slide-wrapper');
//const slidelist = document.querySelector('.slide-list');
//console.log(slidewrapper,slidelist )
//const btngroup =document.querySelector('.btn-group');
let btn1 = document.querySelector('.btn1');
let btn2 = document.querySelector('.btn2');
let btn3 = document.querySelector('.btn3');
let slideList = document.querySelector('.slide-List');

//console.log(btn1,btn2,btn3)
btn1.addEventListener('click', function () {
  slideList.style.transform = 'translateX(0)'
})
btn2.addEventListener('click', function () {
  slideList.style.transform = 'translateX(-100vw)'
})
//btn3.addEventListener('click', function () {
  //slideList.style.transform = 'translateX(-200vw)'
//})
btn3.addEventListener('click', function () {
  slideList.style.transform = 'translateX(-200vw)'
})
//콜백함수말고 다른함수로 하는방식
/*function bt1() {
  slideList.style.transform ='translateX(0)'
}
btn1.addEventListener('click',bt1)*/
//HTML onclick ='함수()'
//함수 생성 후, 이벤트대상.addEventListener('click',함수)
//3.이벤트.addEventListener('click',fuction(){}) 콜백함수
