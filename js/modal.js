$(document).ready(function(){
  /* 모달1 - 자기소개 */
  $('.modal_direct').on('click', function (){
    var _openBtn = $(this);
    var _mdCnt = $( $(this).data('targetmodal') );
    //console.log(_mdCnt, typeof _mdCnt);
    var _closeBtn = _mdCnt.find('.btn_close_modal');
    var _first = _mdCnt.find('.first');
    var _last = _mdCnt.find('.last');

    //2) 열려진 모달 말고 접근하지못하게 비활성화
    _mdCnt.siblings().attr({'aria-hidden': true, inert: true});

    //3)dim 동적 생성: 열려질 상세 모달의 바로 앞에(.before)에 동적생성
    _mdCnt.before('<div id="dim"></div>');
    //동적생성하고 바로 변수로 선언
    var _dim = $('#dim');

    //4) resize이벤트 모달위치 제어
    $(window).on('resize', function (){
      //console.log('resize 이벤트 실행중');

      //x,y좌표 구하기
      clearTimeout(timer);//? 오류?

      timer = setTimeout(function() {
        var x = ($(this).width() - _mdCnt.outerWidth()) / 2;
        var y = ($(this).height() - _mdCnt.outerHeight()) / 2;
        console.log(x, y);//???
        _mdCnt.css({left: x, top: y});
      }, 50);//1000/50 = 1초에 20번
    });
    $(window).trigger('resize');//risize이벤트 강제로 실행시켜 모달 가운데 위치

    //5) 위치제어 끝나고, #dim이랑 모달컨텐츠 보여지게 처리, 첫번째 링크에 포커스강제 이동
    _dim.stop().fadeIn('fast').parent('#scrollCnt').next().css('visibility', 'visible');
    _first.focus();
  });
});