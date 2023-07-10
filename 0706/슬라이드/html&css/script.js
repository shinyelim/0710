//forEach,parameter(매개변수)
//forEach,method:array(배열)에서 사용하는 메소드
//배열 안의 값을 순차적으로 함수에게 전달
let buttons = document.querySelectorAll('.btn-group button');
//console.log(buttons)

//1.배열을 반복한 값
//2.배열을 index 값

buttons.forEach(function (btn,index,) {
console.log(btn,index);
  

  //console.log(btn,index)
});
buttons.forEach(function (btn,index) {
  btn.addEventListener('click',function () {
    let slideList = document.querySelector('.slide-list');
    let xValue = -index * 100 + 'vw';
    //slideList.style. transform = 'translateX(' + xValue + ')'
    slideList,style. transform = `translateX(${xValue})`;
  })

})

//``은 
/*const number = ['0','1','2','3','4'];
number.forEach(function (item,number) {
  console.log(number,item);
});*/




