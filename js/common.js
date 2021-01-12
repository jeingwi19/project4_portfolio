$(document).ready(function(){
    /* gnb 메뉴아이콘 열기 클릭 */

    $('#gnb').hide();
    //$('#gnb .dep2').hide();

    $('.menu').on('click',function() {
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

    /* dep2 클릭 */
    var scrollY = 0;
    var timer = 0;

    $(window).on('scroll', function(){
        clearTimeout(timer);timer

        timer = setTimeout(function (){
            scrollY = $(this).scrollTop();
            //console.log(scrollY);
        }, 100);
    });

    /* #gnb에 ul li ul li클릭하면 스크롤이동하고 포커싱 */
    $('.pj_1').on('click', function(){
        $('html, body').stop().animate({scrollTop: 640});
        $('#pj1 .pj_card a').focus();
        return false;
    });

    $('.pj_2').on('click', function(){
        $('html, body').stop().animate({scrollTop: 1280});
        $('#pj2 .pj_card a').focus().hover();
        return false;
    });

    $('.pj_3').on('click', function(){
        $('html, body').stop().animate({scrollTop: 1880});
        $('#pj3 .pj_card a').focus().hover();
        return false;
    });

    
});