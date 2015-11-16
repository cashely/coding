var addOptions = {};
$('.silderLeft').click(function () {
    //            $('.easyui-layout').layout('resize');
});
$(window).resize(function () {
    $('.easyui-tabs').tabs('resize');
});
$(document).on('click', '.menu-bar a', function () {
    var _e = $(this);
    if ($('#header-tabs').tabs('exists', _e.text())) {
        $('#header-tabs').tabs('select', _e.text())
    } else {

        addOptions = {
            'title': _e.text(),
            'closable': true,
            'href': 'template/'+ _e.attr('href').slice(1) +'.html',
// 			'content': '<div ng-include="template/' + _e.attr('href').slice(1) + '.html"></div>'
			onLoad:function(){
				
	        }
        }
        $('#header-tabs').tabs('add', addOptions);
    }
});


function ajaxLoadframe(obj){
	$.ajax({
// 		url:'json/menu.json',
		url:'template/' + obj + '.html' ,
		method:'POST',
		success:function(data){
			console.log(typeof data != "object");
// 			根据返回的内容是否为object来显示不同内容
			if(typeof data != "object"){
				$(data).appendTo($('body'));
// 				$('#'+obj).dialog('open');
			}else{
				
				ajaxLoaderror("没有权限！");
			}

		}
	});
}
function ajaxLoaderror(msg){
	$.messager.alert('提示信息',msg,'info');
}

$(document).on('click','.menu-bar h3',function(){
	if($(this).parent().children('ul').length > 0){
		if($($(this).parent().children('ul')).is(':hidden')){
			$(this).parent().siblings('li').children('h3').removeClass('active').end().children('ul').slideUp();
			$(this).parent().children('ul').slideDown();
			$(this).addClass('active');
			
		}else{
			$(this).parent().children('ul').slideUp();
			$(this).removeClass('active');
		}
	}
});