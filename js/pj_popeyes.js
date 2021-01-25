$(document).ready(function(){
  /* 첫번째 PC화면 커서,포커싱하면 애니메이션 작동 */
  //1)포커싱
  $('.dev_link').on({
    'focus mouseenter': function(){
      $(this).children().children('.devi1').addClass('on');
    },
    'blur mouseleave': function(){
      $(this).children().children('.devi1').removeClass('on');
    }
  });

  //푸터 Return to top 버튼 스크롤 맨위로
  $('.ft_txt2 a').on('click', function(){
    $('html, body').stop().animate({scrollTop: 0});
  });
});