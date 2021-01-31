$(document).ready(function(){
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
    $('#gnb .md_gnb_contact').on('click', function(){
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

    
    

    
});