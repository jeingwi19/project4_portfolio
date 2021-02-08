$(document).ready(function(){
  var timer = 0;

  //스크롤하면 가장 위에 배경이미지 opacity
  $(window).on('scroll', function(){
    var scrollY = $(this).scrollTop();
    var docHei = $(document).height();
    var winTop = parseInt($(this).scrollTop());
    console.log(scrollY, docHei, winTop);
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
      //1) 문서 전체 스크롤 높이 => docHei
      //2) 전체 높이에서 1/2를 조건문에 넣기
    /* if(winTop > docHei * 1/2){
      $('.soopie3').addClass('on');
    }else{
      $('.soopie3').removeClass('on');
    } */

    clearTimeout(timer);
    timer = setTimeout(function () {
      var scrollBtm = scrollY + $(this).height();

      $('.fade').each(function (){
        var fadeBtm = $(this).offset().top + $(this).outerHeight() * 0.2;
        if(scrollBtm > fadeBtm) $(this).addClass('on');
        else $(this).removeClass('on');
      });
    }, 50);

    //.other_view .m_gnb 아래서 위로 fade
    if(winTop > docHei * 3/5){
      $('.m_gnb').stop().animate({opacity: 1, top: 0});
    }else{
      $('.m_gnb').stop().animate({opacity: 0, top: 80});
    }

    //.other_view .m_sub 위에서 아래로 fade
    if(winTop > docHei * 3/5){
      $('.m_sub').stop().animate({opacity: 1, top: 0});
    }else{
      $('.m_sub').stop().animate({opacity: 0, top: -80});
    }

    //모바일 해상도 스크롤 스크립트 변경
    if($(window).width() < 361){
      //.cha_talk 모바일 해상도에서 숨기기
      $('.cha_talk').removeClass('on');

      //.other_view .m_gnb, .m_sub 모바일 해상도 일때 액션 변경
      timer = setTimeout(function () {
        var scrollBtm = scrollY + $(this).height();

        $('.m_gnb').each(function (){
          var fadeBtm = $(this).offset().top + $(this).outerHeight() * 0.2;
          if(scrollBtm > fadeBtm) $(this).stop().animate({opacity: 1, left: 0, top: 0});
          else $(this).stop().animate({opacity: 0, left: -80, top: 0});
        });

        $('.m_sub').each(function (){
          var fadeBtm = $(this).offset().top + $(this).outerHeight() * 0.2;
          if(scrollBtm > fadeBtm) $(this).stop().animate({opacity: 1, left: 0, top: 0});
          else $(this).stop().animate({opacity: 0, left: 80, top: 0});
        });
      }, 50);
    }
  });

  //모바일 해상도 헤더 색상 변경
  if($(window).width() < 361){
    $('#mHeader .menu').on('click', function() {
      if($(this).hasClass('active')){
        $(this).prev().addClass('color');
      }else{
        $(this).prev().removeClass('color');
      }
    });
  }

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

});