$(document).ready(function(){
  //스크롤하면, 배경이미지 opacity 0;
  $(window).on('scroll', function(){
    var scrollY = $(this).scrollTop();
    //console.log(scrollY);
    if(scrollY > 100){
      $('.fixed_bg').addClass('on');
    }else{
      $('.fixed_bg').removeClass('on');
    }
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