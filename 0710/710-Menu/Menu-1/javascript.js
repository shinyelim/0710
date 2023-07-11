$('.gnb > li').hover(function () {
  $(this).find('ul').slideDown(500);
  $(this).find('a').addClass('off');
  //.gnb li (메인메뉴)에 hover되지 않았을때  마우스가 떠났을때(mouseleave)
  //this => gnb.li>a:hover된 클래스를 의미함 .find()는 gnb 앞에 쓰이는 태그

},function () {
  $(this).find('ul').slideUp(500);
 // $(this).find('a').removeClass('on');
})
