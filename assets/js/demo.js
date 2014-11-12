$(document).ready(function() {
	$(".ui-tabs-nav li").click(function(){
				//	alert($(this).index());
				//	alert($(".ui-tabs-panel").eq($(this).index()).html());
					$(".ui-tabs-panel").hide()
					$(".ui-tabs-panel").eq($(this).index()).show();
					$(".ui-tabs-nav li.ui-tabs-selected").removeClass("ui-tabs-selected");
					$(this).addClass("ui-tabs-selected");
				});
});

$(document).ready(function(){
 $('#my-dropdown').sSelect();
});

$(document).ready(function(){
var wap_val = [];
$(".swap").each(function(i){
    wap_val[i] = $(this).val();
    $(this).focusin(function(){
        if ($(this).val() == wap_val[i]) {
            $(this).val("");
        }
    }).focusout(function(){
        if ($.trim($(this).val()) == "") {
            $(this).val(wap_val[i]);
        }
    });
});
});


/*幻灯片*/

$(function(){

	var sw = 0;

	$(".demo .num a").mouseover(function(){

		sw = $(".num a").index(this);

		myShow(sw);

	});

	function myShow(i){

		$(".demo .num a").eq(i).addClass("cur").siblings("a").removeClass("cur");

		$(".demo ul li").eq(i).stop(true,true).fadeIn(600).siblings("li").fadeOut(600);

	}

	//滑入停止动画，滑出开始动画

	$(".demo").hover(function(){

		if(myTime){

		   clearInterval(myTime);

		}

	},function(){

		myTime = setInterval(function(){

		  myShow(sw)

		  sw++;

		  if(sw==3){sw=0;}

		} , 3000);

	});

	//自动开始

	var myTime = setInterval(function(){

	   myShow(sw)

	   sw++;

	   if(sw==3){sw=0;}

	} , 3000);

});


$(function(){
    $('#dialog').click(function(){ 
        $.blockUI({ message: $('#imgBox') }); 
		$('.blockOverlay').attr('title','单击关闭').click($.unblockUI); 
		$('.close').click($.unblockUI);
     });
});


