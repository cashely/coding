var touchEvent = (function(){
            $('html').css('font-size',$(window).width()/320*20+'px');
          $('body').width($(window).width()).height($(window).height());
            
            var app = $('.app-content');
//            alert();
            var page = 0;
            function tEvent(e){
                if(e.type === 'swipeleft' && page < app.children('.main-box').length-1){
                    
                    app.children('.main-box').eq(page).removeClass('box-active').addClass('box-prev').siblings().removeClass('box-active');
                    page++;
                    app.children('.main-box').eq(page).addClass('box-active');
                }else if(e.type ==='swiperight' && page > 0){
                    app.children('.main-box').eq(page).removeClass('box-active');
                    page--;
                    app.children('.main-box').eq(page).removeClass('box-prev').addClass('box-active');
                }
            }
                
            scrollEvent = function(){
                touch.on('.app-content','swipeleft swiperight',function(events){
                    tEvent(events);
                })
            }
            
            
            return scrollEvent;
        })();
        
        touchEvent();