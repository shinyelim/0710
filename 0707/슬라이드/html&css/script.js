//forEach,parameter(매개변수)
//forEach,method:array(배열)에서 사용하는 메소드
//배열 안의 값을 순차적으로 함수에게 전달






//console.log(buttons)

//1.배열을 반복한 값
//2.배열을 index 값

let buttons = document.querySelectorAll('.btn-group button');

// forEach 파라미터
// 1. 배열을 반복한 값 (btn)
// 2. 배열의 인덱스 값 (index)
// 0,1,2 * 100 /  translateX 0 -100 -200

// click 이벤트 추가 => 첫번째 매개변수 (btn)
buttons.forEach(function(btn, index){
  btn.addEventListener('click', function(){
    let slideList = document.querySelector('.slide-list');
    let xValue = -index * 100 + 'vw';
    // slideList.style.transform = 'translateX(' + xValue + ')'
    slideList.style.transform = `translateX(${xValue})`;
    //buttons 라는 배열을 한 번 더 돌면서 모든 버튼이 가지고있는 active classList.remove
    /*buttons.forEach(function (otherBtn) {
      otherBtn.classList.remove('.active')
    })*/
    //클릭된 버튼에만 active classList.add 적용
    //btn.classList.add('.active')
  })
  //조건문
  //contains:컨텐츠를 찾아주는 기능//
buttons.forEach(function (otherBtn) {
  if(otherBtn  !== btn && otherBtn.classList.contains('active'))
  {

  }otherBtn.classList.remove('active');
  
})
})

/*buttons.forEach(function (btn,index,) {
console.log(btn,index);
  

  //console.log(btn,index)
});
buttons.forEach(function (btn,index) {
  btn.addEventListener('click',function () {
    let slideList = document.querySelector('.slide-list');
    let xValue = -index * 100 + 'vw';
    //slideList.style. transform = 'translateX(' + xValue + ')'
    slideList,style. transform = `translateX(${xValue})`;
    btn.classList.add('.active')
  })

})*/

//``은 
/*const number = ['0','1','2','3','4'];
number.forEach(function (item,number) {
  console.log(number,item);
});*/

