$(document).ready(function(){

  /* 텍스트 둥글게 만들기 */
  var _typing = $('.move_cycle p');
  var rotateDeg = 8; //회전하려는 각도

  //1)_typing요소의 텍스트 가져오기
  var txt = _typing.text();
  //console.log(txt);

  //2)_typing 한글자씩 잘라서 회전시키기
  _typing.html('');
  //3) _typing 문장을 한 글자씩 잘라 배열에 저장
  var chars = txt.split('');
  //.split('')란? -> 한글자씩 자르기 메서드
  //console.log(chars);
  //["C", "L", "I", "C", "K", "!", " ", "C", "L", "I", "C", "K", "!"]

  //4)배열 chars에 각문자들을 자식으로 span요소를 동적생성해서 _typing에 추가한다
  //$.each()메서드 => $.each(배열명, function(index번호, value값){});
  $.each( chars, function( index, value ){
    //console.log( index + ": " + value );
    _typing.append($('<span></span>').text(value));
  });

  //5)동적생성 끝난 span 태그 회전시키기
  _typing.children().each(function (index) { //0*6은 0도, 1*6은 6도, 2*6은 12도...
    $(this).css('transform', 'rotate('+ index*rotateDeg + 'deg)');
  });


  /* 스크롤시에 이미지 변환, 말주머니변환 */
  var windowHei = $(window).height();
  var stickyTop = $('.human_area').offset().top;
  //console.log(windowHei, stickyTop);
  $('.human_area').css('height', windowHei);

  var total = 59;
  var turn = 500;
  var imgTag = '';
  /* for(var i=1; i<=total; i++){
    imgTag += '<img src="images/main/rotate_img/hum'+ i + '.webp" alt="">';
  } */
  //console.log(imgTag);
  //$('.human').append(imgTag);

  $('.talk1').stop().fadeIn('fast').animate({top: -10});
  $(window).on('scroll', function(){
    var scrollY = $(this).scrollTop();
    var imgnum = parseInt(scrollY/(turn / (total + 1)));//parseInt()소수점제거
    var scrollMax = $(document).height() - $(window).height();
    //console.log(scrollY, scrollMax);
    imgnum %= 60;
    
    //console.log(imgnum);

    $('.human img').attr('src', 'images/main/rotate_img/hum'+ imgnum + '.webp');


    //스크롤 말주머니 fade in up
    /* 테스트2 */
    /* if(scrollY >= 0 && scrollY < scrollMax * 1/3){
      $('.talk1').stop().fadeIn('fast').animate({top: -10}).siblings().stop().fadeOut('fast');
    }else if(scrollY >= scrollMax * 1/3 && scrollY < scrollMax * 2/3){
      $('.talk2').stop().fadeIn('fast').animate({top: -10}).siblings().stop().fadeOut('fast');
    }else if(scrollY >= scrollMax * 2/3 && scrollY < scrollMax ){
      $('.talk3').stop().fadeIn('fast').animate({top: -10}).siblings().stop().fadeOut('fast');
    } */

    /* 테스트2 */
    /* $('.human_talk').each(function (index) {
      console.log(index * scrollMax * 1/3);
      console.log(scrollMax * (index + 1) * 1/3);

      if(scrollY >= (scrollMax * (index * 1/3)) && scrollY < (scrollMax * ((index + 1) * 1/3))){
        $(this).stop().fadeIn('fast').animate({top: -10}).siblings().stop().fadeOut('fast').css('top', 0);
      }
    }); */

    /* 최종 */
    $('.human_talk').each(function (index) {
      if(scrollY >= (scrollMax * (index * 1/3)) && scrollY < (scrollMax * ((index + 1) * 1/3))){
        $(this).addClass('on').siblings().removeClass('on');
      }
    });


    /* 모바일 - .deco .p_txt를 opacity 0 */
    if($(window).width() < 361){
      if(scrollY > 10){
        $('#cnt1 .deco .p_txt').stop().animate({opacity: 0}, 300);
      }else{
        $('#cnt1 .deco .p_txt').stop().animate({opacity: 1}, 300);
      }
    }
  });

  /* PC #gnb에 ul li ul li클릭하면 스크롤이동하고 포커싱 */
  $('#pcHeader .pj_1').on('click', function(){
    $('html, body').stop().animate({scrollTop: 640});
    $('#pj1 .pj_card a').focus();
    return false;
  });

  $('#pcHeader .pj_2').on('click', function(){
      $('html, body').stop().animate({scrollTop: 1280});
      $('#pj2 .pj_card a').focus().hover();
      return false;
  });

  $('#pcHeader .pj_3').on('click', function(){
      $('html, body').stop().animate({scrollTop: 1880});
      $('#pj3 .pj_card a').focus().hover();
      return false;
  });


  /* 프로젝트 섹션 카드에 강제 포커스() */
  $('.pj_card a').on({
    'focus': function(){
      $(this).parent().next().stop().animate({opacity: 1});
    },
    'blur': function(){
      $(this).parent().next().stop().animate({opacity: 0});
    }
  });
  

  /* 스크롤 되었을때 처음으로 (top)기능 버튼 이벤트 */
  $('#btnTop').on('click', function(){
    $('html, body').stop().animate({scrollTop: 0});
  });
});