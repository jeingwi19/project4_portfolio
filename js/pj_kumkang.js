$(document).ready(function(){
  var timer = 0;

  //스크롤하면, 배경이미지 opacity 0;
  $(window).on('scroll', function(){
    clearTimeout(timer);

    var scrollY = $(this).scrollTop();
    console.log(scrollY);
    if(scrollY > 100){
      $('.fixed_bg').addClass('on');
    }else{
      $('.fixed_bg').removeClass('on');
    }

    timer = setTimeout(function () {
      var scrollBtm = scrollY + $(this).height();

      $('.fade').each(function () {
        //스크롤바 이동거리 + 윈도우 창 높이 > .fade 브라우저 수직 위치 + 자신의 높이 * 0.2
        var fadeBtm = $(this).offset().top + $(this).outerHeight()*0.2;
        if(scrollBtm > fadeBtm) $(this).addClass('on');
        else $(this).removeClass('on');
      });
    }, 50);
  });

  //.pc_view에 포커싱
  $('#cnt1 .pc_view .img_pc').on({
    'focus': function(){
      $(this).parent('.pc_view').addClass('on').children('.dim').addClass('on');
    },
    'blur': function(){
      $(this).parent('.pc_view').removeClass('on').children('.dim').removeClass('on');
    }
  });

  //.pc_view에 .dim 안내문구 마우스 오버 이벤트
  $('#cnt1 .pc_view .dim').on({
    'mouseenter': function(){
      $(this).addClass('on');
    },
    'mouseleave': function(){
      $(this).removeClass('on');
    }
  });

  
});