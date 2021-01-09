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




  /* 스크롤시에 이미지 변환 */
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

  $(window).on('scroll', function(){
    var scrollY = $(this).scrollTop();
    var imgnum = parseInt(scrollY/(turn / (total + 1)));//parseInt()소수점제거
    imgnum %= 60;
    console.log(scrollY);
    //console.log(imgnum);

    $('.human img').attr('src', 'images/main/rotate_img/hum'+ imgnum + '.webp');
  });


  /*  */
});