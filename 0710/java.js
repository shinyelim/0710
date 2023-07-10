/*let slidelist = document.querySelector('.slide-list');
let slideItems = document.querySelectorAll('.slide-list li');
//console.log(slidelist,slideItems)
let prevBtn = document.querySelector('.proev');
let nextBtn = document.querySelector('.next');
//console.log(prevBtn,nextBtn)

let currentSlide = 0;
//console.log(currentSlide)

nextBtn.addEventListener('click', function(){
  // slideItems 배열 length의 -1보다 값이 작을 때
  if(currentSlide < slideItems.length - 1){
    currentSlide++;
    slidelist.style.transform = `translateX(-${currentSlide * 100}vw)`
  }
})

prevBtn.addEventListener('click', function(){
  if(currentSlide > 0){
    currentSlide--;
    slidelist.style.transform = 'translateX(-' + currentSlide * 100 + 'vw)'
  }
})*/


let slideList = document.querySelector('.slide-list');
let slideItems = document.querySelectorAll('.slide-list li');
console.log(slideList,slideItems)
let prevBtn = document.querySelector('.prev');
let nextBtn = document.querySelector('.next');

let currentSlide = 0;
//urrentSlide:슬라이드의 현재를 의미를 담고있다.

nextBtn.addEventListener('click', function(){
  // slideItems 배열 length의 -1보다 값이 작을 때
  if(currentSlide < slideItems.length - 1){
    currentSlide++;
    slideList.style.transform = `translateX(-${currentSlide * 100}vw)`
  }
})

prevBtn.addEventListener('click', function(){
  if(currentSlide > 0){
    currentSlide--;
    slideList.style.transform = 'translateX(-' + currentSlide * 100 + 'vw)'
  }
})