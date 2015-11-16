(function(){
	$(document).on('focus','input',focusFn).on('blur','input',blurFn);
})();

function focusFn(){
// 	匹配必填字段
	if($(this).attr('required')){
		console.log('required');
	}
}
function blurFn(){
// 	匹配必填字段
	if($(this).attr('required')){
		if($(this).val() == ''){
			inputMsg($(this),'字段不能为空');
		}else{
			$(this).parent().removeClass('has-error').addClass('has-success');
		}
	}
}

function inputMsg(obj,msg){
	obj.parent().addClass('has-error');
	
	
	return;
}
