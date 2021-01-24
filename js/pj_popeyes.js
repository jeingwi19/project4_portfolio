$(document).ready(function(){
  //푸터 Return to top 버튼 스크롤 맨위로
  $('.ft_txt2 a').on('click', function(){
    $('html, body').stop().animate({scrollTop: 0});
  });
});