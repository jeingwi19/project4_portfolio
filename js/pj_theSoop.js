$(document).ready(function(){
  //스크롤하면 가장 위에 배경이미지 opacity
  $(window).on('scroll', function(){
    var scrollY = $(this).scrollTop();
    var docHei = $(document).height();
    console.log(scrollY, docHei);
    if(scrollY > 100){
      $('.fixed_bg').addClass('on');
    }else{
      $('.fixed_bg').removeClass('on');
    }

    //.cha_talk 스크롤하면 말주머니 나타나기 addClass '.on'
    if(scrollY > 100){
      $('.cha_talk').addClass('on');
    }else{
      $('.cha_talk').removeClass('on');
    }

    //#cnt1 .d2 모바일 로고 나타나기
    if(scrollY > 1000){
      $('#cnt1 .d2').addClass('on');
    }else{
      $('#cnt1 .d2').removeClass('on');
    }

    //.soopie3 캐릭터 서서히 나타나기
    //현재의 스크롤이 $(document)의 1/2지점 이상을 만족하면 addClass('on') 아니면 removeClass('on');
      //1) 문서 전체 스크롤 높이를 구하기 = 6114
      //2) 전체 높이에서 1/2해준다.
      //?? fade? 해줘야하나? 애니메이션CSS 번복 오류
    if(scrollY > docHei * 1/2){
      $('.soopie3').addClass('on');
    }else{
      $('.soopie3').removeClass('on');
    }
  });

  //#cnt1 .m_view .m_main a에 포커싱,마우스오버 했을때 애니메이션을 멈추기
  $('#cnt1 .m_view .m_main a').on({
    'focus': function(){
      $(this).prev('.devi1').addClass('on').parent('.m_main').addClass('on');
    },
    'blur': function(){
      $(this).prev('.devi1').removeClass('on').parent('.m_main').removeClass('on');
    }
  });

  $('#cnt1 .m_view .m_main .devi1').hover(function(){
    $(this).addClass('on');
  }, function(){
      $(this).removeClass('on');
  });


  //푸터 Return to top 버튼 스크롤 맨 위로
  $('.ft_txt2 a').on('click', function(){
    $('html, body').stop().animate({scrollTop: 0});
  });
});