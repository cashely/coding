$.fn.tabs = function () {
        var _this = $(this);
        var $e = _this.selector;
        var str = '';
        var _text, _url;
        var _tabsLen = $('.tabs').innerWidth(),
            _l, isScroll = false;
        $(document).on('click', $e, function () {
            _text = $(this).text();
            _url = $(this).attr('href').replace("#", "");
            if ($("#" + _url).length > 0) {
                $(".tabs .navbar-nav #" + _url).addClass('active').siblings("li").removeClass("active");
                $(".tabs-content .panel").eq($(".tabs .navbar-nav #" + _url).prevAll().length).show().siblings().hide();
                return;
            } else {
                ajaxLoad("template/" + _url + ".html", addTabs);
            }
        });
        $(document).on('click', '.tabs .navbar-nav a>span', function (e) {
            e.stopPropagation();
            var _index = $(this).parents('li').prevAll().length;
            if ($(this).parents('li').hasClass('active')) {
                $(this).parents('li').prev().addClass('active').end().remove();
                $('.tabs-content').children('.panel').eq(_index).prev().show().end().remove();
            } else {
                $(this).parents('li').remove();
                $('.tabs-content').children('.panel').eq(_index).remove();
            }
            tabsRoll();
        });

        $(document).on('click', '.tabs .navbar-nav a', function (e) {
                e.stopPropagation();
                $(this).parent().addClass('active').siblings('li').removeClass('active');
                $('.tabs-content').children('.panel').eq($(this).parent('li').prevAll().length).show().siblings().hide();
            })
            //    插入panel到tabs里面
        var addTabs = function (data) {

                str = "<div class='panel panel-default'><div class='panel-body'>";
                str += data;
                str += _text;
                str += "</div></div>";
                $('.tabs-content').children('.panel').hide().end().append($(str));
                $('.tabs .navbar-nav').children('li').removeClass('active').end().append($("<li id=" + _url + " class='active'><a href='#'>" + _text + "<span class='fa fa-times-circle'></span></a></li>"));
                //            console.log($('.tabs .navbar-nav').outerWidth() + "," + $('.tabs').innerWidth());
                tabsRoll();
            }
            //移除tabs&panel
        var removeTabs = function () {
                return console.log(1);
            }
            //远程调取模板方法
        var ajaxLoad = function (u, fn) {
            fn = fn || function () {};
            $.ajax({
                url: u,
                type: 'POST',
                success: fn,
                error: function (err) {
                    console.log(err);
                }
            });
        }

        var tabsRoll = function () {
            _tabsLen = $('.tabs').innerWidth() - 120;
            if ($('.tabs .navbar-nav').outerWidth() > _tabsLen) {
                isScroll = true;
                _l = _tabsLen - $('.tabs .navbar-nav').outerWidth();
                $('.tabs .navbar-nav').css('margin-left', _l);
            } else {
                isScroll = false;
                $('.tabs .navbar-nav').css('margin-left', 0);
            }
        }
        $(document).on('click', 'a.roll-left', function () {
            if (isScroll && _l < -200) {
                _l += 200
            } else {
                _l = 0;
            }
            $('.tabs .navbar-nav').css('margin-left', _l);
        });
        $(document).on('click', 'a.roll-right', function () {
            console.log(_l + "," + $('.tabs .navbar-nav').width() + ',' + _tabsLen + "," + isScroll);
            if (isScroll && _l <= 0 && $('.tabs .navbar-nav').width() + _l > _tabsLen) {
                _l -= 200
            }
            $('.tabs .navbar-nav').css('margin-left', _l);
        });
    }
    //实例化tabs
$('.metismenu li ul>li>a').tabs();
