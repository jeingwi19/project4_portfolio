$(document).ready(function(){
  //스크롤하면 가장 위에 배경이미지 opacity
  $(window).on('scroll', function(){
    var scrollY = $(this).scrollTop();
    console.log(scrollY);
    if(scrollY > 100){
      $('.fixed_bg').addClass('on');
    }else{
      $('.fixed_bg').removeClass('on');
    }

    if(scrollY > 1000){
      $('#cnt1 .d2').addClass('on');
    }else{
      $('#cnt1 .d2').removeClass('on');
    }
  });


});