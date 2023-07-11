const menuItes = document.querySelectorAll('.gnb > li');
//console.log(menuItes)
menuItes.forEach(function (item) {
  const subMenu = item.querySelector('.sub');

  item.addEventListener('mouseover',function () {
  subMenu.classList.add('active');  
  this.querySelector('a').classList.add('on');

  })
item.addEventListener('mouseleave',function () {
  subMenu.classList.remove('active');
  this.querySelector('on').classList.remove('on');
})
})










