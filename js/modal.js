$(document).ready(function(){
  /* 모달1 - 자기소개 */
  $('.direct_btn').on('click', function (){
    var _openBtn = $(this);
    var mdCntTxt = $(this).data('targetmodal');
    var _mdCnt = $( $(this).data('targetmodal') );
    //console.log(_mdCnt, typeof _mdCnt);
    var _closeBtn = _mdCnt.find('.btn_close_modal');
    var _first = _mdCnt.find('.first');
    var _last = _mdCnt.find('.last');
    var timer = 0;

    //1)캐릭터 회전을 위해 클래스명 .on 추가
    if(mdCntTxt === '#modalIntro') {
      _mdCnt.addClass('on');
    }

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
      clearTimeout(timer);//timer 변수 선언 꼭 해주기

      timer = setTimeout(function() {
        var x = ($(this).width() - _mdCnt.outerWidth()) / 2;
        var y = ($(this).height() - _mdCnt.outerHeight()) / 2;
        //console.log(x, y);
        _mdCnt.css({left: x, top: y});
      }, 50);//1000/50 = 1초에 20번
    });
    $(window).trigger('resize');//risize이벤트 강제로 실행시켜 모달 가운데 위치

    //5) 위치제어 끝나고, #dim이랑 모달컨텐츠 보여지게 처리, 첫번째 링크에 포커스강제 이동
    _dim.stop().fadeIn('fast').next().css('visibility', 'visible');
    _first.focus();

    //6)접근성 추가: 닫기버튼을 누르기전까지 포커스 모달 내부에 존재
    //첫번째 링크에서 shift+tab을 누르면 가장 마지막으로 포커스 강제이동
    _first.on('keydown', function(e){
      //console.log(e.keyCode); //tab 9
      if(e.shiftKey && e.keyCode === 9) {
        e.preventDefault(); //이전으로 되돌아가는 기본기능 차단
        _last.focus();
      }
    });
    //마지막 링크에서 shift+tab을 누르면 가장 처음으로 포커스 강제이동
    _last.on('keydown', function(e){
      if(!e.shiftKey && e.keyCode ===9) {
        //기본 차단
        e.preventDefault();
        //포커스 .first으로
        _first.focus();
      }
    });

    //모달창 닫기버튼 클릭 이벤트
    _closeBtn.on('click', function(){
      //dim 투명도 0으로 사라지기(완료함수 remove()으로 제거)
      _dim.stop().fadeOut('fast', function(){
        $(this).remove();
      });
      //모달컨텐츠 숨기기(visibility) => 나머지형제들을 스크린리더에서 다시 접근할 수 있도록 되돌리기(aria-hidden, inert)
      _mdCnt.css('visibility', 'hidden').siblings().removeAttr('aria-hidden inert');
      //다시 눌렀던 버튼으로 포커스 강제이동
      _openBtn.focus();

      //캐릭터 클래스명 .on제거
      if(mdCntTxt === '#modalIntro') {
        _mdCnt.removeClass('on');
      }
    });

    //#dim을 클릭하는 경우에도 모달창 닫기
    _dim.on('click', function(){
      _closeBtn.trigger('click');
      //.trigger('click') = .click() 같이 쓰인다
    });

    //esc 키보드 누를 경우 모달창 닫기
    $(window).on('keydown', function(e){
      //console.log(e.keyCode); //esc = 27
      if(e.keyCode === 27) _closeBtn.click();
    });



    /* 모달창 - 리스트메뉴 열기 클릭 */
    var _btnlist = $('.info');//li태그 클래스명 active 추가or제거
    _btnlist.find('ul').hide();

    _btnlist.children('button').on('click', function(){
      if(!$(this).parent().hasClass('active')){ //닫겨진 경우
        $(this).next().stop().slideDown('fast').parent().addClass('active').siblings().removeClass('active').find('ul').stop().slideUp('fast');
      }else{ //열린경우 닫기
        $(this).next().stop().slideUp('fast').parent().removeClass('active');
      }

    });

  });


  /* 모달2 - Contact Me 모달 */
  $('.contact').on('click', function(){
    var _openBtn = $(this);
    var _mdCnt = $( $(this).data('targetmodal') );
    var _closeBtn = _mdCnt.find('.btn_close_modal');
    var _first = _mdCnt.find('.first');
    var _last = _mdCnt.find('.last');
    var timer = 0;

    _mdCnt.siblings().attr({'aria-hidden': true, inert: true});


    $(window).on('resize', function (){

      clearTimeout(timer);

      timer = setTimeout(function() {
        var x = ($(this).width() - _mdCnt.outerWidth()) / 2;
        var y = ($(this).height() - _mdCnt.outerHeight()) / 2;
        _mdCnt.css({left: x, top: y});
      }, 50);
    });
    $(window).trigger('resize');

    _mdCnt.css('visibility', 'visible');
    _first.focus();

    //접근성 : 모달창 열리면, 포커스 강제이동
    _first.on('keydown', function(e){
      if(e.shiftKey && e.keyCode === 9) {
        e.preventDefault();
        _last.focus();
      }
    });

    //모달창 밖으로 포커스가 빠져나가지 않게 제어
    _last.on('keydown', function(e){
      if(!e.shiftKey && e.keyCode ===9) {
        e.preventDefault();
        _first.focus();
      }
    });

    //모달창 닫기버튼 클릭 이벤트
    _closeBtn.on('click', function(){
      _mdCnt.css('visibility', 'hidden').siblings().removeAttr('aria-hidden inert');
      _openBtn.focus();
    });

    //modal닫기누르면 다시 원래 포커스로제어
    $('#modalContact .btn_close_modal').on('click', function(){
      $('#cnt3 .contact').focus();
    });

    //이메일form태그에 input안에 영어만 입력할수있게 정규표현객체
    $('#mailArea').on('submit', function(){
      var _tg = $('#umail');
      var regExp = /^[\w]{5,30}$/; //한글만 2~10글자
      var msg = '이메일 주소는 영문, 숫자, 기호로 입력해주세요.';

      if(!regChk(_tg, regExp, msg)) return false;

      //alert('메일을 전송합니다.');

      //이메일 input태그에 정규표현객체
      function regChk(_tg, regExp, msg){
        var result = regExp.test(_tg.val());
        console.log(result);

        if(result){
          alert('서버 준비중 입니다. 왼쪽 하단 e mail 버튼을 눌러 메일을 보내주세요.');
          return true;
        } else{//잘못된 문자열을 입력한 경우 : 경고창, 포커스강제이동
          alert(msg);//?? alret()왜 두번?
          _tg.focus();//잘못 입력한 곳에 포커싱
          return false;
        }
      }
    });
  });
});