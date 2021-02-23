$(document).ready(function(){
    /* 스플래쉬 3D 애니메이션 */
    //1)텍스트 쪼개기
    var _loadTxt = $('.circle p');

    //2)_loadTxt요소의 텍스트 가져오기
    var txtTyp = _loadTxt.text();
    //console.log(txtTyp);

    //3)_loadTxt 한글자씩 자르기
    _loadTxt.html('');
    var chars2 = txtTyp.split('');
    //console.log(chars2);

    //4)배열 chars2에 각문자들을 자식으로 span요소를 동적 생성해서 _loadTxt에 추가한다
    $.each(chars2, function( index, value){
        //console.log(`${index} : ${value}`);
        _loadTxt.append($(`<span class="txt_load tl_${index}" style="--char-index:${index}"></span>`).text(value));
    });
    /* 스플래쉬 로딩 사라지기 */
    var splash = $('.splash');
    var timeSplash = 0;

    clearTimeout(timeSplash);
    timeSplash = setTimeout(function(e) {
        splash.addClass('display-none');
    }, 3000);
    


    /* gnb 메뉴아이콘 열기 클릭 - PC*/
    $('#gnb').hide();
    //$('#gnb .dep2').hide();

    /* PC - 헤더 */
    $('#pcHeader .menu').on('click',function() {
        var movX = 0;
        var _first = $('#gnb').find('.first');
        var _last = $('#gnb').find('.last');

        if(!$(this).hasClass('active')){
            $(this).addClass('active').next().show().stop().animate({opacity: 1, left: 0}, 500);
            $(this).find('.blind-b').text('전체 메뉴 닫기');
            _first.focus();

            _first.on('keydown', function(e){
                //console.log(e.keyCode);
                if(e.shiftKey && e.keyCode === 9){
                    e.preventDefault();
                    _last.focus();
                }
            });

            _last.on('keydown', function(e){
                if(!e.shiftKey && e.keyCode === 9) {
                    e.preventDefault();
                    $('.menu .btn_open').focus();
                }
            });

        }else{
            $(this).removeClass('active').next().stop().animate({opacity: 0, left: 0}, 300).hide();
            $(this).find('.blind-b').text('전체 메뉴 열기');
            

            /* gnb버튼을 닫을 다시 마우스 호버가능하게 제어 */
            $('.pj_card').on({
                'mouseenter': function(){
                    $(this).hover().next().stop().animate({opacity: 1}, 300);
                },
                'mouseleave': function(){
                    $(this).hover().next().stop().animate({opacity: 0}, 300);
                }
              });
        }


    });

    //헤더 - Contact me 클릭시 페이지 새로고침 비활성화
    $('#pcHeader #gnb .md_gnb_contact').on('click', function(){
        location.href=$(this).attr("href");
        return false;
    });

    /* 모바일 - 헤더 dep1 메뉴열기*/
    var _mgnb = $('#mHeader #gnb');
    _mgnb.find('ul li ul').hide();

    $('#mHeader .menu').on('click', function() {
        if($(this).hasClass('active')){ //닫기
            _mgnb.stop().animate({top: '-100%'}, 500, function(){
                $(this).css({display: 'none'}).find('ul li.on').removeClass('on').children('ul').stop().slideUp('fast');
            });
            $(this).removeClass('active').find('.blind-b').text('전체 메뉴 열기');


        }else{ //열기
            var _first = $('#mHeader #gnb').find('.first');
            var _last = $('#mHeader #gnb').find('.last');

            _mgnb.css({display: 'block'}).stop().animate({top: 0}, 500, function(){
                _first.focus();
            });

            $(this).addClass('active').find('.blind-b').text('전체 메뉴 닫기');

            //포커싱 제어
            _first.on('keydown', function(e){
                //console.log(e.keyCode);
                if(e.shiftKey && e.keyCode === 9){
                    e.preventDefault();
                    _last.focus();
                }
            });

            _last.on('keydown', function(e){
                if(!e.shiftKey && e.keyCode === 9) {
                    e.preventDefault();
                    $('.menu .btn_open').focus();
                }
            });
        }

        //모바일 - depth1 a 클릭
        _mgnb.find('>ul>li>a').on('click', function(){
            if($(this).next().size() === 0){
                location.href=$(this).attr("href");
            }else{
                $(this).parent().siblings().removeClass('on').find('ul').stop().slideUp("fast");
                $(this).next().stop().slideToggle("fast").parent().toggleClass('on');
            }

            return false;
        });
    });

    
    var scrollY = 0;
    var timer = 0;

    $(window).on('scroll', function(){
        var scrollT = $(this).scrollTop();
        console.log(scrollT);
        clearTimeout(timer);timer

        timer = setTimeout(function (){
            scrollY = $(this).scrollTop();
            //console.log(scrollY);
        }, 100);

        //모바일 - scroll했을때 gnb에 .bgfix_gr나타나기
        if(scrollT > 40){
            $('.bgfix_gr').stop().animate({opacity: 1});
        }else{
            $('.bgfix_gr').stop().animate({opacity: 0});
        }
    });

    
    //모바일 해상도 푸터 스크립트 공통

    /* 푸터 Return to top버튼 클릭 스크롤 맨 위로 */
    $('.ft_txt2 a').on('click', function(){
        $('html, body').stop().animate({scrollTop: 0});
    });

    /* 모바일해상도 - 푸터 li 버튼 클릭 애니메이션 */
    if($(window).width() < 361){
        $('#footer .btn_area .ft_txt2').on('click', function(){
            $(this).addClass('active').focus().siblings().removeClass('active');
        });
        $('#footer .btn_area .ft_txt3').on('click', function(){
            $(this).addClass('active').focus().siblings().removeClass('active');
        });
    }
    
});